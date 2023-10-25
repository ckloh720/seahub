

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "(If left blank, owner will be admin)": "(Je\u015bli puste, w\u0142a\u015bcicielem b\u0119dzie admin)",
    "(current notification)": "(obecne powiadomienie)",
    "(current version)": "(obecna wersja)",
    "1 Year": "1 rok",
    "1 month ago": "1 miesi\u0105c temu",
    "1 week ago": "1 tydzie\u0144 temu",
    "3 days ago": "3 dni temu",
    "30 Days": "30 dni",
    "7 Days": "7 dni",
    "A file with the same name already exists in this folder.": "Plik o takiej samej nazwie ju\u017c istnieje w tym folderze.",
    "About": "O...",
    "About Us": "O nas",
    "Accept": "Zaakceptuj",
    "Accepted": "Zaakceptowane",
    "Accepter": "Zaakceptowa\u0142",
    "Access Log": "Log dost\u0119pu",
    "Actions": "Akcje",
    "Activate user immediately after registration. If unchecked, a user need to be activated by administrator or via activation email": "Aktywuj konto u\u017cytkownik\u00f3w natychmiast po rejestracji. Je\u015bli odznaczone, u\u017cytkownik b\u0119dzie musia\u0142 zosta\u0142 aktywowany przez administratora lub przez e-mail.",
    "Activated": "Aktywowane",
    "Activated Users": "Aktywowani u\u017cytkownicy",
    "Active": "Aktywny",
    "Active Users": "Aktywni u\u017cytkownicy",
    "Activities": "Aktywno\u015bci",
    "Add": "Dodaj",
    "Add Admins": "Dodaj administrator\u00f3w",
    "Add Library": "Dodaj bibliotek\u0119",
    "Add Member": "Dodaj cz\u0142onka",
    "Add Terms and Conditions": "Dodaj regulamin",
    "Add User": "Dodaj u\u017cytkownika",
    "Add admin": "Dodaj admina",
    "Add auto expiration": "Dodaj termin wa\u017cno\u015bci",
    "Add institution": "Dodaj instytucj\u0119",
    "Add new notification": "Dodaj nowe powiadomienie",
    "Add password protection": "Dodaj ochron\u0119 has\u0142a",
    "Added": "Dodane",
    "Added user {user}": "Dodano u\u017cytkownika {user}",
    "Admin": "Admin",
    "Admin Login Logs": "Dziennik logowa\u0144 administratora",
    "Admin Logs": "Logi administracyjne",
    "Admins": "Admini",
    "All": "Wszystkie",
    "All Groups": "Wszystkie grupy",
    "All Notifications": "Wszystkie powiadomienia",
    "All Public Links": "Wszystkie publiczne \u0142\u0105cza",
    "All file types": "Wszystkie typy plik\u00f3w",
    "Allow new user registrations. Uncheck this to prevent anyone from creating a new account.": "Zezw\u00f3l na rejestracj\u0119 nowych u\u017cytkownik\u00f3w. Odznacz to, aby zapobiec tworzeniu nowych kont.",
    "Allow user to change library history settings": "Pozw\u00f3l u\u017cytkownikom zmienia\u0107 ustawienia historii biblioteki",
    "Allow user to create encrypted libraries": "Zezw\u00f3l u\u017cytkownikom na tworzenie zaszyfrowanych bibliotek",
    "An integer that is greater than or equal to 0.": "Liczba wi\u0119ksza lub r\u00f3wna 0.",
    "Anonymous User": "U\u017cytkownik anonimowy",
    "Are you sure you want to clear trash?": "Czy na pewno chcesz opr\u00f3\u017cni\u0107 kosz?",
    "Are you sure you want to delete %s ?": "Czy na pewno chcesz usun\u0105\u0107 %s ?",
    "Are you sure you want to delete the selected user(s) ?": "Czy na pewno chcesz usun\u0105\u0107 wybranych u\u017cytkownik\u00f3w?",
    "Are you sure you want to restore this library?": "Czy na pewno chcesz przywr\u00f3ci\u0107 t\u0119 bibliotek\u0119?",
    "Are you sure you want to unlink this device?": "Czy na pewno chcesz od\u0142\u0105czy\u0107 to urz\u0105dzenie?",
    "Audio": "Pliki audio",
    "Avatar": "Awatar",
    "Avatar:": "Awatar:",
    "Back": "Wstecz",
    "Broken (please contact your administrator to fix this library)": "Uszkodzona (prosz\u0119 si\u0119\u00a0skontaktowa\u0107 z administratorem w celu naprawy)",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "Nie mo\u017cna skopiowa\u0107 katalogu %(src)s do jego podkatalogu %(des)s",
    "Can not move directory %(src)s to its subdirectory %(des)s": "Nie mo\u017cna przenie\u015b\u0107 katalogu %(src)s do jego podkatalogu %(des)s",
    "Cancel": "Anuluj",
    "Cancel All": "Anuluj wszystko",
    "Change": "Zmie\u0144",
    "Change Password": "Zmie\u0144 has\u0142o",
    "Change Password of Library {placeholder}": "Zmie\u0144 has\u0142o biblioteki {placeholder}",
    "Clean": "Wyczy\u015b\u0107",
    "Clear": "Wyczy\u015b\u0107",
    "Clear Trash": "Opr\u00f3\u017cnij kosz",
    "Clear files in trash and history\uff1a": "Wyczy\u015b\u0107 pliki w koszu i histori\u0119 :",
    "Clients": "Klienci",
    "Close": "Zamknij",
    "Community Edition": "Wersja Spo\u0142eczno\u015bciowa",
    "Confirm Password": "Potwierd\u017a has\u0142o",
    "Contact Email": "Kontakt email",
    "Contact Email:": "Email kontaktowy:",
    "Copy": "Kopiuj",
    "Copy selected item(s) to:": "Kopiuj wybrane elementy do:",
    "Count": "Ilo\u015b\u0107",
    "Create": "Utw\u00f3rz",
    "Create Group": "Utw\u00f3rz grup\u0119",
    "Create Library": "Stw\u00f3rz bibliotek\u0119",
    "Created": "Utworzone",
    "Created At": "Utworzono",
    "Created file": "Plik utworzono",
    "Created folder": "Utworzono folder",
    "Created group {group_name}": "Utworzono grup\u0119 {group_name}",
    "Created library": "Utworzona biblioteka",
    "Created library {library_name} with {owner} as its owner": "Utworzono bibliotek\u0119 {library_name} z {owner} jako w\u0142a\u015bcicielem",
    "Creator": "Tw\u00f3rca",
    "Current Connected Devices": "Aktualnie pod\u0142\u0105czone urz\u0105dzenia",
    "Current Library": "Aktualna biblioteka",
    "Current Path: ": "Aktualna \u015bcie\u017cka: ",
    "Current Version": "Aktualna wersja",
    "Current path: ": "Aktualna \u015bcie\u017cka: ",
    "Custom file types": "Wybrane typy plik\u00f3w",
    "Database": "Baza danych",
    "Date": "Data",
    "Default": "Domy\u015blnie",
    "Default Admin": "Domy\u015blny administrator",
    "Delete": "Usu\u0144",
    "Delete Account": "Usu\u0144 konto",
    "Delete Expired Invitations": "Usu\u0144 zaproszenia, kt\u00f3re utraci\u0142 wa\u017cno\u015b\u0107",
    "Delete Group": "Usu\u0144 grup\u0119",
    "Delete Institution": "Usu\u0144 instytucj\u0119",
    "Delete Library": "Usu\u0144 bibliotek\u0119",
    "Delete Member": "Usu\u0144 cz\u0142onka",
    "Delete Notification": "Usu\u0144 powiadomienie",
    "Delete Organization": "Usu\u0144 organizacj\u0119",
    "Delete Time": "Usu\u0144 czas",
    "Delete User": "Usu\u0144 u\u017cytkownika",
    "Delete files from this device the next time it comes online.": "Usu\u0144 pliki z tego urz\u0105dzenia jak tylko b\u0119dzie ono dost\u0119pne.",
    "Deleted": "Usuni\u0119te",
    "Deleted Libraries": "Usuni\u0119te biblioteki",
    "Deleted Time": "Czas usuni\u0119cia",
    "Deleted directories": "Usuni\u0119te katalogi",
    "Deleted file": "Plik usuni\u0119to",
    "Deleted files": "Usuni\u0119te pliki",
    "Deleted folder": "Folder usuni\u0119ty",
    "Deleted group {group_name}": "Usuni\u0119to grup\u0119 {group_name}",
    "Deleted library": "Usuni\u0119ta biblioteka",
    "Deleted library {library_name}": "Usuni\u0119ta biblioteka {library_name}",
    "Deleted user {user}": "Usuni\u0119to u\u017cytkownika {user}",
    "Description": "Opis",
    "Description is required": "Opis jest wymagany",
    "Desktop": "Stacjonarne",
    "Details": "Szczeg\u00f3\u0142y",
    "Device": "Urz\u0105dzenie",
    "Device Name": "Nazwa urz\u0105dzenia",
    "Devices": "Urz\u0105dzenia",
    "Directory": "Katalog",
    "Disable Two-Factor Authentication": "Wy\u0142\u0105cz uwierzytelnianie dwusk\u0142adnikowe",
    "Document convertion failed.": "Niepowodzenie konwersji dokumentu",
    "Documents": "Dokumenty",
    "Don't keep history": "Nie przechowuj historii",
    "Don't replace": "Nie zast\u0119puj",
    "Download": "Pobierz",
    "Download an example file": "Pobierz przyk\u0142adowy plik",
    "Edit": "Edytuj",
    "Edit labels": "Edytuj etykiety",
    "Edit succeeded": "Edycja pomy\u015blna.",
    "Email": "E-mail",
    "Emails, separated by ','": "Emaile, rozdzielone ','",
    "Enable Two-Factor Authentication": "W\u0142\u0105cz uwierzytelnianie dwusk\u0142adnikowe",
    "Enable two factor authentication": "W\u0142\u0105cz uwierzytelnianie dwusk\u0142adnikowe",
    "Enable users to share libraries to any groups in the system.": "Pozw\u00f3l u\u017cytkownikom udost\u0119pnia\u0107 biblioteki dowolnej grupie w systemie.",
    "Encrypt": "Zaszyfruj",
    "Encrypted library": "Biblioteka zaszyfrowana",
    "Error": "B\u0142\u0105d",
    "Errors": "B\u0142\u0119dy",
    "Exit System Admin": "Wyjd\u017a z administracji",
    "Expiration": "Wyga\u015bni\u0119cie",
    "Expired": "Wygas\u0142o",
    "Expired at": "Wygas\u0142o",
    "Export Excel": "Wyeksportuj do Excel",
    "Extensions of text files that can be online previewed, each suffix is separated by a comma.": "Rozszerzenie plik\u00f3w tekstowych, kt\u00f3re mog\u0105 by\u0107 podgl\u0105dane online. Rozszerzenia powinny by\u0107 rozdzielone przecinkami.",
    "Failed": "Niepowodzenie",
    "Failed to copy %(name)s": "Nie mo\u017cna skopiowa\u0107 %(name)s",
    "Failed. Please check the network.": "Niepowodzenie. Prosz\u0119 sprawdzi\u0107 sie\u0107.",
    "Favorites": "Ulubione",
    "File": "Plik",
    "File Operations": "Operacje na plikach",
    "File Upload": "Wy\u015blij plik",
    "File Uploading...": "Wysy\u0142anie pliku...",
    "File download is disabled: the share link traffic of owner is used up.": "Pobieranie plik\u00f3w jest wy\u0142\u0105czone: transfer w\u0142a\u015bciciela \u0142\u0105cza zosta\u0142 wykorzystany.",
    "Files": "Pliki",
    "Folder": "Folder",
    "Folder Permission": "Uprawnienia folderu",
    "Folders": "Foldery",
    "Force user to change password when account is newly added or reset by admin": "Wymu\u015b zmian\u0119 has\u0142a, gdy konto zostanie utworzone lub zresetowane przez administratora.",
    "Force user to use a strong password when sign up or change password.": "Wymagaj silnego has\u0142a podczas rejestracji lub jego zmiany.",
    "Freeze user account when failed login attempts exceed limit.": "Zablokuj konto u\u017cytkownika po osi\u0105gni\u0119ciu limitu nieudanych logowa\u0144",
    "Generate": "Wygeneruj",
    "Global Address Book": "Globalna Ksi\u0105\u017cka Adresowa",
    "Grid": "Siatka",
    "Group": "Grupa",
    "Group Permission": "Uprawnienia grupy:",
    "Groups": "Grupy",
    "Guest": "Go\u015b\u0107",
    "Handled": "Przetworzone",
    "Help": "Pomoc",
    "Hide": "Ukryj",
    "History": "Historia",
    "History Setting": "Ustawienia historii",
    "IP": "IP",
    "If turn on, the desktop clients will not be able to sync a folder outside the default Seafile folder.": "Je\u015bli w\u0142\u0105czone, klient na desktopie nie b\u0119dzie m\u00f3g\u0142 synchronizowa\u0107 folder\u00f3w poza domy\u015blnym folderem Seafile.",
    "If you don't have any device with you, you can access your account using backup codes.": "Je\u017celi nie masz \u017cadnego urz\u0105dzenia ze sob\u0105, mo\u017cesz uzyska\u0107 dost\u0119p do konta przy pomocy kod\u00f3w zapasowych.",
    "Image": "Obraz",
    "Images": "Obrazy",
    "Import Members": "Importuj cz\u0142onk\u00f3w",
    "Import users from a .xlsx file": "Importuj u\u017cytkownik\u00f3w z pliku .xlsx",
    "In all libraries": "We wszystkich bibliotekach",
    "Inactive": "Nieaktywny",
    "Info": "Informacje",
    "Input file extensions here, separate with ','": "Podaj tutaj rozszerzenia plik\u00f3w, rozdzielona za pomoc\u0105 ','",
    "Institution": "Instytucja",
    "Institutions": "Instytucje",
    "Internal Server Error": "Wewn\u0119trzny b\u0142\u0105d serwera",
    "Invalid destination path": "Nieprawid\u0142owa \u015bcie\u017cka docelowa",
    "Invitations": "Zaproszenia",
    "Invite Time": "Czas zaproszenia",
    "Invited at": "Zaproszono",
    "Inviter": "Zapraszaj\u0105cy",
    "It is required.": "Wymagane.",
    "Keep full history": "Przechowuj pe\u0142n\u0105 histori\u0119",
    "LDAP": "LDAP",
    "LDAP(imported)": "LDAP (import)",
    "Labels": "Etykiety",
    "Language": "J\u0119zyk",
    "Language Setting": "Ustawienia j\u0119zykowe",
    "Last Access": "Ostatni dost\u0119p",
    "Last Login": "Ostatnie logowanie",
    "Last Update": "Ostatnia aktualizacja",
    "Leave Share": "Opu\u015b\u0107 udzia\u0142",
    "Libraries": "Biblioteki",
    "Library": "Biblioteka",
    "Library Type": "Typ biblioteki",
    "Limits": "Limity",
    "Link": "Odsy\u0142acz",
    "Linked Devices": "Do\u0142\u0105czone urz\u0105dzenia",
    "Links": "\u0141\u0105cza",
    "List": "Lista",
    "List your account in global address book, so that others can find you by typing your name.": "Umie\u015b\u0107 swoje konto w globalnej ksi\u0105\u017cce adresowej, aby inni u\u017cytkownicy mogli Ci\u0119 odnale\u017a\u0107 wpisuj\u0105c jego nazw\u0119.",
    "Location": "Po\u0142o\u017cenie",
    "Lock": "Zablokuj",
    "Log out": "Wyloguj si\u0119",
    "Login Background Image": "Obraz t\u0142a ekranu logowania",
    "Logs": "Logi",
    "Manage Members": "Zarz\u0105dzaj cz\u0142onkami",
    "Mark all read": "Oznacz wszystkie jako przeczytane",
    "Member": "Cz\u0142onek",
    "Members": "Cz\u0142onkowie",
    "Message": "Wiadomo\u015b\u0107",
    "Message (optional):": "Wiadomo\u015b\u0107 (opcjonalnie)",
    "Mobile": "Przeno\u015bne",
    "Modification Details": "Szczeg\u00f3\u0142y modyfikacji",
    "Modified": "Zmodyfikowano",
    "Modified files": "Zmodyfikowane pliki",
    "Modifier": "Zmodyfikowa\u0142",
    "Month:": "Miesi\u0105c",
    "More": "Wi\u0119cej",
    "More Operations": "Wi\u0119cej operacji",
    "Move": "Przenie\u015b",
    "Move selected item(s) to:": "Przenie\u015b wybrane elementy do:",
    "Moved file": "Plik przeniesiono",
    "Moved folder": "Folder przeniesiono",
    "My Groups": "Moje grupy",
    "My Libraries": "Moje biblioteki",
    "Name": "Nazwa",
    "Name is required": "Nazwa jest wymagana",
    "Name is required.": "Nazwa jest wymagana.",
    "Name should not include '/'.": "Nazwa nie powinna zawiera\u0107 '/'.",
    "Name(optional)": "Nazwa (opcjonalna)",
    "Network error": "B\u0142\u0105d sieci",
    "New": "Nowy",
    "New Excel File": "Nowy plik Excel",
    "New File": "Nowy plik",
    "New Folder": "Nowy folder",
    "New Group": "Nowa grupa",
    "New Library": "Nowa biblioteka",
    "New Markdown File": "Nowy plik Markdown",
    "New Password": "Nowe has\u0142o",
    "New Password Again": "Powt\u00f3rz nowe has\u0142o",
    "New PowerPoint File": "Nowy plik PowerPoint",
    "New Word File": "Nowy plik Word",
    "New directories": "Nowe katalogi",
    "New files": "Nowe pliki",
    "New password is too short": "Nowe has\u0142o jest za kr\u00f3tkie",
    "New passwords don't match": "Has\u0142a nie s\u0105 identyczne",
    "Next": "Nast\u0119pny",
    "No connected devices": "Brak pod\u0142\u0105czonych urz\u0105dze\u0144",
    "No groups": "Brak grup",
    "No libraries": "Brak bibliotek",
    "No libraries have been shared with you": "\u017badna biblioteka nie zosta\u0142a Ci udost\u0119pniona",
    "No members": "Brak cz\u0142onk\u00f3w",
    "No public libraries": "Brak bibliotek publicznych",
    "No result": "Brak rezultatu",
    "No sync errors": "Brak b\u0142\u0119d\u00f3w synchronizacji",
    "None": "\u017baden",
    "Note: Settings via web interface are saved in database table (seahub-db/constance_config). They have a higher priority over the settings in config files.": "Uwaga: Ustawienia wprowadzone przez interfejs www s\u0105 przechowywane w tabeli (seahub-db/constance_config) bazy danych. S\u0105 one wa\u017cniejsze od ustawie\u0144 zapisanych w plikach konfiguracyjnych.",
    "Notification Detail": "Szczeg\u00f3\u0142y powiadomienia",
    "Notifications": "Powiadomienia",
    "Number of days that keep user sign in.": "Liczba dni przez jak\u0105 pami\u0119ta\u0107 zalogowanego u\u017cytkownika.",
    "Number of groups": "Liczba grup",
    "Off": "Wy\u0142\u0105czone",
    "Old Password": "Stare has\u0142o",
    "On": "W\u0142\u0105czone",
    "Online Preview": "Podgl\u0105d online",
    "Only keep a period of history:": "Przechowuj histori\u0119 z ostatnich:",
    "Open parent folder": "Otw\u00f3rz folder nadrz\u0119dny",
    "Open via Client": "Otw\u00f3rz w kliencie",
    "Operation": "Operacja",
    "Operation succeeded.": "Operacja zako\u0144czona pomy\u015blnie.",
    "Operations": "Akcje",
    "Organization": "Organizacja",
    "Organization Admin": "Administrator organizacji",
    "Organizations": "Organizacje",
    "Other Libraries": "Inne biblioteki",
    "Out of quota.": "Brak miejsca.",
    "Owner": "W\u0142a\u015bciciel",
    "Owner can use admin panel in an organization, must be a new account.": "W\u0142a\u015bciciel mo\u017ce u\u017cywa\u0107 panelu administratora w organizacji, musi by\u0107 nowym kontem.",
    "Packaging...": "Pakowanie...",
    "Password": "Has\u0142o",
    "Password again": "Powt\u00f3rz has\u0142o",
    "Password is too short": "Has\u0142o jest zbyt kr\u00f3tkie",
    "Password:": "Has\u0142o:",
    "Passwords don't match": "Has\u0142a nie s\u0105 identyczne",
    "Permission": "Uprawnienie",
    "Permission denied": "Odmowa dost\u0119pu",
    "Permission:": "Uprawnienia:",
    "Platform": "Platforma",
    "Please check the network.": "Prosz\u0119 sprawdzi\u0107 sie\u0107.",
    "Please choose a .xlsx file.": "Wybierz plik .xlsx",
    "Please enter 1 or more character": "Prosz\u0119 poda\u0107 1 lub wi\u0119cej znak\u00f3w",
    "Please enter a new password": "Prosz\u0119 poda\u0107 nowe has\u0142o",
    "Please enter days": "Prosz\u0119 poda\u0107 dni",
    "Please enter password": "Prosz\u0119 poda\u0107 has\u0142o",
    "Please enter the new password again": "Prosz\u0119 ponownie wpisa\u0107 nowe has\u0142o",
    "Please enter the old password": "Prosz\u0119 poda\u0107 stare has\u0142o",
    "Please enter the password again": "Prosz\u0119 ponownie poda\u0107 has\u0142o",
    "Please input at least an email.": "Prosz\u0119 poda\u0107 przynajmniej e-mail.",
    "Previous": "Poprzedni",
    "Professional Edition": "Wersja Profesjonalna",
    "Profile": "Profil",
    "Profile Setting": "Ustawienia profilu",
    "Read-Only": "Tylko odczyt",
    "Read-Only library": "Biblioteka tylko do odczytu",
    "Read-Write": "Odczyt i zapis",
    "Read-Write library": "Biblioteka do odczytu i zapisu",
    "Really want to delete your account?": "Czy na pewno chcesz usun\u0105\u0107 swoje konto?",
    "Refresh": "Od\u015bwie\u017c",
    "Remove": "Usu\u0144",
    "Removed all items from trash.": "Usuni\u0119to z kosza wszystkie elementy.",
    "Removed items older than {n} days from trash.": "Usuni\u0119to z kosza elementy starsze ni\u017c {n} dni.",
    "Rename": "Zmie\u0144 nazw\u0119",
    "Rename File": "Zmie\u0144 nazw\u0119 pliku",
    "Rename Folder": "Zmie\u0144 nazw\u0119 folderu",
    "Renamed file": "Zmieniono nazw\u0119 pliku",
    "Renamed folder": "Zmieniono nazw\u0119 folderu",
    "Renamed library": "Zmieniono nazw\u0119 biblioteki",
    "Renamed or Moved files": "Pliki przeniesione lub o zmienionej nazwie",
    "Replace": "Zast\u0105p",
    "Replace file {filename}?": "Zamieni\u0107 plik {filename}?",
    "Replacing it will overwrite its content.": "Zast\u0105pienie go spowoduje nadpisanie jego zawarto\u015bci.",
    "Reset Password": "Zresetuj has\u0142o",
    "ResetPwd": "Resetuj has\u0142o",
    "Restore": "Przywr\u00f3\u0107",
    "Restore Library": "Przywr\u00f3\u0107 bibliotek\u0119",
    "Restored file": "Plik odtworzono",
    "Restored folder": "Folder odtworzony",
    "Restored library": "Przywr\u00f3cono bibliotek\u0119",
    "Result": "Wynik",
    "Revoke Admin": "Odwo\u0142aj admina",
    "Role": "Rola",
    "Saving...": "Zapisywanie...",
    "Seafile": "Seafile",
    "Search": "Szukaj",
    "Search files in this library": "Przeszukaj pliki w tej bibliotece",
    "Search groups": "Szukaj grup",
    "Search users...": "Przeszukaj u\u017cytkownik\u00f3w...",
    "Select a group": "Wybierz grup\u0119",
    "Select libraries to share": "Wybierz biblioteki do udost\u0119pnienia",
    "Send": "Wy\u015blij",
    "Send activation Email after user registration.": "Wy\u015blij e-mail aktywacyjny po zarejestrowaniu u\u017cytkownika.",
    "Send to:": "Wy\u015blij do:",
    "Sending...": "Wysy\u0142anie...",
    "Server Version: ": "Wersja serwera: ",
    "Set Admin": "Ustaw jako administratora",
    "Set Password": "Ustaw has\u0142o",
    "Set Quota": "Ogranicz przestrze\u0144",
    "Set to current": "Ustaw na aktualne",
    "Set user name": "Ustaw nazw\u0119 u\u017cytkownika",
    "Set {placeholder}'s permission": "Ustaw uprawnienia {placeholder}",
    "Settings": "Ustawienia",
    "Share": "Udost\u0119pnij",
    "Share Admin": "Udost\u0119pnianie",
    "Share From": "Udost\u0119pnione od",
    "Share Links": "\u0141\u0105cza udost\u0119pniania",
    "Share To": "Udost\u0119pnij",
    "Share existing libraries": "Udost\u0119pnij istniej\u0105ce biblioteki",
    "Share to group": "Udost\u0119pnij grupie",
    "Share to user": "Udost\u0119pnij u\u017cytkownikowi",
    "Shared By": "Udost\u0119pniony przez",
    "Shared Links": "Wsp\u00f3\u0142dzielone \u0142\u0105cza",
    "Shared by: ": "Udost\u0119pni\u0142: ",
    "Shared with all": "Udost\u0119pnione wszystkim",
    "Shared with groups": "Udost\u0119pnione grupie",
    "Shared with me": "Udost\u0119pnione dla mnie",
    "Show": "Poka\u017c",
    "Show Codes": "Poka\u017c kody",
    "Side Nav Menu": "Boczne menu nawigacyjne",
    "Size": "Rozmiar",
    "Space Used": "Wykorzystana przestrze\u0144",
    "Space Used / Quota": "Wykorzystane miejsce / Quota",
    "Star": "Gwiazdka",
    "Statistic": "Statystyka",
    "Status": "Status",
    "Storage Used": "Wykorzystana przestrze\u0144",
    "Submit": "Wy\u015blij",
    "Success": "Sukces",
    "Successfully added label(s) for library {placeholder}": "Pomy\u015blnie dodano etykiety do biblioteki {placeholder}",
    "Successfully changed library password.": "Pomy\u015blnie zmieniono has\u0142o biblioteki",
    "Successfully copied %(name)s and %(amount)s other items.": "Pomy\u015blnie skopiowano %(name)s i %(amount)s innych element\u00f3w.",
    "Successfully copied %(name)s and 1 other item.": "Pomy\u015blnie skopiowano %(name)s i 1 inny element.",
    "Successfully copied %(name)s.": "Pomy\u015blnie skopiowano %(name)s.",
    "Successfully deleted 1 item": "Pomy\u015blnie usuni\u0119to 1 element",
    "Successfully deleted 1 item.": "Pomy\u015blnie usuni\u0119to 1 element.",
    "Successfully edited labels.": "Pomy\u015blnie edytowane etykiety.",
    "Successfully invited %(email) and %(num) other people.": "Pomy\u015blnie zaproszono %(email) i %(num) innych os\u00f3b.",
    "Successfully invited %(email).": "Pomy\u015blnie zaproszono %(email).",
    "Successfully moved %(name)s and %(amount)s other items.": "Pomy\u015blnie przeniesiono %(name)s i %(amount)s innych element\u00f3w.",
    "Successfully moved %(name)s and 1 other item.": "Pomy\u015blnie przeniesiono %(name)s i 1 inny element.",
    "Successfully moved %(name)s.": "Pomy\u015blnie przeniesiono %(name)s.",
    "Successfully reset password to %(passwd)s for user %(user)s.": "Pomy\u015blnie zresetowano u\u017cytkownikowi %(user)s has\u0142o na %(passwd)s.",
    "Successfully restored 1 item.": "Pomy\u015blnie przywr\u00f3cono 1 element.",
    "Successfully restored the library.": "Poprawnie odtworzono bibliotek\u0119.",
    "Successfully revoke the admin permission of %s": "Pomy\u015blnie cofni\u0119to uprawnienia administracyjne u\u017cytkownikowi %s",
    "Successfully sent to {placeholder}": "Pomy\u015blnie wys\u0142ano do {placeholder}",
    "Successfully set %s as admin.": "Pomy\u015blnie przyznano %s uprawnienia administracyjne.",
    "Successfully set library history.": "Pomy\u015blnie ustawiono histori\u0119 biblioteki.",
    "Successfully transferred the group.": "Pomy\u015blnie przeniesiono grup\u0119.",
    "Successfully transferred the library.": "Pomy\u015blnie przeniesiono bibliotek\u0119.",
    "Successfully unshared library {placeholder}": "Pomy\u015blnie wy\u0142\u0105czono udost\u0119pnianie biblioteki {placeholder}",
    "Sync": "Synchronizuj",
    "System": "System",
    "System Admin": "Administrator systemu",
    "System Info": "Informacje systemowe",
    "Tags": "Tagi",
    "Template": "Szablon",
    "Terms and Conditions": "Regulamin",
    "Text": "Tekst",
    "Text files": "Pliki tekstowe",
    "The URL of the server, like https://seafile.example.com or http://192.168.1.2:8000": "Adres URL serwera, np. https://seafile.example.com lub http://192.168.1.2:8000",
    "The internal URL for downloading/uploading files. Users will not be able to download/upload files if this is not set correctly. If you config Seafile behind Nginx/Apache, it should be SERVICE_URL/seafhttp, like https://seafile.example.com/seafhttp .": "Wewn\u0119trzny URL do pobierania/wysy\u0142ania plik\u00f3w. U\u017cytkownicy nie b\u0119d\u0105 mogli pobiera\u0107/wysy\u0142a\u0107 plik\u00f3w je\u015bli nie zostanie on poprawnie okre\u015blony. Je\u017celi Seafile znajduje si\u0119 za Nginx/Apache, powinno to by\u0107 SERVICE_URL/seafhttp, np. https://seafile.example.com/seafhttp",
    "The least number of characters an account password should include.": "Minimalna liczba znak\u00f3w jak\u0105 powinno zawiera\u0107 has\u0142o.",
    "The least number of characters an encrypted library password should include.": "Minimalna ilo\u015b\u0107 znak\u00f3w jak\u0105 powinno zawiera\u0107 has\u0142o do zaszyfrowanej biblioteki.",
    "The level(1-4) of an account password's strength. For example, '3' means password must have at least 3 of the following: num, upper letter, lower letter and other symbols": "Poziom (1-4) z\u0142o\u017cono\u015bci has\u0142a. Np, '3' oznacza, \u017ce has\u0142o musi zawiera\u0107 przynajmniej 3 z nast\u0119puj\u0105cych sk\u0142adnik\u00f3w: cyfry, wielkie litery, ma\u0142e litery i inne znaki.",
    "The maximum number of failed login attempts before showing CAPTCHA.": "Maksymalna liczba nieudanych logowa\u0144 zanim zostanie wy\u015bwietlona CAPTCHA.",
    "The owner of this library has run out of space.": "W\u0142a\u015bciciel tej biblioteki wykorzysta\u0142 ca\u0142\u0105 dost\u0119pn\u0105 przestrze\u0144.",
    "The password will be kept in the server for only 1 hour.": "Has\u0142o b\u0119dzie przechowywane na serwerze wy\u0142\u0105cznie przez 1 godzin\u0119.",
    "This library is password protected": "Ta biblioteka jest chroniona has\u0142em",
    "This operation will not be reverted. Please think twice!": "Ta operacja jest nieodwracalna. Dobrze si\u0119 zastan\u00f3w!",
    "Time": "Czas",
    "Tip: 0 means default limit": "Porada: 0 oznacza limit domy\u015blny",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "Porada: po ka\u017cdej modyfikacji zostanie utworzona migawka, kt\u00f3ra przechowuje stan biblioteki po modyfikacji.",
    "Tip: you can search by keyword in name.": "Porada: mo\u017cna wyszukiwa\u0107 s\u0142\u00f3w kluczowych w nazwie.",
    "Token": "Token",
    "Tools": "Narz\u0119dzia",
    "Total Devices": "Wszystkie urz\u0105dzenia",
    "Total Users": "Wszyscy u\u017cytkownicy",
    "Traffic": "Ruch",
    "Transfer": "Przeka\u017c",
    "Transfer Group": "Prze\u015blij grup\u0119",
    "Transfer Library": "Prze\u015blij bibliotek\u0119",
    "Transferred group {group_name} from {user_from} to {user_to}": "Przes\u0142ano grup\u0119 {group_name} od {user_from} do {user_to}",
    "Transferred library {library_name} from {user_from} to {user_to}": "Przes\u0142ano bibliotek\u0119 {library_name} od {user_from} do {user_to}",
    "Trash": "Kosz",
    "Two-Factor Authentication": "Uwierzytelnianie dwusk\u0142adnikowe",
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "Uwierzytelnianie dwusk\u0142adnikowe nie jest w\u0142\u0105czone na Twoim koncie. Aby zwi\u0119kszy\u0107 poziom bezpiecze\u0144stwa w\u0142\u0105cz je.",
    "Type": "Typ",
    "Unknown": "Nieznany",
    "Unlink": "Od\u0142\u0105cz",
    "Unlink device": "Od\u0142\u0105cz urz\u0105dzenie",
    "Unlock": "Odblokuj",
    "Unshare": "Wy\u0142\u0105cz udost\u0119pnianie",
    "Unshare Library": "Przesta\u0144 udost\u0119pnia\u0107 bibliotek\u0119",
    "Unstar": "Usu\u0144 gwiazdk\u0119",
    "Update": "Aktualizuj",
    "Update Terms and Conditions": "Zaktualizuj regulamin",
    "Updated file": "Zaktualizowano plik",
    "Upgrade to Pro Edition": "Aktualizuj do wersji Pro",
    "Upload": "Prze\u015blij",
    "Upload Files": "Prze\u015blij pliki",
    "Upload Folder": "Wy\u015blij folder",
    "Upload Link": "\u0141\u0105cze przesy\u0142ania",
    "Upload Links": "\u0141\u0105cza przesy\u0142ania",
    "Upload file": "Prze\u015blij plik",
    "Used:": "Wykorzystane:",
    "User": "U\u017cytkownik",
    "User Permission": "Uprawnienia u\u017cytkownika",
    "Username:": "Nazwa u\u017cytkownika:",
    "Users": "U\u017cytkownicy",
    "Version": "Wersja",
    "Version Number": "Wersja",
    "Video": "Pliki wideo",
    "View": "Wy\u015bwietl",
    "View Snapshot": "Poka\u017c migawk\u0119",
    "View profile and more": "Poka\u017c profil i wi\u0119cej",
    "Virus File": "Plik z wirusem",
    "Virus Scan": "Skanowanie antywirusowe",
    "Visits": "Wizyty",
    "Wrong password": "Nieprawid\u0142owe has\u0142o",
    "You can also add a user as a guest, who will not be allowed to create libraries and groups.": "Mo\u017cesz tak\u017ce doda\u0107 u\u017cytkownika jako go\u015bcia, nie b\u0119dzie mia\u0142 mo\u017cliwo\u015bci tworzenia bibliotek i grup.",
    "You can use this field at login.": "Mo\u017cesz u\u017cywa\u0107 tego pola przy logowaniu.",
    "You don't have any upload links": "Nie masz \u017cadnych \u0142\u0105cz przesy\u0142ania",
    "You have not shared any folders": "Nie masz \u017cadnych udost\u0119pnionych folder\u00f3w",
    "Your notifications will be sent to this email.": "Twoje powiadomienia b\u0119d\u0105 wysy\u0142ane na ten adres email.",
    "ZIP": "ZIP",
    "activate after registration": "aktywuj po rejestracji",
    "all": "wszystko",
    "all members": "wszyscy cz\u0142onkowie",
    "allow new registrations": "zezw\u00f3l na rejestracj\u0119",
    "days": "dni",
    "icon": "ikona",
    "keep sign in": "zapami\u0119taj",
    "library password minimum length": "minimalna d\u0142ugo\u015b\u0107 has\u0142a biblioteki",
    "locked": "zablokowany",
    "name": "nazwa",
    "password minimum length": "minimalna d\u0142ugo\u015b\u0107 has\u0142a",
    "password strength level": "z\u0142o\u017cono\u015b\u0107 has\u0142a",
    "send activation email": "wy\u015blij e-mail aktywacyjny",
    "shared by:": "udost\u0119pni\u0142:",
    "starred": "Oznaczone gwiazdk\u0105",
    "text file extensions": "rozszerzenia plik\u00f3w tekstowych",
    "to": "do",
    "unstarred": "Nieoznaczone gwiazdk\u0105",
    "you can also press \u2190 ": "mo\u017cesz tak\u017ce wcisn\u0105\u0107 \u2190",
    "{placeholder} Folder Permission": "Uprawnienia folderu {placeholder}"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j E Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j E Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%y-%m-%d",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j E",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d-m-Y  H:i",
    "SHORT_DATE_FORMAT": "d-m-Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};

