# Telegram Ban Bypass

**Taal:** [English](README.md) | [Español](README.es.md) | [Русский](README.ru.md) | [Português](README.pt.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | **Nederlands**

## Overzicht

Een verbeterde webtool waarmee je inhoud van elk openbaar Telegram-kanaal kunt bekijken, zelfs als je account in dat specifieke kanaal verbannen is. Met performance-optimalisaties en verbeterde functies.

**Live-demo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Installatie

Geen installatie nodig. Je kunt:
1. de **[live webversie](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)** gebruiken, of
2. het **[enkele HTML-bestand](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** downloaden en in elke browser openen

## Functies

- **Geen login nodig** - je hebt geen Telegram-account nodig om kanalen te lezen
- **Gap-tolerante zoektocht in meerdere passes** - vindt het nieuwste bericht ook over gaten van verwijderde berichten heen
- **Hervat waar je was** - een kanaal opnieuw openen gebeurt direct vanaf het opgeslagen laatste ID; een gestopte zoektocht slaat haar voortgang op en de volgende zoektocht gaat vanaf daar verder, en "Opnieuw zoeken" forceert een verse zoektocht
- **Nieuwe berichten controleren** - de volgende berichten verschijnen meteen terwijl de controle op de achtergrond doorloopt; handmatige knop, optionele automatische controletimer en een uitgebreide controle met instelbare limiet (tot 1000 berichten vooruit) die grotere gaten overslaat
- **Handmatige Start ID-modus** - voor kanalen waar de automatische zoektocht struikelt, start vanaf een bekend bericht-ID
- **Realtime feedback** - toont de voortgang van de zoektocht
- **Licht en donker thema, 9 talen** - volgt systeemvoorkeuren, installeerbaar als PWA
- **Mobiel geoptimaliseerd** - werkt op alle apparaten
- **Geen installatie** - draait direct in de browser

## Hoe het werkt

Deze tool gebruikt de [Telegram Widgets API](https://core.telegram.org/widgets/post), ontworpen om specifieke Telegram-berichten in te sluiten.

In Telegram-kanalen en -groepen zijn de bericht-ID's opeenvolgend. Dat betekent dat je, als je het ID van het nieuwste bericht kent, met het Telegram-postwidget een willekeurig aantal eerdere berichten kunt tonen.

#### De uitdaging: het laatste bericht-ID vinden

Het grootste struikelblok is het bepalen van het nieuwste bericht-ID in een kanaal of groep. De officiële Telegram-API's zouden deze gegevens kunnen leveren, maar hebben beperkingen:

- tarieflimieten beperken veelvuldige bevragingen;
- CORS-beperkingen maken client-side JavaScript-implementaties moeilijk.

#### De oplossing: een omweg via het widget

Om deze beperkingen te omzeilen en niet van een API afhankelijk te zijn, gebruikt deze tool het Telegram-postwidget om het nieuwste bericht te detecteren. Een *sonde* laadt het widget voor een vermoed bericht-ID in een verborgen container en leest de hoogte van de resulterende iframe:

- hoge iframe (vergroot door de insluiting) → het bericht bestaat.
- dunne iframe → Telegram renderde zijn pagina "post not found": het bericht bestaat niet.
- standaard iframe van ~150 px (nooit vergroot) → ambigu: het insluitverzoek werd beperkt of het kanaal bestaat niet. Ambigue antwoorden worden één keer geprobeerd voordat ze als ontbrekend tellen.

Een bericht zo detecteren leest nooit de inhoud van het widget (CORS voorkomt dat) — alleen de grootte van de iframe.

Met existentiedetectie op zijn plaats werkt de zoektocht in passes met afnemende resolutie en verdraagt ze gaten van verwijderde berichten:

1. Anker-raster – een klein raster van sonde-ID's vindt een bericht dat zeker bestaat.
2. Omhoog vegen – grove sondes (stappen van 100k) begrenzen het gebied boven het laatste bestaande bericht.
3. Verfijning – opeenvolgende passes op 10k, 1k, 100 en 10 verkleinen het gebied.
4. Eindscan – een scan met resolutie 1 bepaalt het exacte laatste bericht-ID.

Elke pass loopt vooruit en stopt na een reeks opeenvolgende misses (standaard 10), en dat is wat het toestaat over verwijderingsgaten te springen: in de 1k-pass kan het een gat van tot ~10.000 verwijderde berichten oversteken, in de 100-pass ~1.000, en ga zo maar door. Sondes draaien in parallelle batches van 3. Een Stop-knop breekt de zoektocht op elk moment af; het hoogste tot dan toe geverifieerde ID wordt opgeslagen, en de volgende zoektocht van dat kanaal gaat vanaf daar verder in plaats van opnieuw te beginnen.

#### Waarom de zoektocht traag kan zijn

Elke sonde is een echt insluitverzoek aan t.me, en een enkel antwoord duurt ruwweg 0,1–1,5 seconden. Een volledige zoektocht kost rond de 150–250 sondes, dus duurt meestal tientallen seconden. Twee dingen maken het trager:

- **Tarieflimieten van Telegram.** Na veel verzoeken begint t.me insluitantwoorden te laten vallen (het ambigu ~150 px-geval hierboven). Sondes kosten dan de volledige wachttijd plus een nieuwe poging, en de hele zoektocht kan uitlopen tot minuten. De limieten gelden per IP en heffen zichzelf na een tijd op.
- **Gaten van verwijderde berichten.** Grotere gaten dwingen meer verfijningssondes af voordat de reeksdrempel wordt bereikt.

Een kanaal dat je al geopend hebt opnieuw bezoeken is meteen klaar: het laatste bericht-ID is opgeslagen en wordt hergebruikt, met nul sondes. "Nieuwe berichten controleren" werkt dan alleen op de paar ID's erboven: de volgende tien ID's worden meteen in de feed weergegeven (niet-bestaande berichten verbergen zichzelf), dus alles nieuws verschijnt meteen terwijl de scan op de achtergrond doorgaat met het bepalen van het echte laatste bericht. Die tien insluitingen dienen tegelijk als existentiesondes voor hun ID's, dus de controle kost geen extra verzoeken.

#### Bekende zoekproblemen

- **Kanalen met zware verwijderingen.** Als een kanaal een verwijderingsgat heeft dat groter is dan een pass kan oversteken — bijvoorbeeld een spam-zuivering die het grootste deel van de geschiedenis verwijderde en het nieuwste bericht duizenden ID's boven het laatste overlevende blok geïsoleerd achterliet — stopt de zoektocht onder het echte laatste bericht. Er is geen goedkope manier om zo'n gat te detecteren; gebruik de handmatige Start ID-modus voor deze kanalen.
- **Zeer grote kanalen.** Kanalen wiens laatste bericht-ID boven 3 miljoen ligt, worden gerapporteerd als "te groot" in plaats van doorzocht; ook daar werkt de handmatige Start ID-modus.
- **Niet-bestaande of privékanalen.** Telegram serveert een voorpaginaweergave voor *elk* bericht-ID van een kanaal dat niet bestaat, dus alle sondes lijken "hoog". De zoektocht detecteert dit met een sentinel-sonde op een ID dat geen enkel echt kanaal kan hebben, en meldt dat het kanaal niet gevonden is.

## Technologieën

- Gebruik van de publieke widget-API van Telegram, die niet aan banen onderhevig is
- Dynamisch laden van berichten in omgekeerde chronologische volgorde
- Automatisch detecteren en verwijderen van verwijderde berichten
- Enkel HTML-bestand zonder afhankelijkheden (vanilla JS/CSS), installeerbaar als PWA

## Beperkingen

- Werkt alleen met openbare kanalen
- Er kunnen problemen zijn bij trage internetverbindingen.
- Sommige zeer oude berichten laden mogelijk niet
- Geen mogelijkheid om media te downloaden
- Kanalen met extreem zware verwijderingen (bijvoorbeeld spam-zuiveringen die meer dan de helft van alle berichten verwijderen) kunnen de automatische zoektocht verslaan; gebruik daar de handmatige Start ID-modus

## Licentie

MIT-licentie - vrij voor persoonlijk en commercieel gebruik

---

**[README](https://franbarinstance.github.io/Telegram-Ban-Bypass/)** | **[Repository](https://github.com/FranBarInstance/Telegram-Ban-Bypass)** | **[Live webversie](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**
