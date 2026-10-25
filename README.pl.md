# Telegram Ban Bypass

**Język:** [English](README.md) | [Español](README.es.md) | [Русский](README.ru.md) | [Português](README.pt.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | **Polski** | [Nederlands](README.nl.md)

## Przegląd

Ulepszone narzędzie internetowe, które pozwala przeglądać treści dowolnego publicznego kanału Telegram — nawet jeśli Twoje konto jest zbanowane na tym konkretnym kanale. Zawiera optymalizacje wydajności i ulepszone funkcje.

**Demonstracja na żywo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Instalacja

Instalacja nie jest potrzebna. Możesz:
1. korzystać z **[wersji internetowej na żywo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)** albo
2. pobrać **[pojedynczy plik HTML](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** i otworzyć go w dowolnej przeglądarce

## Funkcje

- **Bez logowania** - do czytania kanałów nie jest potrzebne konto Telegram
- **Wieloprzebiegowe szukanie odporne na luki** - znajduje najnowszy post nawet przez luki po usuniętych wiadomościach
- **Wznawianie od miejsca, w którym skończyłeś** - ponowne otwarcie kanału uruchamia się natychmiast od zapisanego ostatniego ID; zatrzymane szukanie zapisuje postęp i kolejne szukanie kontynuuje od niego, a „Szukaj ponownie" weryfikuje od zapisanego ostatniego ID i poprawia go, jeśli wiadomości zostały usunięte, za każdym razem sondując inne ID
- **Sprawdź nowe wiadomości** - następne posty pojawiają się natychmiast, gdy sprawdzanie nadal działa w tle; przycisk ręczny, opcjonalny timer automatycznego sprawdzania oraz sprawdzanie rozszerzone z konfigurowalnym limitem (do 1000 postów do przodu), które przeskakuje większe luki
- **Tryb Start ID ręcznie** - dla kanałów, w których automatyczne szukanie sobie nie radzi, zacznij od znanego ID wiadomości
- **Informacje zwrotne w czasie rzeczywistym** - pokazują postęp szukania
- **Motyw jasny i ciemny, 9 języków** - dostosowuje się do ustawień systemu, instalowalne jako PWA
- **Optymalizacja mobilna** - działa na wszystkich urządzeniach
- **Bez instalacji** - działa bezpośrednio w przeglądarce

## Jak to działa

To narzędzie korzysta z [API Telegram Widgets](https://core.telegram.org/widgets/post), zaprojektowanego do osadzania konkretnych postów Telegramu.

Na kanałach i w grupach Telegram ID wiadomości są kolejne. Oznacza to, że jeśli znasz ID najnowszego postu, możesz wyświetlić dowolną liczbę wcześniejszych wiadomości za pomocą widgetu postów Telegramu.

#### Wyzwanie: znaleźć ID ostatniej wiadomości

Główną przeszkodą jest ustalenie ID najnowszej wiadomości na kanale lub w grupie. Oficjalne API Telegramu mogłyby dostarczyć te dane, ale mają ograniczenia:

- limity zapytań ograniczają częste odpytywanie;
- ograniczenia CORS utrudniają implementację w JavaScript po stronie klienta.

#### Rozwiązanie: obejście oparte na widgecie

Aby ominąć te ograniczenia i nie zależeć od API, narzędzie używa widgetu postów Telegramu do wykrycia najnowszej wiadomości. *Sonda* ładuje widget dla domniemanego ID wiadomości w ukrytym kontenerze i odczytuje wysokość wynikowej ramki iframe:

- wysoka ramka iframe (przeskalowana przez osadzenie) → wiadomość istnieje.
- cienka ramka iframe → Telegram wyświetlił swoją stronę „post not found": wiadomość nie istnieje.
- domyślna ramka iframe ~150 px (nigdy nieprzeskalowana) → niejednoznacznie: żądanie osadzenia zostało ograniczone albo kanał nie istnieje. Niejednoznaczne odpowiedzi są ponawiane raz, zanim zostaną policzone jako brakujące.

Wykrywanie wiadomości w ten sposób nigdy nie czyta treści widgetu (CORS na to nie pozwala) — tylko rozmiar ramki iframe.

Gdy wykrywanie istnienia jest gotowe, szukanie działa w przebiegach o malejącej rozdzielczości, tolerując luki po usuniętych wiadomościach:

1. Siatka kotwic – mała siatka ID sond znajduje wiadomość, co do której wiadomo, że istnieje.
2. Zamiatanie w górę – grube sondy (kroki 100k) wyznaczają obszar nad ostatnią istniejącą wiadomością.
3. Doprecyzowanie – kolejne przebiegi dla 10k, 1k, 100 i 10 zawężają obszar.
4. Skan końcowy – skan z rozdzielczością 1 ustala dokładne ID ostatniej wiadomości.

Każdy przebieg idzie do przodu i zatrzymuje się po serii kolejnych nieobecności (domyślnie 10) — to właśnie pozwala przeskakiwać luki po usunięciach: w przebiegu 1k może pokonać lukę do ~10 000 usuniętych wiadomości, w przebiegu 100 około ~1000 i tak dalej. Sondy działają w równoległych partiach po 5. Przycisk Stop przerywa szukanie w każdej chwili; najwyższe dotąd zweryfikowane ID jest zapisywane i kolejne szukanie tego kanału kontynuuje od niego, zamiast zaczynać od nowa.

#### Dlaczego szukanie może być powolne

Każda sonda to prawdziwe żądanie osadzenia do t.me, a pojedyncza odpowiedź trwa około 0,1–1,5 sekundy. Pełne szukanie kosztuje około 150–250 sond, więc zwykle trwa dziesiątki sekund. Spowalniają je dwie rzeczy:

- **Limity zapytań Telegramu.** Po wielu żądaniach t.me zaczyna odrzucać odpowiedzi osadzeń (niejednoznaczny przypadek ~150 px powyżej). Sondy zużywają wtedy pełne oczekiwanie plus ponowienie i całe szukanie może rozciągnąć się do minut. Limity są liczone na IP i same się zdejmują po pewnym czasie.
- **Luki po usuniętych wiadomościach.** Większe luki wymuszają więcej sond doprecyzowujących, zanim próg serii zostanie osiągnięty.

Ponowne otwarcie kanału, który już otworzyłeś, jest natychmiastowe: ID ostatniej wiadomości jest zapisane i używane ponownie, zero sond. „Sprawdź nowe wiadomości" działa wtedy tylko na kilku ID powyżej niego: następne dziesięć ID jest od razu renderowanych w kanale (nieistniejące posty same się ukrywają), więc wszystko nowe pojawia się od razu, podczas gdy skan w tle nadal ustala prawdziwą ostatnią wiadomość. Te dziesięć osadzeń służy jednocześnie jako sondy istnienia dla swoich ID, więc sprawdzanie nie kosztuje dodatkowych żądań.

#### Znane problemy szukania

- **Kanały z masowymi usunięciami.** Jeśli kanał ma lukę po usunięciach większą, niż przebieg jest w stanie pokonać — na przykład czystka spamu, która usunęła większość historii, zostawiając najnowszy post odosobniony tysiące ID nad ostatnią ocalałą grupą wiadomości — szukanie zatrzyma się poniżej prawdziwej ostatniej wiadomości. Nie ma taniego sposobu wykrycia takiej luki; użyj trybu Start ID ręcznie dla tych kanałów.
- **Bardzo duże kanały.** Kanały, których ostatnie ID wiadomości przekracza 3 miliony, są zgłaszane jako „zbyt duże" zamiast przeszukiwane; tu znowu pomaga tryb Start ID ręcznie.
- **Nieistniejące lub prywatne kanały.** Telegram serwuje stronę podglądu dla *każdego* ID wiadomości kanału, który nie istnieje, więc wszystkie sondy wydają się „wysokie". Szukanie wykrywa to sondą-strażnikiem na ID, którego nie może mieć żaden prawdziwy kanał, i zgłasza, że kanał nie został znaleziony.

## Technologie

- Korzystanie z publicznego API widgetów Telegramu, które nie podlega banom
- Dynamiczne ładowanie postów w odwrotnej kolejności chronologicznej
- Automatyczne wykrywanie i usuwanie usuniętych postów
- Pojedynczy plik HTML bez zależności (czysty JS/CSS), instalowalny jako PWA

## Ograniczenia

- Działa tylko z publicznymi kanałami
- Mogą występować problemy przy wolnych połączeniach internetowych.
- Niektóre bardzo stare posty mogą się nie ładować
- Brak możliwości pobierania mediów
- Kanały z ekstremalnie masowymi usunięciami (np. czystki spamu usuwające ponad połowę wszystkich wiadomości) mogą pokonać automatyczne szukanie; użyj wtedy trybu Start ID ręcznie

## Licencja

Licencja MIT - darmowa do użytku osobistego i komercyjnego

---

**[README](https://franbarinstance.github.io/Telegram-Ban-Bypass/)** | **[Repozytorium](https://github.com/FranBarInstance/Telegram-Ban-Bypass)** | **[Wersja internetowa na żywo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**
