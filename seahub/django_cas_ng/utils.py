from django.conf import settings as django_settings
from django.contrib.auth.models import AnonymousUser
from six.moves import urllib_parse
from django.shortcuts import resolve_url

from seahub.auth import REDIRECT_FIELD_NAME, SESSION_KEY, BACKEND_SESSION_KEY, load_backend

if getattr(django_settings, 'ENABLE_CAS', False):
    from cas import CASClient

def get_protocol(request):
    """Returns 'http' or 'https' for the request protocol"""
    if request.is_secure():
        return 'https'
    return 'http'


def get_redirect_url(request):
    """Redirects to referring page, or CAS_REDIRECT_URL if no referrer is
    set.
    """

    next_ = request.GET.get(REDIRECT_FIELD_NAME)
    if not next_:
        redirect_url = resolve_url(django_settings.CAS_REDIRECT_URL)
        if django_settings.CAS_IGNORE_REFERER:
            next_ = redirect_url
        else:
            next_ = request.headers.get('referer', redirect_url)
        prefix = urllib_parse.urlunparse(
            (get_protocol(request), request.get_host(), '', '', '', ''),
        )
        if next_.startswith(prefix):
            next_ = next_[len(prefix):]
    return next_


def get_service_url(request, redirect_to=None):
    """Generates application django service URL for CAS"""
    if hasattr(django_settings, 'CAS_ROOT_PROXIED_AS'):
        service = django_settings.CAS_ROOT_PROXIED_AS + '/' + request.path
    else:
        protocol = get_protocol(request)
        host = request.get_host()
        service = urllib_parse.urlunparse(
            (protocol, host, request.path, '', '', ''),
        )
    if not django_settings.CAS_STORE_NEXT:
        if '?' in service:
            service += '&'
        else:
            service += '?'
        service += urllib_parse.urlencode({
            REDIRECT_FIELD_NAME: redirect_to or get_redirect_url(request)
        })
    return service


def get_cas_client(service_url=None, request=None):
    """
    initializes the CASClient according to
    the CAS_* settigs
    """
    # Handle CAS_SERVER_URL without protocol and hostname
    server_url = django_settings.CAS_SERVER_URL
    if server_url and request and server_url.startswith('/'):
        scheme = request.META.get("X-Forwarded-Proto", request.scheme)
        server_url = scheme + "://" + request.headers['host'] + server_url
    # assert server_url.startswith('http'), "settings.CAS_SERVER_URL invalid"

    return CASClient(
        service_url=service_url,
        version=django_settings.CAS_VERSION,
        server_url=server_url,
        verify_ssl_certificate=django_settings.CAS_SERVER_CERT_VERIFY,
        extra_login_params=django_settings.CAS_EXTRA_LOGIN_PARAMS,
        renew=django_settings.CAS_RENEW,
        username_attribute=django_settings.CAS_USERNAME_ATTRIBUTE,
        proxy_callback=django_settings.CAS_PROXY_CALLBACK
    )


def get_user_from_session(session):
    try:
        user_id = session[SESSION_KEY]
        backend_path = session[BACKEND_SESSION_KEY]
        backend = load_backend(backend_path)
        return backend.get_user(user_id) or AnonymousUser()
    except KeyError:
        return AnonymousUser()
