        // Base language is English: keep translated strings similar in length
        // to the English ones so the layout does not break.
        const translations = {
            en: {
                enterChannel: "Telegram Channel:",
                loadChannel: "Load",
                loading: "Loading...",
                checking: "Checking...",
                startingAutoSearch: "Starting automatic search...",
                searchingInitialRange: "Searching initial range...",
                testingMessage: "Testing message",
                rangeFound: "Range found:",
                verifyingLastMessage: "Verifying last message:",
                noValidMessages: "No valid messages found",
                channelTooLarge: "Channel too large for automatic search. Use manual Start ID mode.",
                stopSearch: "Stop search",
                searchStopped: "Search stopped",
                channelProbablyMissing: "Channel not found. It may not exist or be private.",
                currentlyViewing: "Currently viewing:",
                latestPostId: "Latest post ID:",
                searchCompleted: "✅ Search completed. Last message:",
                loadMore: "Load Older Posts",
                checkNew: "Check for New Messages",
                noNew: "No new messages",
                prefs: "Preferences",
                allowCookies: "Persistent cookies",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Auto-check messages",
                seconds: "seconds",
                deepCheck: "Extended message check",
                deepCheckTip: "Extends \"Check for New Messages\" to 100 posts ahead",
                deepCheckInfo: "If new posts do not appear, enable \"Extended message check\": it scans up to 100 ahead, jumping over deleted messages.",
                themeToDark: "Switch to dark mode",
                themeToLight: "Switch to light mode",
                startIdRequired: "Please enter a Start ID (or uncheck it for automatic search)",
                invalidStartId: "Invalid start ID",
                invalidChannel: "Please enter a valid channel name",
                quickGuideTitle: "Quick Guide: View Banned Channels:",
                quickGuideDescription: "Allows you to access blocked Telegram channels or groups. You can read the messages of a channel without appearing in the history, no one knows if you have read it.",
                searchInfoText: "Automatic search fails in channels where many messages have been deleted. In that case enable \"Manual, start ID\" in Preferences and enter the last message ID, which you must find yourself.",
                features: [
                    "No login required. No Telegram account needed to read channels",
                    "Use channel names (e.g., \"telegram\")",
                    "Full URLs are supported (e.g., \"https://t.me/telegram\")",
                    "Remembers where you left off in each channel and resumes there",
                    "Auto-check for new messages at a fixed interval",
                    "Use in the URL the \"channel\" parameter for the default channel: ?channel=channelname",
                    "Use in the URL the \"add\" parameter to add channels to the history, separated by commas: ?add=channel1,channel2,...",
                    "Allows you to skip the ban of any telegram channel or group.",
                    "Alternatively you can download a HTML that works in any browser",
                    "Light and dark themes, following your system or your choice",
                    "Optional persistent storage keeps your data between sessions",
                    "Automatic language detection: interface in 9 languages",
                    "Navigate back in time with the Load Older Posts button"
                ]
            },
            es: {
                enterChannel: "Canal de Telegram:",
                loadChannel: "Load",
                loading: "Cargando...",
                checking: "Comprobando...",
                startingAutoSearch: "Iniciando búsqueda automática...",
                searchingInitialRange: "Buscando rango inicial...",
                testingMessage: "Probando mensaje",
                rangeFound: "Rango encontrado:",
                verifyingLastMessage: "Verificando último mensaje:",
                noValidMessages: "No hay mensajes válidos",
                channelTooLarge: "Canal demasiado grande para la búsqueda automática. Usa Start ID manual.",
                stopSearch: "Detener búsqueda",
                searchStopped: "Búsqueda detenida",
                channelProbablyMissing: "Canal no encontrado. Puede no existir o ser privado.",
                currentlyViewing: "Viendo actualmente:",
                latestPostId: "Último ID:",
                searchCompleted: "✅ Búsqueda completada. Último mensaje:",
                loadMore: "Cargar Mensajes Anteriores",
                checkNew: "Comprobar Nuevos Mensajes",
                noNew: "No hay mensajes nuevos",
                prefs: "Preferencias",
                allowCookies: "Cookies persistentes",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Comprobación automática",
                seconds: "segundos",
                deepCheck: "Comprobación extendida",
                deepCheckTip: "Extiende \"Comprobar nuevos\" hasta 100 mensajes",
                deepCheckInfo: "Si no aparecen mensajes nuevos, activa \"Comprobación extendida\": explora hasta 100 por delante y salta borrados.",
                themeToDark: "Cambiar a modo oscuro",
                themeToLight: "Cambiar a modo claro",
                startIdRequired: "Introduce un Start ID (o desmárcalo para la búsqueda automática)",
                invalidStartId: "Start ID inválido",
                invalidChannel: "Introduce un nombre de canal válido",
                quickGuideTitle: "Guía Rápida: Ver Canales Bloqueados:",
                quickGuideDescription: "Permite acceder a canales o grupos bloqueados de Telegram. Puedes leer los mensajes de un canal sin aparecer en el historial, nadie sabe si lo has leído.",
                searchInfoText: "La búsqueda automática falla en canales donde se han borrado muchos mensajes. En ese caso activa \"Manual, start ID\" en Preferencias e introduce el ID del último mensaje, que debes encontrar tú.",
                features: [
                    "Sin inicio de sesión. No necesitas cuenta de Telegram para leer canales",
                    "Usa nombres de canal (ej: \"telegram\")",
                    "URLs completas son soportadas (ej: \"https://t.me/telegram\")",
                    "Recuerda dónde te quedaste en cada canal y retoma desde ahí",
                    "Comprueba mensajes nuevos automáticamente a intervalos",
                    "Usa en la URL el parámetro \"channel\" para el canal por defecto: ?channel=nombrecanal",
                    "Usa en la URL el parámetro \"add\" para añadir canales al historial, separados por comas: ?add=canal1,canal2,...",
                    "Permite saltarse el bloqueo de cualquier canal o grupo de telegram.",
                    "Puedes descargar un HTML que funciona en cualquier navegador",
                    "Temas claro y oscuro, según tu sistema o tu elección",
                    "El almacenamiento persistente opcional conserva tus datos",
                    "Detección automática de idioma: interfaz en 9 idiomas",
                    "Vuelve atrás en el tiempo con Cargar Mensajes Anteriores"
                ]
            },
            ru: {
                enterChannel: "Telegram-канал:",
                loadChannel: "Загрузить",
                loading: "Загрузка...",
                checking: "Проверка...",
                startingAutoSearch: "Автопоиск запущен...",
                searchingInitialRange: "Поиск начального диапазона...",
                testingMessage: "Проверка сообщения",
                rangeFound: "Диапазон найден:",
                verifyingLastMessage: "Проверка последнего сообщения:",
                noValidMessages: "Нет корректных сообщений",
                channelTooLarge: "Канал слишком большой для автопоиска. Используйте Start ID вручную.",
                stopSearch: "Остановить поиск",
                searchStopped: "Поиск остановлен",
                channelProbablyMissing: "Канал не найден. Возможно, не существует или приватный.",
                currentlyViewing: "Сейчас просматривается:",
                latestPostId: "Последний ID:",
                searchCompleted: "✅ Поиск завершён. Последнее сообщение:",
                loadMore: "Загрузить ранее",
                checkNew: "Проверить новые сообщения",
                noNew: "Нет новых сообщений",
                prefs: "Настройки",
                allowCookies: "Постоянные cookies",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Автопроверка сообщений",
                seconds: "секунд",
                deepCheck: "Расширенная проверка",
                deepCheckTip: "Расширяет \"Проверить новые\" до 100 сообщений",
                deepCheckInfo: "Если новые сообщения не видны, включите \"Расширенная проверка\": ищет до 100 вперёд, пропуская удалённые.",
                themeToDark: "Тёмная тема",
                themeToLight: "Светлая тема",
                startIdRequired: "Укажите Start ID (или снимите отметку для автопоиска)",
                invalidStartId: "Неверный Start ID",
                invalidChannel: "Укажите корректное имя канала",
                quickGuideTitle: "Кратко: просмотр заблокированных каналов:",
                quickGuideDescription: "Позволяет читать заблокированные каналы и группы Telegram. Сообщения читаются без следа в истории, никто не узнает, что вы их читали.",
                searchInfoText: "Автопоиск не работает в каналах с множеством удалённых сообщений. Включите \"Manual, start ID\" в Настройках и укажите ID последнего сообщения, который нужно найти самому.",
                features: [
                    "Без входа. Аккаунт Telegram не нужен для чтения каналов",
                    "Используйте имя канала (напр. \"telegram\")",
                    "Полные URL тоже работают (напр. \"https://t.me/telegram\")",
                    "Запоминает, где вы остановились, и продолжает с этого места",
                    "Автопроверка новых сообщений по интервалу",
                    "Параметр \"channel\" в URL задаёт канал по умолчанию: ?channel=name",
                    "Параметр \"add\" в URL добавляет несколько каналов в историю через запятую: ?add=c1,c2,...",
                    "Обходит блокировку любого канала или группы Telegram.",
                    "Можно скачать HTML, работающий в любом браузере",
                    "Темы светлая и тёмная: по системе или по выбору",
                    "Необязательное постоянное хранение сохраняет ваши данные",
                    "Автоопределение языка: интерфейс на 9 языках",
                    "Возврат в прошлое кнопкой \"Загрузить ранее\""
                ]
            },
            pt: {
                enterChannel: "Canal do Telegram:",
                loadChannel: "Carregar",
                loading: "Carregando...",
                checking: "Verificando...",
                startingAutoSearch: "Iniciando busca automática...",
                searchingInitialRange: "Buscando faixa inicial...",
                testingMessage: "Testando mensagem",
                rangeFound: "Faixa encontrada:",
                verifyingLastMessage: "Verificando última mensagem:",
                noValidMessages: "Nenhuma mensagem válida",
                channelTooLarge: "Canal grande demais para a busca automática. Use Start ID manual.",
                stopSearch: "Parar busca",
                searchStopped: "Busca interrompida",
                channelProbablyMissing: "Canal não encontrado. Pode não existir ou ser privado.",
                currentlyViewing: "Visualizando agora:",
                latestPostId: "ID mais recente:",
                searchCompleted: "✅ Busca concluída. Última mensagem:",
                loadMore: "Carregar Anteriores",
                checkNew: "Verificar Novas Mensagens",
                noNew: "Sem mensagens novas",
                prefs: "Preferências",
                allowCookies: "Cookies persistentes",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Verificação automática",
                seconds: "segundos",
                deepCheck: "Verificação estendida",
                deepCheckTip: "Estende \"Verificar novas\" até 100 mensagens",
                deepCheckInfo: "Se novas mensagens não aparecerem, ative \"Verificação estendida\": examina até 100 à frente, pulando apagadas.",
                themeToDark: "Modo escuro",
                themeToLight: "Modo claro",
                startIdRequired: "Digite um Start ID (ou desmarque para busca automática)",
                invalidStartId: "Start ID inválido",
                invalidChannel: "Digite um nome de canal válido",
                quickGuideTitle: "Guia Rápido: Ver Canais Bloqueados:",
                quickGuideDescription: "Permite acessar canais ou grupos bloqueados do Telegram. Você lê as mensagens de um canal sem aparecer no histórico, ninguém sabe que você leu.",
                searchInfoText: "A busca automática falha em canais com muitas mensagens apagadas. Nesse caso ative \"Manual, start ID\" em Preferências e digite o ID da última mensagem, que você deve encontrar.",
                features: [
                    "Sem login. Não precisa de conta do Telegram para ler canais",
                    "Use nomes de canal (ex.: \"telegram\")",
                    "URLs completas são aceitas (ex.: \"https://t.me/telegram\")",
                    "Lembra onde você parou em cada canal e retoma de lá",
                    "Verifica mensagens novas em intervalos fixos",
                    "Use o parâmetro \"channel\" na URL para o canal padrão: ?channel=nome",
                    "Use o parâmetro \"add\" para adicionar canais ao histórico, separados por vírgula: ?add=c1,c2,...",
                    "Permite contornar o bloqueio de qualquer canal ou grupo do Telegram.",
                    "Você pode baixar um HTML que funciona em qualquer navegador",
                    "Temas claro e escuro: pelo sistema ou pela sua escolha",
                    "O armazenamento persistente opcional guarda seus dados",
                    "Detecção automática de idioma: interface em 9 idiomas",
                    "Volte no tempo com o botão \"Carregar Anteriores\""
                ]
            },
            de: {
                enterChannel: "Telegram-Kanal:",
                loadChannel: "Laden",
                loading: "Lädt...",
                checking: "Prüft...",
                startingAutoSearch: "Automatische Suche startet...",
                searchingInitialRange: "Anfangsbereich wird gesucht...",
                testingMessage: "Nachricht prüfen",
                rangeFound: "Bereich gefunden:",
                verifyingLastMessage: "Letzte Nachricht prüfen:",
                noValidMessages: "Keine gültigen Nachrichten",
                channelTooLarge: "Kanal zu groß für die automatische Suche. Start ID manuell nutzen.",
                stopSearch: "Suche stoppen",
                searchStopped: "Suche gestoppt",
                channelProbablyMissing: "Kanal nicht gefunden. Existiert er nicht oder ist privat?",
                currentlyViewing: "Aktuell angezeigt:",
                latestPostId: "Letzte ID:",
                searchCompleted: "✅ Suche abgeschlossen. Letzte Nachricht:",
                loadMore: "Ältere laden",
                checkNew: "Neue Nachrichten prüfen",
                noNew: "Keine neuen Nachrichten",
                prefs: "Einstellungen",
                allowCookies: "Persistente Cookies",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Auto-Prüfung",
                seconds: "Sekunden",
                deepCheck: "Erweiterte Prüfung",
                deepCheckTip: "Erweitert \"Neue prüfen\" auf 100 Beiträge",
                deepCheckInfo: "Falls keine neuen Nachrichten erscheinen, aktiviere \"Erweiterte Prüfung\": prüft bis 100 voraus, überspringt gelöschte.",
                themeToDark: "Dunkler Modus",
                themeToLight: "Heller Modus",
                startIdRequired: "Start ID eingeben (oder Automatik ohne Start ID)",
                invalidStartId: "Ungültige Start ID",
                invalidChannel: "Bitte gültigen Kanalnamen eingeben",
                quickGuideTitle: "Kurzanleitung: Gesperrte Kanäle:",
                quickGuideDescription: "Ermöglicht Zugriff auf gesperrte Telegram-Kanäle oder -Gruppen. Du liest Kanalnachrichten ohne in der Historie aufzutauchen, niemand sieht, dass du gelesen hast.",
                searchInfoText: "Die Automatik scheitert in Kanälen mit vielen gelöschten Nachrichten. Aktiviere dann \"Manual, start ID\" in den Einstellungen und gib die letzte Nachrichten-ID ein, die du selbst finden musst.",
                features: [
                    "Kein Login. Kein Telegram-Konto zum Lesen nötig",
                    "Kanalnamen nutzen (z. B. \"telegram\")",
                    "Volle URLs werden unterstützt (z. B. \"https://t.me/telegram\")",
                    "Merkt, wo du aufgehört hast, und setzt dort fort",
                    "Auto-Prüfung auf neue Nachrichten in Intervallen",
                    "URL-Parameter \"channel\" setzt den Standardkanal: ?channel=name",
                    "URL-Parameter \"add\" fügt dem Verlauf Kanäle hinzu, durch Kommas getrennt: ?add=k1,k2,...",
                    "Umgeht die Sperre von Telegram-Kanälen und -Gruppen.",
                    "Alternativ: ein HTML für jeden Browser herunterladen",
                    "Heller und dunkler Modus: nach System oder Wahl",
                    "Optionaler dauerhafter Speicher behält deine Daten",
                    "Automatische Sprachwahl: Oberfläche in 9 Sprachen",
                    "Blättere zurück mit der Schaltfläche \"Ältere laden\""
                ]
            },
            fr: {
                enterChannel: "Canal Telegram:",
                loadChannel: "Charger",
                loading: "Chargement...",
                checking: "Vérification...",
                startingAutoSearch: "Recherche automatique...",
                searchingInitialRange: "Recherche de la plage initiale...",
                testingMessage: "Test du message",
                rangeFound: "Plage trouvée:",
                verifyingLastMessage: "Vérification du dernier message:",
                noValidMessages: "Aucun message valide",
                channelTooLarge: "Canal trop grand pour la recherche automatique. Utilisez Start ID.",
                stopSearch: "Arrêter la recherche",
                searchStopped: "Recherche arrêtée",
                channelProbablyMissing: "Canal introuvable. Il n'existe peut-être pas ou est privé.",
                currentlyViewing: "Consultation actuelle:",
                latestPostId: "Dernier ID:",
                searchCompleted: "✅ Recherche terminée. Dernier message:",
                loadMore: "Messages précédents",
                checkNew: "Vérifier les nouveaux messages",
                noNew: "Aucun nouveau message",
                prefs: "Préférences",
                allowCookies: "Cookies persistants",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Vérification auto",
                seconds: "secondes",
                deepCheck: "Vérification étendue",
                deepCheckTip: "Étend \"Vérifier les nouveaux\" à 100 messages",
                deepCheckInfo: "Si aucun nouveau message n'apparaît, activez \"Vérification étendue\" : scanne jusqu'à 100 en avance, saute les supprimés.",
                themeToDark: "Mode sombre",
                themeToLight: "Mode clair",
                startIdRequired: "Saisissez un Start ID (ou décochez pour la recherche auto)",
                invalidStartId: "Start ID invalide",
                invalidChannel: "Saisissez un nom de canal valide",
                quickGuideTitle: "Guide rapide: voir les canaux bannis:",
                quickGuideDescription: "Permet d'accéder aux canaux ou groupes Telegram bloqués. Vous lisez les messages sans apparaître dans l'historique, personne ne sait que vous avez lu.",
                searchInfoText: "La recherche échoue dans les canaux avec beaucoup de messages supprimés. Activez alors \"Manual, start ID\" dans Préférences et saisissez l'ID du dernier message, que vous devez trouver.",
                features: [
                    "Sans connexion. Aucun compte Telegram requis",
                    "Utilisez les noms de canal (ex. \"telegram\")",
                    "URLs complètes acceptées (ex. \"https://t.me/telegram\")",
                    "Retient où vous vous êtes arrêté et reprend ici",
                    "Vérification automatique des nouveaux messages",
                    "Paramètre \"channel\" dans l'URL pour le canal par défaut: ?channel=nom",
                    "Paramètre \"add\" pour ajouter des canaux à l'historique, séparés par virgules: ?add=c1,c2,...",
                    "Contourne le bannissement de tout canal ou groupe Telegram.",
                    "Vous pouvez aussi télécharger un HTML lisible partout",
                    "Thèmes clair et sombre : système ou choix manuel",
                    "Stockage persistant optionnel : vos données sont gardées",
                    "Détection automatique : interface en 9 langues",
                    "Remontez le temps avec \"Messages précédents\""
                ]
            },
            it: {
                enterChannel: "Canale Telegram:",
                loadChannel: "Carica",
                loading: "Caricamento...",
                checking: "Verifica...",
                startingAutoSearch: "Ricerca automatica...",
                searchingInitialRange: "Ricerca intervallo iniziale...",
                testingMessage: "Prova messaggio",
                rangeFound: "Intervallo trovato:",
                verifyingLastMessage: "Verifica ultimo messaggio:",
                noValidMessages: "Nessun messaggio valido",
                channelTooLarge: "Canale troppo grande per la ricerca automatica. Usa Start ID manuale.",
                stopSearch: "Ferma ricerca",
                searchStopped: "Ricerca interrotta",
                channelProbablyMissing: "Canale non trovato. Potrebbe non esistere o essere privato.",
                currentlyViewing: "Al momento visualizzi:",
                latestPostId: "Ultimo ID:",
                searchCompleted: "✅ Ricerca completata. Ultimo messaggio:",
                loadMore: "Carica precedenti",
                checkNew: "Controlla nuovi messaggi",
                noNew: "Nessun nuovo messaggio",
                prefs: "Preferenze",
                allowCookies: "Cookie persistenti",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Controllo automatico",
                seconds: "secondi",
                deepCheck: "Controllo esteso",
                deepCheckTip: "Estende \"Controlla nuovi\" fino a 100 messaggi",
                deepCheckInfo: "Se non compaiono nuovi messaggi, attiva \"Controllo esteso\": scansiona fino a 100 avanti, saltando gli eliminati.",
                themeToDark: "Tema scuro",
                themeToLight: "Tema chiaro",
                startIdRequired: "Inserisci uno Start ID (o deseleziona per la ricerca auto)",
                invalidStartId: "Start ID non valido",
                invalidChannel: "Inserisci un nome canale valido",
                quickGuideTitle: "Guida rapida: canali bannati:",
                quickGuideDescription: "Permette di accedere a canali o gruppi Telegram bloccati. Leggi i messaggi senza comparire nella cronologia, nessuno sa che hai letto.",
                searchInfoText: "La ricerca automatica fallisce nei canali con molti messaggi eliminati. Attiva \"Manual, start ID\" in Preferenze e inserisci l'ID dell'ultimo messaggio, che devi trovare tu.",
                features: [
                    "Senza login. Nessun account Telegram per leggere",
                    "Usa i nomi dei canali (es. \"telegram\")",
                    "URL complete supportate (es. \"https://t.me/telegram\")",
                    "Ricorda dove eri arrivato in ogni canale e riprende da lì",
                    "Controllo automatico a intervalli regolari",
                    "Parametro \"channel\" nell'URL per il canale predefinito: ?channel=nome",
                    "Parametro \"add\" per aggiungere canali alla cronologia, separati da virgole: ?add=c1,c2,...",
                    "Aggira il ban di qualsiasi canale o gruppo Telegram.",
                    "Puoi scaricare un HTML che funziona in ogni browser",
                    "Temi chiari e scuri: di sistema o a tua scelta",
                    "L'archiviazione persistente opzionale conserva i dati",
                    "Rilevamento automatico: interfaccia in 9 lingue",
                    "Torna indietro nel tempo con \"Carica precedenti\""
                ]
            },
            pl: {
                enterChannel: "Kanał Telegram:",
                loadChannel: "Wczytaj",
                loading: "Wczytywanie...",
                checking: "Sprawdzanie...",
                startingAutoSearch: "Wyszukiwanie automatyczne...",
                searchingInitialRange: "Szukanie zakresu początkowego...",
                testingMessage: "Sprawdzanie wiadomości",
                rangeFound: "Znaleziono zakres:",
                verifyingLastMessage: "Sprawdzanie ostatniej wiadomości:",
                noValidMessages: "Brak poprawnych wiadomości",
                channelTooLarge: "Kanał zbyt duży do wyszukiwania. Użyj Start ID ręcznie.",
                stopSearch: "Zatrzymaj szukanie",
                searchStopped: "Wyszukiwanie zatrzymane",
                channelProbablyMissing: "Nie znaleziono kanału. Może nie istnieć lub być prywatny.",
                currentlyViewing: "Aktualnie oglądasz:",
                latestPostId: "Ostatnie ID:",
                searchCompleted: "✅ Szukanie zakończone. Ostatnia wiadomość:",
                loadMore: "Wczytaj starsze",
                checkNew: "Sprawdź nowe wiadomości",
                noNew: "Brak nowych wiadomości",
                prefs: "Preferencje",
                allowCookies: "Stałe cookies",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Auto-sprawdzanie",
                seconds: "sekund",
                deepCheck: "Szersze sprawdzanie",
                deepCheckTip: "Szerzej \"Sprawdź nowe\" do 100 wiadomości",
                deepCheckInfo: "Gdy nowe wiadomości nie pojawiają się, włącz \"Szersze sprawdzanie\": skanuje do 100 do przodu, pomijając usunięte.",
                themeToDark: "Tryb ciemny",
                themeToLight: "Tryb jasny",
                startIdRequired: "Podaj Start ID (lub odznacz dla szukania auto)",
                invalidStartId: "Nieprawidłowe Start ID",
                invalidChannel: "Podaj poprawną nazwę kanału",
                quickGuideTitle: "Krótki poradnik: zbanowane kanały:",
                quickGuideDescription: "Umożliwia dostęp do zablokowanych kanałów i grup Telegram. Czytasz wiadomości bez śladu w historii, nikt nie wie, że czytałeś.",
                searchInfoText: "Wyszukiwanie auto zawodzi w kanałach z wieloma usuniętymi wiadomościami. Włącz wtedy \"Manual, start ID\" w Preferencjach i podaj ID ostatniej wiadomości, które musisz znaleźć sam.",
                features: [
                    "Bez logowania. Konto Telegram niepotrzebne do czytania",
                    "Używaj nazw kanałów (np. \"telegram\")",
                    "Pełne adresy URL też działają (np. \"https://t.me/telegram\")",
                    "Pamięta, gdzie skończyłeś, i wznawia stamtąd",
                    "Auto-sprawdzanie nowych wiadomości w interwałach",
                    "Parametr \"channel\" w URL ustawia kanał domyślny: ?channel=nazwa",
                    "Parametr \"add\" dodaje kanały do historii, oddzielone przecinkami: ?add=c1,c2,...",
                    "Omija blokadę każdego kanału lub grupy Telegram.",
                    "Możesz pobrać HTML działający w każdej przeglądarce",
                    "Motyw jasny i ciemny: systemowy lub twój wybór",
                    "Opcjonalny zapis trwały zachowuje twoje dane",
                    "Automatyczne wykrywanie: interfejs w 9 językach",
                    "Cofnij się w czasie przyciskiem \"Wczytaj starsze\""
                ]
            },
            nl: {
                enterChannel: "Telegramkanaal:",
                loadChannel: "Laad",
                loading: "Laden...",
                checking: "Controleren...",
                startingAutoSearch: "Automatisch zoeken...",
                searchingInitialRange: "Begint bereik zoeken...",
                testingMessage: "Bericht testen",
                rangeFound: "Bereik gevonden:",
                verifyingLastMessage: "Laatste bericht verifiëren:",
                noValidMessages: "Geen geldige berichten",
                channelTooLarge: "Kanaal te groot voor automatisch zoeken. Gebruik handmatige Start ID.",
                stopSearch: "Zoeken stoppen",
                searchStopped: "Zoeken gestopt",
                channelProbablyMissing: "Kanaal niet gevonden. Het bestaat misschien niet of is privé.",
                currentlyViewing: "Nu aan het bekijken:",
                latestPostId: "Laatste ID:",
                searchCompleted: "✅ Zoeken voltooid. Laatste bericht:",
                loadMore: "Oudere laden",
                checkNew: "Nieuwe berichten controleren",
                noNew: "Geen nieuwe berichten",
                prefs: "Voorkeuren",
                allowCookies: "Blijvende cookies",
                manualMode: "Manual, start ID",
                autoCheckLabel: "Automatisch controleren",
                seconds: "seconden",
                deepCheck: "Uitgebreide controle",
                deepCheckTip: "Breidt \"Nieuwe controleren\" uit tot 100 berichten",
                deepCheckInfo: "Als nieuwe berichten niet verschijnen, zet \"Uitgebreide controle\" aan: scant tot 100 vooruit, springt over verwijderde.",
                themeToDark: "Donkere modus",
                themeToLight: "Lichte modus",
                startIdRequired: "Voer een Start ID in (of vink uit voor automatisch zoeken)",
                invalidStartId: "Ongeldig Start ID",
                invalidChannel: "Voer een geldige kanaalnaam in",
                quickGuideTitle: "Snelle gids: gebandeerde kanalen:",
                quickGuideDescription: "Geeft toegang tot geblokkeerde Telegramkanalen of -groepen. Je leest berichten zonder in de geschiedenis te verschijnen, niemand weet dat je las.",
                searchInfoText: "Automatisch zoeken faalt in kanalen met veel verwijderde berichten. Schakel dan \"Manual, start ID\" in bij Voorkeuren en voer de laatste bericht-ID in, die je zelf moet vinden.",
                features: [
                    "Geen login. Geen Telegram-account nodig om te lezen",
                    "Gebruik kanaalnamen (bijv. \"telegram\")",
                    "Volledige URL's worden ondersteund (bijv. \"https://t.me/telegram\")",
                    "Onthoudt waar je in elk kanaal was en gaat precies daar verder",
                    "Automatische check op nieuwe berichten",
                    "URL-parameter \"channel\" stelt het standaardkanaal in: ?channel=naam",
                    "URL-parameter \"add\" voegt kanalen toe aan de geschiedenis, gescheiden door komma's: ?add=k1,k2,...",
                    "Omzeilt de ban van elk Telegramkanaal of -groep.",
                    "Je kunt een HTML downloaden die in elke browser werkt",
                    "Licht en donker thema: systeem of eigen keuze",
                    "Optionele persistente opslag bewaart je gegevens",
                    "Automatische taalkeuze: interface in 9 talen",
                    "Blader terug in de tijd met \"Oudere laden\""
                ]
            }
        };
        const getPreferredLanguage = () => {
            // Runs before the storage object exists: read both backends
            // directly. Firefox with cookies fully blocked makes any storage
            // access throw, so this must not crash the whole script
            let savedLang = null;
            try {
                savedLang = sessionStorage.getItem('preferredLanguage') ||
                            localStorage.getItem('preferredLanguage');
            } catch (e) { /* storage disabled: fall back to the browser language */ }
            if (savedLang && translations[savedLang]) return savedLang;
            const base = (navigator.language || navigator.userLanguage || 'en').split('-')[0];
            return translations[base] ? base : 'en';
        };
        let currentLang = getPreferredLanguage();
        let t = translations[currentLang];
        function changeLanguage(lang) {
            currentLang = lang;
            t = translations[lang];
            storage.setItem('preferredLanguage', lang);
            document.documentElement.lang = lang;
            i18n.updateUITexts();
            updateLanguageSelector();
        }
        function updateLanguageSelector() {
            document.getElementById('lang-select').value = currentLang;
        }
        const CONFIG = {
            NUM_POSTS: 25,
            TIMEOUT_DURATION: 5000,
            MIN_IFRAME_HEIGHT: 60,
            DELETED_POST_CHECK_MAX_TIMES: 1500,
            DELETED_POST_CHECK_INTERVAL: 10,
            WIDGET_SCRIPT_URL: 'https://telegram.org/js/telegram-widget.js?22',
            CHECK_NEW_MAX: 20,
            DEEP_CHECK_MAX: 100,
            CHECK_NEW_BLOCK: 10,
            PROBE_POLL_INTERVAL: 50,
            PROBE_BAND_STABLE_SAMPLES: 30,
            PROBE_BAND_TIMEOUT: 1500,
            THEME_KEY: 'tgTheme',
            COOKIES_KEY: 'tgAllowCookies',
            LAST_ID_KEY_PREFIX: 'tgLastPostId:',
            START_ID_KEY_PREFIX: 'tgStartId:',
            START_ID_ENABLED_KEY: 'tgStartIdEnabled',
            AUTOCHECK_ENABLED_KEY: 'tgAutoCheckEnabled',
            AUTOCHECK_INTERVAL_KEY: 'tgAutoCheckInterval',
            DEEP_CHECK_ENABLED_KEY: 'tgDeepCheck',
            AUTOCHECK_DEFAULT_SECONDS: 60,
            SCROLL_INITIAL_DELAY: 300,
            AUTO_SCROLL_WINDOW: 10000,
            SEARCH_GRID_STEP: 100000,
            SEARCH_GAP_STREAK: 10,
            SEARCH_PARALLEL: 3,
            SEARCH_LEVELS: [10000, 1000, 100, 10],
            SEARCH_FINAL_WINDOW: 1000,
            SEARCH_FINAL_STREAK: 100,
            SEARCH_MAX_ID: 3000000
        };
        const state = {
            countInterval: 0,
            intervalId: null,
            lastPostId: 0,
            currentChannel: '',
            isLoading: false
        };
        // Session storage by default; localStorage only when the user opts in
        // via "Allow cookies" (the opt-in flag itself always lives in localStorage)
        const storage = {
            isPersistent() {
                try {
                    return localStorage.getItem(CONFIG.COOKIES_KEY) === '1';
                } catch (e) {
                    return false;
                }
            },
            current() {
                return storage.isPersistent() ? localStorage : sessionStorage;
            },
            getItem(key) {
                try {
                    return storage.current().getItem(key);
                } catch (e) {
                    // Browsers with cookies fully disabled make every storage
                    // access throw: behave as if nothing were stored
                    return null;
                }
            },
            setItem(key, value) {
                try {
                    storage.current().setItem(key, value);
                } catch (e) {
                    console.error('Storage error:', e);
                }
            },
            removeItem(key) {
                try {
                    storage.current().removeItem(key);
                } catch (e) {
                    console.error('Storage error:', e);
                }
            },
            isAppKey(key) {
                return key.startsWith(CONFIG.LAST_ID_KEY_PREFIX) ||
                       key.startsWith(CONFIG.START_ID_KEY_PREFIX) ||
                       ['preferredLanguage', 'telegramSavedChannels', CONFIG.THEME_KEY,
                        CONFIG.START_ID_ENABLED_KEY,
                        CONFIG.AUTOCHECK_ENABLED_KEY, CONFIG.AUTOCHECK_INTERVAL_KEY,
                        CONFIG.DEEP_CHECK_ENABLED_KEY].includes(key);
            },
            appKeys(store) {
                const keys = [];
                for (let i = 0; i < store.length; i++) {
                    const key = store.key(i);
                    if (storage.isAppKey(key)) keys.push(key);
                }
                return keys;
            },
            setPersistent(on) {
                try {
                    if (on) {
                        localStorage.setItem(CONFIG.COOKIES_KEY, '1');
                        for (const key of storage.appKeys(sessionStorage)) {
                            localStorage.setItem(key, sessionStorage.getItem(key));
                        }
                    } else {
                        localStorage.removeItem(CONFIG.COOKIES_KEY);
                        for (const key of storage.appKeys(localStorage)) {
                            sessionStorage.setItem(key, localStorage.getItem(key));
                            localStorage.removeItem(key);
                        }
                    }
                } catch (e) {
                    console.error('Could not change storage mode:', e);
                }
            }
        };
        const elements = {
            loading: document.getElementById('loading'),
            error: document.getElementById('error'),
            currentChannel: document.getElementById('current-channel'),
            stopSearchBtn: document.getElementById('stop-search-btn'),
            widgetContainer: document.getElementById('widget-container'),
            loadMoreButton: document.querySelector('.widget-load-more-button'),
            channelInput: document.getElementById('channel-input'),
            loadChannelBtn: document.getElementById('load-channel-btn'),
            startIdInput: document.getElementById('start-id-input'),
            startIdCheckbox: document.getElementById('pref-startid'),
            searchInfo: document.getElementById('searchInfo'),
            searchInfoText: document.getElementById('searchInfoText'),
            toolbarChannel: document.getElementById('toolbar-channel'),
            checkNewButton: document.getElementById('checkNewBtn'),
            themeToggle: document.getElementById('theme-toggle'),
            tipsCard: document.getElementById('tips-card')
        };
        const utils = {
            isValidChannelName(name) {
                return /^[A-Za-z0-9_]{5,32}$/.test(name);
            },
            extractChannelName(input) {
                const cleanInput = input.trim();
                let name = cleanInput;
                if (cleanInput.includes('t.me/')) {
                    const parts = cleanInput.split('/');
                    name = parts[parts.length - 1] || parts[parts.length - 2];
                }
                if (name.startsWith('@')) {
                    name = name.substring(1);
                }
                return utils.isValidChannelName(name) ? name : '';
            },
            setLoadingState(isLoading, message = 'Loading...') {
                state.isLoading = isLoading;
                elements.loading.textContent = message;
                elements.loading.style.display = isLoading ? 'block' : 'none';
            },
            showError(message) {
                elements.error.textContent = message;
                elements.error.style.display = 'block';
                elements.loading.style.display = 'none';
            },
            clearContainer() {
                elements.widgetContainer.innerHTML = '';
                elements.loadMoreButton.style.display = 'none';
                elements.checkNewButton.style.display = 'none';
                autoCheck.stop();
                elements.currentChannel.style.display = 'none';
                elements.toolbarChannel.textContent = '';
                elements.toolbarChannel.style.display = 'none';
            },
            createTestElement() {
                const testContainer = document.createElement('div');
                Object.assign(testContainer.style, {
                    position: 'absolute',
                    left: '-9999px',
                    visibility: 'hidden'
                });
                document.body.appendChild(testContainer);
                return testContainer;
            },
            saveChannel(channelName) {
                const savedChannels = JSON.parse(storage.getItem('telegramSavedChannels') || '[]');
                if (!savedChannels.includes(channelName)) {
                    savedChannels.push(channelName);
                    storage.setItem('telegramSavedChannels', JSON.stringify(savedChannels));
                    return true;
                }
                return false;
            },
            // The stored ID is the highest one ever found: it never goes back
            saveLastId(channelName, lastPostId) {
                const key = CONFIG.LAST_ID_KEY_PREFIX + channelName;
                const stored = parseInt(storage.getItem(key), 10) || 0;
                if (lastPostId > stored) {
                    storage.setItem(key, String(lastPostId));
                }
            },
            loadSavedChannels() {
                return JSON.parse(storage.getItem('telegramSavedChannels') || '[]');
            },
            removeChannel(channelName) {
                let savedChannels = utils.loadSavedChannels();
                savedChannels = savedChannels.filter(ch => ch !== channelName);
                storage.setItem('telegramSavedChannels', JSON.stringify(savedChannels));
            },
            displaySavedChannels() {
                const savedChannels = utils.loadSavedChannels();
                const listContainer = document.getElementById('saved-channels-list');
                const savedChannelsContainer = document.querySelector('.saved-channels');
                if (savedChannels.length > 0) {
                    listContainer.innerHTML = '';
                    savedChannels.forEach(channel => {
                        const li = document.createElement('li');
                        const span = document.createElement('span');
                        span.dataset.channel = channel;
                        span.textContent = `@${channel}`;
                        const removeButton = document.createElement('button');
                        removeButton.className = 'remove-channel';
                        removeButton.dataset.channel = channel;
                        removeButton.textContent = '×';
                        li.appendChild(span);
                        li.appendChild(removeButton);
                        listContainer.appendChild(li);
                    });
                    savedChannelsContainer.style.display = 'block';
                    document.querySelectorAll('.remove-channel').forEach(button => {
                        button.addEventListener('click', (e) => {
                            const channelToRemove = e.target.dataset.channel;
                            utils.removeChannel(channelToRemove);
                            utils.displaySavedChannels();
                        });
                    });
                    document.querySelectorAll('#saved-channels-list li span').forEach(span => {
                        span.addEventListener('click', (e) => {
                            elements.channelInput.value = e.target.dataset.channel;
                            utils.loadChannelStartId(e.target.dataset.channel);
                            elements.loadChannelBtn.click();
                        });
                    });
                } else {
                    savedChannelsContainer.style.display = 'none';
                }
            },
            // Start IDs live in storage (session or persistent per the opt-in),
            // one entry per channel; an empty value means "auto" and clears it
            saveChannelStartId(channelName, startId) {
                const key = CONFIG.START_ID_KEY_PREFIX + channelName;
                if (startId === null || startId === undefined || String(startId).trim() === '') {
                    storage.removeItem(key);
                } else {
                    storage.setItem(key, String(startId).trim());
                }
            },
            getChannelStartId(channelName) {
                return storage.getItem(CONFIG.START_ID_KEY_PREFIX + channelName) || null;
            },
            loadChannelStartId(channelName) {
                const savedStartId = utils.getChannelStartId(channelName);
                elements.startIdInput.value = savedStartId || '';
                return savedStartId;
            },
            loadCurrentChannelStartId() {
                const channelName = utils.extractChannelName(elements.channelInput.value);
                if (channelName) {
                    return utils.loadChannelStartId(channelName);
                }
                elements.startIdInput.value = '';
                return null;
            }
        };
        const messageChecker = {
            // Resolves { exists, certain }. A false is only "certain" when the
            // embed rendered the "post not found" page (thin iframe). A false
            // from a throttled embed (default ~150 px, never resized) or a
            // network failure is ambiguous: the post may exist, so callers
            // that cannot afford false negatives (the channel search) retry it.
            probe(channelName, messageId) {
                return new Promise((resolve) => {
                    const testContainer = utils.createTestElement();
                    let isResolved = false;
                    let pageLoaded = false;
                    let pageLoadedAt = 0;
                    let lastHeight = -1;
                    let stableCount = 0;
                    let fastTimer = null;
                    const cleanup = () => {
                        if (!isResolved) {
                            isResolved = true;
                            clearTimeout(fastTimer);
                            clearTimeout(timeout);
                            testContainer.remove();
                        }
                    };
                    const resolveWith = (result) => {
                        if (!isResolved) {
                            cleanup();
                            resolve(result);
                        }
                    };
                    const timeout = setTimeout(() => resolveWith({ exists: false, certain: false }), CONFIG.TIMEOUT_DURATION);
                    const script = document.createElement('script');
                    script.async = true;
                    script.src = CONFIG.WIDGET_SCRIPT_URL;
                    script.setAttribute('data-telegram-post', `${channelName}/${messageId}`);
                    script.setAttribute('data-width', '100%');
                    // Poll the iframe height every ~50 ms and resolve as soon
                    // as the answer is clear. The iframe starts at its default
                    // ~150 px and the embed resizes it once, so any height
                    // outside 145-155 after the page loaded is already final:
                    //   >160 / 60-144 -> the embed resized: the post exists
                    //   0 < h < 60    -> "post not found" page: does not exist
                    //   145-155       -> still the default size (throttled or
                    //                     missing embed): give up after a
                    //                     stable period or a deadline
                    const poll = () => {
                        if (isResolved) return;
                        const iframe = testContainer.querySelector('iframe');
                        const height = iframe ? iframe.offsetHeight : 0;
                        if (height === lastHeight) {
                            stableCount++;
                        } else {
                            stableCount = 0;
                            lastHeight = height;
                        }
                        if (height > 160) {
                            resolveWith({ exists: true, certain: true });
                            return;
                        }
                        if (pageLoaded) {
                            if (height > 0 && height < CONFIG.MIN_IFRAME_HEIGHT) {
                                resolveWith({ exists: false, certain: true });
                                return;
                            }
                            if (height >= 145 && height <= 155) {
                                // Default (throttled) widget size: no resize
                                // has arrived. Give up once it has been stable
                                // for a while, or once a deadline after load
                                // passed, so a fluctuating height does not sit
                                // until the full timeout. The answer is
                                // ambiguous: the post may exist but its embed
                                // was throttled.
                                if (stableCount >= CONFIG.PROBE_BAND_STABLE_SAMPLES ||
                                    Date.now() - pageLoadedAt >= CONFIG.PROBE_BAND_TIMEOUT) {
                                    resolveWith({ exists: false, certain: false });
                                    return;
                                }
                            } else if (height >= CONFIG.MIN_IFRAME_HEIGHT) {
                                resolveWith({ exists: true, certain: true });
                                return;
                            }
                        }
                        fastTimer = setTimeout(poll, CONFIG.PROBE_POLL_INTERVAL);
                    };
                    script.onload = () => {
                        const iframe = testContainer.querySelector('iframe');
                        if (iframe) {
                            iframe.onload = () => {
                                pageLoaded = true;
                                pageLoadedAt = Date.now();
                            };
                            fastTimer = setTimeout(poll, CONFIG.PROBE_POLL_INTERVAL);
                        } else {
                            // No iframe at all: the widget deduplicates by DOM
                            // id, so this only happens when the post is
                            // already rendered elsewhere in the page
                            resolveWith({ exists: false, certain: true });
                        }
                    };
                    script.onerror = () => resolveWith({ exists: false, certain: false });
                    testContainer.appendChild(script);
                });
            },
            async checkExists(channelName, messageId) {
                return (await messageChecker.probe(channelName, messageId)).exists;
            }
        };
        // Gap-tolerant last-message search. Deleted messages break the
        // monotonic assumption of a plain binary search, so this works in
        // passes of decreasing resolution: a probe grid to find an anchor, a
        // sweep upward in 100k steps to bracket the top region (crossing
        // deletion gaps via a consecutive-failure streak limit), refinement
        // passes at 10k/1k/100/10, and a final resolution-1 scan around the
        // result. Probes run in parallel batches of SEARCH_PARALLEL.
        const autoSearch = {
            gridValues: [
                80, 100, 120,
                980, 1000, 1020,
                9980, 10000, 10020,
                19980, 20000, 20020,
                39980, 40000, 40020,
                59980, 60000, 60020,
                79980, 80000, 80020,
                99980, 100000, 100020,
                499980, 500000, 500020,
                999980, 1000000, 1000020
            ],
            stopRequested: false,
            // Every search loop calls this so the Stop button aborts within
            // one batch; findLastPost distinguishes the stop from real errors
            checkStop() {
                if (autoSearch.stopRequested) {
                    throw new Error(t.searchStopped);
                }
            },
            updateInfo(message) {
                elements.currentChannel.textContent = message;
                elements.currentChannel.style.display = 'block';
            },
            // A false from a throttled embed is ambiguous, and the streak
            // logic cannot afford false negatives: retry every uncertain
            // false once before counting it as a failure.
            async checkBatch(channelName, ids) {
                const results = await Promise.all(ids.map(id => messageChecker.probe(channelName, id)));
                const uncertain = [];
                results.forEach((r, j) => {
                    if (!r.exists && !r.certain) uncertain.push(j);
                });
                if (uncertain.length) {
                    const retries = await Promise.all(uncertain.map(j => messageChecker.probe(channelName, ids[j])));
                    retries.forEach((r, i) => {
                        results[uncertain[i]] = r;
                    });
                }
                return results.map(r => r.exists);
            },
            async findAnchor(channelName) {
                const grid = autoSearch.gridValues;
                for (let i = 0; i < grid.length; i += CONFIG.SEARCH_PARALLEL) {
                    autoSearch.checkStop();
                    const batch = grid.slice(i, i + CONFIG.SEARCH_PARALLEL);
                    autoSearch.updateInfo(`${t.testingMessage} ${batch[0]}-${batch[batch.length - 1]}...`);
                    const results = await autoSearch.checkBatch(channelName, batch);
                    for (let j = batch.length - 1; j >= 0; j--) {
                        if (results[j]) return batch[j];
                    }
                }
                return 0;
            },
            async sweepUp(channelName, anchor) {
                const step = CONFIG.SEARCH_GRID_STEP;
                let highest = anchor;
                let fails = 0;
                for (let base = anchor + step; base <= CONFIG.SEARCH_MAX_ID; base += step * CONFIG.SEARCH_PARALLEL) {
                    autoSearch.checkStop();
                    const ids = [];
                    for (let k = 0; k < CONFIG.SEARCH_PARALLEL; k++) {
                        const id = base + k * step;
                        if (id <= CONFIG.SEARCH_MAX_ID) ids.push(id);
                    }
                    autoSearch.updateInfo(`${t.testingMessage} ${ids[0]}-${ids[ids.length - 1]}...`);
                    const results = await autoSearch.checkBatch(channelName, ids);
                    ids.forEach((id, j) => {
                        if (results[j]) {
                            highest = id;
                            fails = 0;
                        } else if (highest > 0) {
                            fails++;
                        }
                    });
                    if (highest > 0 && fails >= CONFIG.SEARCH_GAP_STREAK) {
                        return { highest, upper: ids[ids.length - 1] };
                    }
                }
                // Posts still existed at the sweep ceiling: the channel extends
                // beyond SEARCH_MAX_ID. Refinement cannot bracket it, so report
                // it as too large instead of returning a silently wrong ID.
                return { highest, upper: CONFIG.SEARCH_MAX_ID, capped: fails === 0 };
            },
            async refineLevel(channelName, highest, upper, step) {
                let fails = 0;
                let lastProbed = highest;
                for (let base = highest + step; base <= upper && fails < CONFIG.SEARCH_GAP_STREAK; base += step * CONFIG.SEARCH_PARALLEL) {
                    autoSearch.checkStop();
                    const ids = [];
                    for (let k = 0; k < CONFIG.SEARCH_PARALLEL; k++) {
                        const id = base + k * step;
                        if (id <= upper) ids.push(id);
                    }
                    if (!ids.length) break;
                    autoSearch.updateInfo(`${t.testingMessage} ${ids[0]}-${ids[ids.length - 1]}...`);
                    const results = await autoSearch.checkBatch(channelName, ids);
                    ids.forEach((id, j) => {
                        lastProbed = id;
                        if (results[j]) {
                            highest = id;
                            fails = 0;
                        } else {
                            fails++;
                        }
                    });
                }
                return { highest, upper: fails >= CONFIG.SEARCH_GAP_STREAK ? lastProbed : upper };
            },
            async finalScan(channelName, highest) {
                let fails = 0;
                const limit = highest + CONFIG.SEARCH_FINAL_WINDOW;
                for (let base = highest + 1; base <= limit && fails < CONFIG.SEARCH_FINAL_STREAK; base += CONFIG.SEARCH_PARALLEL) {
                    autoSearch.checkStop();
                    const ids = [];
                    for (let k = 0; k < CONFIG.SEARCH_PARALLEL; k++) {
                        if (base + k <= limit) ids.push(base + k);
                    }
                    autoSearch.updateInfo(`${t.testingMessage} ${ids[0]}-${ids[ids.length - 1]}...`);
                    const results = await autoSearch.checkBatch(channelName, ids);
                    ids.forEach((id, j) => {
                        if (results[j]) {
                            highest = id;
                            fails = 0;
                        } else {
                            fails++;
                        }
                    });
                }
                return highest;
            },
            async findLastPost(channelName) {
                autoSearch.stopRequested = false;
                elements.stopSearchBtn.disabled = false;
                elements.stopSearchBtn.style.display = 'block';
                try {
                    utils.setLoadingState(true, t.startingAutoSearch);
                    const savedId = parseInt(storage.getItem(CONFIG.LAST_ID_KEY_PREFIX + channelName), 10);
                    if (savedId > 0) {
                        // Resume exactly where the user left off, without any
                        // probe: "check new" catches up with what was published
                        // after that ID
                        autoSearch.displayResult(channelName, savedId);
                        return;
                    }
                    autoSearch.updateInfo(t.searchingInitialRange);
                    const anchor = await autoSearch.findAnchor(channelName);
                    if (anchor === 0) {
                        throw new Error(t.noValidMessages);
                    }
                    const sweep = await autoSearch.sweepUp(channelName, anchor);
                    if (sweep.capped) {
                        // A non-existent or private channel renders a preview
                        // page instead of "post not found", so every probe
                        // looks tall and the sweep runs to the ceiling. Probe
                        // an ID no real channel can have: if it also "exists",
                        // the channel itself does not.
                        const sentinelId = CONFIG.SEARCH_MAX_ID + 97000000;
                        const sentinel = await messageChecker.checkExists(channelName, sentinelId);
                        throw new Error(sentinel ? t.channelProbablyMissing : t.channelTooLarge);
                    }
                    autoSearch.updateInfo(`${t.rangeFound} ${sweep.highest} - ${sweep.upper}. ${t.startingAutoSearch}`);
                    let highest = sweep.highest;
                    let upper = sweep.upper;
                    for (const step of CONFIG.SEARCH_LEVELS) {
                        const refined = await autoSearch.refineLevel(channelName, highest, upper, step);
                        highest = refined.highest;
                        upper = refined.upper;
                    }
                    autoSearch.updateInfo(`${t.verifyingLastMessage} ${highest}`);
                    autoSearch.checkStop();
                    const lastPostId = await autoSearch.finalScan(channelName, highest);
                    autoSearch.displayResult(channelName, lastPostId);
                } catch (error) {
                    if (autoSearch.stopRequested) {
                        // An intentional Stop is not an error: report it as
                        // progress and leave the channel unselected
                        autoSearch.updateInfo(t.searchStopped);
                        elements.loadChannelBtn.disabled = false;
                        utils.setLoadingState(false);
                    } else {
                        console.error('Error in auto search:', error);
                        utils.showError(`Error in auto search: ${error.message}`);
                        elements.loadChannelBtn.disabled = false;
                        utils.setLoadingState(false);
                    }
                } finally {
                    elements.stopSearchBtn.style.display = 'none';
                }
            },
            displayResult(channelName, lastPostId) {
                state.lastPostId = lastPostId;
                state.currentChannel = channelName;
                utils.saveLastId(channelName, lastPostId);
                elements.toolbarChannel.textContent = `@${channelName}`;
                elements.toolbarChannel.style.display = 'inline-block';
                elements.currentChannel.textContent = '';
                const channelLabel = document.createElement('strong');
                channelLabel.textContent = `@${channelName}`;
                elements.currentChannel.append(
                    `${t.currentlyViewing} `,
                    channelLabel,
                    ` (${t.latestPostId} ${lastPostId})`
                );
                elements.currentChannel.style.display = 'block';
                autoSearch.updateInfo(`${t.searchCompleted} ${lastPostId}`);
                elements.currentChannel.classList.add('flash-ok');
                setTimeout(() => {
                    elements.currentChannel.classList.remove('flash-ok');
                }, 1000);
                utils.setLoadingState(false);
                elements.widgetContainer.innerHTML = '';
                elements.loadChannelBtn.disabled = false;
                window.dispatchEvent(new CustomEvent('telegramLoaded'));
            }
        };
        const manualSearch = {
            // Manual mode displays starting exactly from the entered Start ID
            async findLastPost(channelName, startId) {
                const start = parseInt(startId, 10);
                if (isNaN(start) || start <= 0) throw new Error(t.invalidStartId);
                autoSearch.displayResult(channelName, start);
            }
        };
        const widgetLoader = {
            createScript(postId) {
                const script = document.createElement('script');
                script.async = true;
                script.src = CONFIG.WIDGET_SCRIPT_URL;
                script.setAttribute('data-telegram-post', `${state.currentChannel}/${postId}`);
                script.setAttribute('data-width', '100%');
                if (theme.isDark()) {
                    // Documented dark recipe: data-dark="1" only
                    script.setAttribute('data-dark', '1');
                }
                return script;
            },
            createPostScripts(start, numPosts) {
                const end = start - numPosts + 1;
                const fragment = document.createDocumentFragment();
                // Ascending order: oldest first, newest last (chat-style)
                for (let n = end; n <= start; n++) {
                    fragment.appendChild(widgetLoader.createScript(n));
                }
                return { fragment, end };
            },
            load(start, numPosts = CONFIG.NUM_POSTS, prepend = false) {
                if (!elements.widgetContainer) return;
                iframeMonitor.start();
                elements.loadMoreButton.style.display = 'block';
                const { fragment, end } = widgetLoader.createPostScripts(start, numPosts);
                if (prepend) {
                    elements.widgetContainer.prepend(fragment);
                } else {
                    elements.widgetContainer.appendChild(fragment);
                }
                if (end > 1) {
                    widgetLoader.setupLoadMoreButton(end);
                } else {
                    elements.loadMoreButton.style.display = 'none';
                }
            },
            appendRange(fromId, toId) {
                const fragment = document.createDocumentFragment();
                for (let n = fromId; n <= toId; n++) {
                    // Safety net: replace any embed already rendered for this
                    // ID instead of appending a duplicate
                    const stale = elements.widgetContainer.querySelector(
                        `iframe[src*="/${state.currentChannel}/${n}?"]`
                    );
                    if (stale) stale.remove();
                    fragment.appendChild(widgetLoader.createScript(n));
                }
                elements.widgetContainer.appendChild(fragment);
            },
            setupLoadMoreButton(end) {
                const newButton = elements.loadMoreButton.cloneNode(true);
                elements.loadMoreButton.replaceWith(newButton);
                newButton.addEventListener('click', () => {
                    autoScroller.stop();
                    const previousFirst = elements.widgetContainer.querySelector('iframe');
                    const newStart = end - 1;
                    widgetLoader.load(newStart, CONFIG.NUM_POSTS, true);
                    widgetLoader.trackBatchReady(newStart - CONFIG.NUM_POSTS + 1, newStart);
                    widgetLoader.revealBatch(previousFirst);
                });
                elements.loadMoreButton = newButton;
            },
            // Bring the freshly loaded batch into view: the prepend lands above
            // the viewport, so without this the user sees nothing happening
            revealBatch(previousFirst, attempt = 0) {
                const first = elements.widgetContainer.querySelector('iframe');
                if (first && first !== previousFirst) {
                    first.scrollIntoView({ block: 'start' });
                    window.scrollBy(0, -70); // leave room for the sticky toolbar
                    return;
                }
                if (attempt < 15) {
                    setTimeout(() => widgetLoader.revealBatch(previousFirst, attempt + 1), 150);
                }
            },
            // Keep the button in a busy state until most of the new batch is
            // rendered (or 15 s max), so the user sees the loading progress
            trackBatchReady(fromId, toId) {
                const button = elements.loadMoreButton;
                const total = toId - fromId + 1;
                const started = Date.now();
                button.disabled = true;
                button.textContent = t.loading;
                const check = () => {
                    if (elements.loadMoreButton !== button) return;
                    let ready = 0;
                    elements.widgetContainer.querySelectorAll('iframe[src*="t.me"]').forEach(iframe => {
                        const match = (iframe.getAttribute('src') || '').match(/t\.me\/[^/]+\/(\d+)/);
                        if (!match) return;
                        const id = Number(match[1]);
                        if (id < fromId || id > toId) return;
                        const height = iframe.offsetHeight;
                        // Settled: out of the default ~150px band or measured
                        if (height > 0 && (height < 140 || height > 160)) ready++;
                    });
                    if (ready >= Math.ceil(total * 0.6) || Date.now() - started > 6000) {
                        button.disabled = false;
                        button.textContent = t.loadMore;
                        return;
                    }
                    setTimeout(check, 400);
                };
                setTimeout(check, 400);
            }
        };
        const autoScroller = {
            observer: null,
            debounce: null,
            initialTimer: null,
            windowTimer: null,
            active: false,
            scroll() {
                elements.checkNewButton.scrollIntoView({ behavior: 'auto', block: 'end' });
            },
            scheduleScroll() {
                clearTimeout(autoScroller.debounce);
                autoScroller.debounce = setTimeout(autoScroller.scroll, 200);
            },
            start() {
                autoScroller.stop();
                autoScroller.active = true;
                autoScroller.initialTimer = setTimeout(() => {
                    if (autoScroller.active) autoScroller.scheduleScroll();
                }, CONFIG.SCROLL_INITIAL_DELAY);
                autoScroller.observer = new MutationObserver(mutations => {
                    for (const mutation of mutations) {
                        for (const node of mutation.addedNodes) {
                            if (node.tagName === 'IFRAME') {
                                node.addEventListener('load', () => {
                                    if (autoScroller.active) autoScroller.scheduleScroll();
                                }, { once: true });
                            }
                        }
                    }
                });
                autoScroller.observer.observe(elements.widgetContainer, { childList: true });
                // Any manual scrolling cancels the auto-scroll
                autoScroller.cancelOnUserScroll = () => autoScroller.stop();
                window.addEventListener('wheel', autoScroller.cancelOnUserScroll, { passive: true });
                window.addEventListener('touchstart', autoScroller.cancelOnUserScroll, { passive: true });
                window.addEventListener('keydown', autoScroller.cancelOnUserScroll);
                autoScroller.windowTimer = setTimeout(() => autoScroller.stop(), CONFIG.AUTO_SCROLL_WINDOW);
            },
            stop() {
                if (autoScroller.active) {
                    // Pin position to cancel any in-flight smooth scroll
                    window.scrollTo(window.scrollX, window.scrollY);
                }
                autoScroller.active = false;
                clearTimeout(autoScroller.debounce);
                clearTimeout(autoScroller.initialTimer);
                clearTimeout(autoScroller.windowTimer);
                if (autoScroller.observer) {
                    autoScroller.observer.disconnect();
                    autoScroller.observer = null;
                }
                if (autoScroller.cancelOnUserScroll) {
                    window.removeEventListener('wheel', autoScroller.cancelOnUserScroll);
                    window.removeEventListener('touchstart', autoScroller.cancelOnUserScroll);
                    window.removeEventListener('keydown', autoScroller.cancelOnUserScroll);
                    autoScroller.cancelOnUserScroll = null;
                }
            }
        };
        const newMessages = {
            // deep: manual clicks honor the "Deep check" preference and scan
            // up to DEEP_CHECK_MAX to jump over deleted-post gaps; the
            // automatic check keeps the short range to spare Telegram
            async check(deep = false) {
                if (state.isLoading || !state.currentChannel || state.lastPostId <= 0) return;
                autoScroller.stop();
                state.isLoading = true;
                elements.checkNewButton.disabled = true;
                elements.checkNewButton.textContent = t.checking;
                try {
                    // Probe downwards inside windows of CHECK_NEW_BLOCK,
                    // stepping by two: the first existing target marks the
                    // boundary and everything up to it is shown. Deleted
                    // posts may hide the boundary, hence the descending scan.
                    const step = CONFIG.CHECK_NEW_BLOCK;
                    const max = deep && document.getElementById('pref-deepcheck').checked ?
                                CONFIG.DEEP_CHECK_MAX : CONFIG.CHECK_NEW_MAX;
                    let highest = state.lastPostId;
                    for (let windowEnd = step; windowEnd <= max; windowEnd += step) {
                        for (let offset = windowEnd; offset > windowEnd - step; offset -= 2) {
                            const target = state.lastPostId + offset;
                            if (await messageChecker.checkExists(state.currentChannel, target)) {
                                // Descending hit: every higher even offset
                                // already failed (except when target is the
                                // window's first probe; then the next check
                                // recovers anything higher), so the maximum
                                // is target or target+1: one probe pins it down
                                highest = target;
                                if (await messageChecker.checkExists(state.currentChannel, target + 1)) {
                                    highest = target + 1;
                                }
                                break;
                            }
                        }
                        if (highest > state.lastPostId) break;
                    }
                    // A lone new post at an odd offset is invisible to every
                    // even-offset probe: check the immediate next ID
                    if (highest === state.lastPostId &&
                        await messageChecker.checkExists(state.currentChannel, state.lastPostId + 1)) {
                        highest = state.lastPostId + 1;
                    }
                    if (highest > state.lastPostId) {
                        widgetLoader.appendRange(state.lastPostId + 1, highest);
                        state.lastPostId = highest;
                        utils.saveLastId(state.currentChannel, highest);
                        iframeMonitor.start();
                    } else {
                        elements.checkNewButton.textContent = t.noNew;
                        setTimeout(() => {
                            if (!elements.checkNewButton.disabled) {
                                elements.checkNewButton.textContent = t.checkNew;
                            }
                        }, 2000);
                    }
                } catch (error) {
                    console.error('Error checking new messages:', error);
                } finally {
                    state.isLoading = false;
                    elements.checkNewButton.disabled = false;
                    if (elements.checkNewButton.textContent === t.checking) {
                        elements.checkNewButton.textContent = t.checkNew;
                    }
                    autoCheck.reschedule();
                }
            }
        };
        const autoCheck = {
            intervalId: null,
            nextAt: 0,
            seconds() {
                const checkbox = document.getElementById('pref-autocheck');
                const value = parseInt(document.getElementById('autocheck-interval').value, 10);
                return checkbox.checked && value > 0 ? value : 0;
            },
            start() {
                autoCheck.stop();
                const seconds = autoCheck.seconds();
                if (!seconds || !state.currentChannel || state.lastPostId <= 0) return;
                autoCheck.nextAt = Date.now() + seconds * 1000;
                autoCheck.intervalId = setInterval(autoCheck.tick, 1000);
            },
            stop() {
                if (autoCheck.intervalId) {
                    clearInterval(autoCheck.intervalId);
                    autoCheck.intervalId = null;
                }
                if (elements.checkNewButton.textContent.startsWith(t.checkNew)) {
                    elements.checkNewButton.textContent = t.checkNew;
                }
            },
            reschedule() {
                const seconds = autoCheck.seconds();
                if (seconds && autoCheck.intervalId) {
                    autoCheck.nextAt = Date.now() + seconds * 1000;
                }
            },
            tick() {
                if (state.isLoading) return;
                const remaining = Math.ceil((autoCheck.nextAt - Date.now()) / 1000);
                if (remaining <= 0) {
                    newMessages.check();
                } else {
                    elements.checkNewButton.textContent = `${t.checkNew} (${remaining}s)`;
                }
            }
        };
        const iframeMonitor = {
            checkHeight() {
                const iframes = document.querySelectorAll('iframe[src*="t.me"]');
                iframes.forEach(iframe => {
                    const { offsetHeight } = iframe;
                    if (offsetHeight < CONFIG.MIN_IFRAME_HEIGHT && offsetHeight > 0) {
                        iframe.style.display = 'none';
                    }
                });
                state.countInterval++;
                if (state.intervalId && state.countInterval >= CONFIG.DELETED_POST_CHECK_MAX_TIMES) {
                    clearInterval(state.intervalId);
                    state.countInterval = 0;
                    state.intervalId = null;
                }
            },
            start() {
                if (state.intervalId) {
                    clearInterval(state.intervalId);
                }
                // Each run gets its full quota of ticks
                state.countInterval = 0;
                state.intervalId = setInterval(() => iframeMonitor.checkHeight(), CONFIG.DELETED_POST_CHECK_INTERVAL);
            }
        };
        const i18n = {
            updateUITexts() {
                // No visible label: the placeholder already explains the field,
                // but screen readers still need a name for the input
                document.getElementById('channel-input').setAttribute('aria-label', t.enterChannel);
                const loadBtn = document.getElementById('load-channel-btn');
                loadBtn.title = t.loadChannel;
                loadBtn.setAttribute('aria-label', t.loadChannel);
                document.getElementById('loadMoreBtn').textContent = t.loadMore;
                document.getElementById('checkNewBtn').textContent = t.checkNew;
                document.getElementById('stop-search-btn').textContent = t.stopSearch;
                document.getElementById('quickGuideTitle').textContent = t.quickGuideTitle;
                document.getElementById('quickGuideDescription').textContent = t.quickGuideDescription;
                document.getElementById('searchInfoText').textContent = t.searchInfoText;
                document.getElementById('prefsTitle').textContent = t.prefs;
                document.getElementById('prefCookiesLabel').textContent = t.allowCookies;
                document.getElementById('prefStartIdLabel').textContent = t.manualMode;
                document.getElementById('prefAutoCheckLabel').textContent = t.autoCheckLabel;
                document.getElementById('secondsLabel').textContent = t.seconds;
                document.getElementById('prefDeepCheckLabel').textContent = t.deepCheck;
                document.getElementById('prefDeepCheckLabel').title = t.deepCheckTip;
                document.getElementById('pref-deepcheck').title = t.deepCheckTip;
                document.getElementById('deepCheckInfoText').textContent = t.deepCheckInfo;
                const featuresList = document.getElementById('featuresList');
                featuresList.innerHTML = t.features.map(feature => `<li>${feature}</li>`).join('');
                theme.updateButton();
            }
        };
        // Light/dark theme: stored preference ('light'/'dark') or the system
        // when unset; Telegram embeds receive data-dark at creation time and
        // the feed is rebuilt on change (rendered embeds cannot be re-tinted)
        const theme = {
            query: window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null,
            preferred() {
                const value = storage.getItem(CONFIG.THEME_KEY);
                return value === 'light' || value === 'dark' ? value : null;
            },
            isDark() {
                const preferred = theme.preferred();
                if (preferred) return preferred === 'dark';
                return !!(theme.query && theme.query.matches);
            },
            apply() {
                const preferred = theme.preferred();
                if (preferred) {
                    document.documentElement.dataset.theme = preferred;
                } else {
                    delete document.documentElement.dataset.theme;
                }
                theme.updateButton();
            },
            updateButton() {
                if (!elements.themeToggle) return;
                const dark = theme.isDark();
                elements.themeToggle.classList.toggle('is-dark', dark);
                const label = dark ? t.themeToLight : t.themeToDark;
                elements.themeToggle.title = label;
                elements.themeToggle.setAttribute('aria-label', label);
            },
            toggle() {
                storage.setItem(CONFIG.THEME_KEY, theme.isDark() ? 'light' : 'dark');
                theme.apply();
                theme.refreshEmbeds();
            },
            refreshEmbeds() {
                const container = elements.widgetContainer;
                if (!container || !state.currentChannel) return;
                const ids = [...container.querySelectorAll('iframe[src*="t.me"]')]
                    .map(iframe => {
                        const match = (iframe.getAttribute('src') || '').match(/t\.me\/[^/]+\/(\d+)/);
                        return match ? Number(match[1]) : null;
                    })
                    .filter(id => id !== null)
                    .sort((a, b) => a - b);
                if (!ids.length) return;
                const wasAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
                container.innerHTML = '';
                const fragment = document.createDocumentFragment();
                for (const id of ids) {
                    fragment.appendChild(widgetLoader.createScript(id));
                }
                container.appendChild(fragment);
                iframeMonitor.start();
                if (wasAtBottom) autoScroller.start();
            },
            init() {
                theme.apply();
                if (theme.query) {
                    theme.query.addEventListener('change', () => {
                        // Only in auto mode: follow the system theme
                        if (!theme.preferred()) {
                            theme.apply();
                            theme.refreshEmbeds();
                        }
                    });
                }
            }
        };
        const eventListeners = {
            init() {
                i18n.updateUITexts();
                updateLanguageSelector();
                window.addEventListener('telegramLoaded', () => {
                    if (elements.widgetContainer && state.lastPostId > 0) {
                        // Render exactly up to lastPostId: telegram-widget.js
                        // deduplicates embeds by post ID, so any rendered ID
                        // above lastPostId would make the "check new" probes
                        // (lastPostId+1…) silently resolve to false
                        widgetLoader.load(state.lastPostId);
                        elements.checkNewButton.style.display = 'block';
                        // Land at the newest message (bottom), like a chat:
                        // scroll almost immediately, then re-adjust as iframes load
                        autoScroller.start();
                        autoCheck.start();
                    }
                });
                elements.checkNewButton.addEventListener('click', () => newMessages.check(true));
                elements.stopSearchBtn.addEventListener('click', () => {
                    if (!autoSearch.stopRequested) {
                        autoSearch.stopRequested = true;
                        elements.stopSearchBtn.disabled = true;
                    }
                });
                elements.themeToggle.addEventListener('click', () => theme.toggle());
                document.getElementById('pref-cookies').addEventListener('change', (e) => {
                    storage.setPersistent(e.target.checked);
                    // Reflect the real state: with storage disabled (Firefox
                    // blocking all cookies) nothing is saved and the checkbox
                    // must snap back instead of lying
                    e.target.checked = storage.isPersistent();
                });
                document.getElementById('pref-autocheck').addEventListener('change', (e) => {
                    storage.setItem(CONFIG.AUTOCHECK_ENABLED_KEY, e.target.checked ? '1' : '0');
                    autoCheck.start();
                });
                document.getElementById('autocheck-interval').addEventListener('change', (e) => {
                    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
                    e.target.value = value;
                    storage.setItem(CONFIG.AUTOCHECK_INTERVAL_KEY, String(value));
                    autoCheck.start();
                });
                document.getElementById('pref-deepcheck').addEventListener('change', (e) => {
                    storage.setItem(CONFIG.DEEP_CHECK_ENABLED_KEY, e.target.checked ? '1' : '0');
                });
                elements.startIdCheckbox.addEventListener('change', () => {
                    const on = elements.startIdCheckbox.checked;
                    storage.setItem(CONFIG.START_ID_ENABLED_KEY, on ? '1' : '0');
                    elements.startIdInput.disabled = !on;
                    if (on) {
                        utils.loadCurrentChannelStartId();
                    }
                });
                elements.startIdInput.addEventListener('change', () => {
                    const channelName = utils.extractChannelName(elements.channelInput.value);
                    if (channelName) {
                        utils.saveChannelStartId(channelName, elements.startIdInput.value);
                    }
                });
                elements.channelInput.addEventListener('input', () => {
                    utils.loadCurrentChannelStartId();
                });
                elements.loadChannelBtn.addEventListener('click', async () => {
                    const channelName = utils.extractChannelName(elements.channelInput.value);
                    if (!channelName) {
                        alert(t.invalidChannel);
                        return;
                    }
                    if (state.isLoading) return;
                    // Start ID checked = manual search from that ID; unchecked = automatic
                    const useManual = elements.startIdCheckbox.checked;
                    const startId = elements.startIdInput.value.trim();
                    if (useManual && startId === '') {
                        alert(t.startIdRequired);
                        return;
                    }
                    if (useManual) {
                        utils.saveChannelStartId(channelName, startId);
                    }
                    utils.clearContainer();
                    elements.tipsCard.style.display = 'none';
                    elements.loadChannelBtn.disabled = true;
                    elements.error.style.display = 'none';
                    try {
                        if (useManual) {
                            await manualSearch.findLastPost(channelName, startId);
                        } else {
                            await autoSearch.findLastPost(channelName);
                        }
                        if (utils.saveChannel(channelName)) {
                            utils.displaySavedChannels();
                        }
                    } catch (error) {
                        console.error('Error loading channel:', error);
                        utils.showError(error.message);
                    } finally {
                        elements.loadChannelBtn.disabled = false;
                    }
                });
                document.addEventListener('DOMContentLoaded', () => {
                    const urlParams = new URLSearchParams(window.location.search);
                    const channelParam = urlParams.get('channel');
                    if (channelParam) {
                        elements.channelInput.value = channelParam;
                        // Programmatic assignment does not fire 'input', so
                        // fill the saved Start ID for this channel explicitly
                        utils.loadCurrentChannelStartId();
                    }
                    utils.addChannelsFromURL();
                    utils.displaySavedChannels();
                });
                utils.addChannelsFromURL = function () {
                    const urlParams = new URLSearchParams(window.location.search);
                    const channelsToAdd = urlParams.get('add');
                    if (channelsToAdd) {
                        const channelsArray = channelsToAdd
                            .split(',')
                            .map(ch => utils.extractChannelName(ch))
                            .filter(ch => ch);
                        let addedAny = false;
                        channelsArray.forEach(channel => {
                            if (utils.saveChannel(channel)) {
                                addedAny = true;
                            }
                        });
                        if (addedAny) {
                            utils.displaySavedChannels();
                        }
                    }
                };
                elements.channelInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        elements.loadChannelBtn.click();
                    }
                });
                // Restore saved preferences
                document.getElementById('pref-cookies').checked = storage.isPersistent();
                const startIdOn = storage.getItem(CONFIG.START_ID_ENABLED_KEY) === '1';
                elements.startIdCheckbox.checked = startIdOn;
                elements.startIdInput.disabled = !startIdOn;
                utils.loadCurrentChannelStartId();
                document.getElementById('pref-autocheck').checked =
                    storage.getItem(CONFIG.AUTOCHECK_ENABLED_KEY) === '1';
                const savedInterval = parseInt(storage.getItem(CONFIG.AUTOCHECK_INTERVAL_KEY), 10);
                document.getElementById('autocheck-interval').value =
                    Number.isFinite(savedInterval) && savedInterval >= 0 ? savedInterval : CONFIG.AUTOCHECK_DEFAULT_SECONDS;
                document.getElementById('pref-deepcheck').checked =
                    storage.getItem(CONFIG.DEEP_CHECK_ENABLED_KEY) === '1';
                theme.init();
            }
        };
        eventListeners.init();
        if ('serviceWorker' in navigator) {
            // A service worker is no longer required for PWA installability;
            // unregister any leftover registration from older versions so the
            // app runs without one
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                registrations.forEach((registration) => registration.unregister());
            });
        }
