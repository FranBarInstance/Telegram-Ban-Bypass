# Telegram Ban Bypass

**Sprache:** [English](README.md) | [Español](README.es.md) | [Русский](README.ru.md) | [Português](README.pt.md) | **Deutsch** | [Français](README.fr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [Nederlands](README.nl.md)

## Überblick

Ein erweitertes Web-Tool, mit dem du die Inhalte jedes öffentlichen Telegram-Kanals ansehen kannst — auch wenn dein Konto in genau diesem Kanal gesperrt ist. Mit Performance-Optimierungen und aufgewerteten Funktionen.

**Live-Demo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Installation

Keine Installation nötig. Du kannst:
1. die **[Live-Web-Version](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)** nutzen, oder
2. die **[einzelne HTML-Datei](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** herunterladen und in jedem Browser öffnen

## Funktionen

- **Kein Login nötig** - zum Lesen von Kanälen ist kein Telegram-Konto nötig
- **Mehrpassesuche mit Lückentoleranz** - findet den neuesten Beitrag auch über Lücken gelöschter Nachrichten hinweg
- **Setzt dort fort, wo du aufgehört hast** - ein Kanal, den du erneut besuchst, öffnet sofort ab der gespeicherten letzten ID; eine gestoppte Suche speichert ihren Fortschritt und die nächste Suche setzt dort fort, während „Erneut suchen" ab der gespeicherten letzten ID neu prüft und sie korrigiert, falls Nachrichten gelöscht wurden, bei jedem Klick andere IDs testend
- **Neue Nachrichten prüfen** - die nächsten Beiträge erscheinen sofort, während die Prüfung im Hintergrund weiterläuft; manueller Button, optionaler Auto-Prüf-Timer und eine erweiterte Prüfung mit einstellbarem Limit (bis zu 1000 Beiträge voraus), die größere Lücken überspringt
- **Manueller Start-ID-Modus** - für Kanäle, in denen die automatische Suche scheitert, starte bei einer bekannten Nachrichten-ID
- **Rückmeldung in Echtzeit** - zeigt den Suchfortschritt
- **Helles & dunkles Theme, 9 Sprachen** - folgt den Systemeinstellungen, als PWA installierbar
- **Mobil optimiert** - funktioniert auf allen Geräten
- **Keine Installation** - läuft direkt im Browser

## Wie es funktioniert

Dieses Tool nutzt die [Telegram-Widgets-API](https://core.telegram.org/widgets/post), die dafür gedacht ist, bestimmte Telegram-Beiträge einzubetten.

In Telegram-Kanälen und -Gruppen sind die Nachrichten-IDs fortlaufend. Das heißt: Kennst du die ID des neuesten Beitrags, kannst du mit dem Telegram-Post-Widget beliebig viele vorherige Nachrichten anzeigen.

#### Die Herausforderung: die letzte Nachrichten-ID finden

Das Haupthindernis ist, die neueste Nachrichten-ID in einem Kanal oder einer Gruppe zu bestimmen. Die offiziellen Telegram-APIs könnten diese Daten liefern, haben aber Grenzen:

- Rate Limits beschränken häufige Abfragen.
- CORS-Einschränkungen machen die clientseitige JavaScript-Implementierung schwierig.

#### Die Lösung: ein Umweg über das Widget

Um diese Grenzen zu umgehen und nicht von einer API abhängig zu sein, nutzt dieses Tool das Telegram-Post-Widget, um den neuesten Beitrag zu erkennen. Eine *Sonde* lädt das Widget für eine vermutete Nachrichten-ID in einem versteckten Container und liest die Höhe des resultierenden iframe:

- Hohes iframe (vom Embed vergrößert) → die Nachricht existiert.
- Dünnes iframe → Telegram hat seine Seite „post not found" gerendert: die Nachricht existiert nicht.
- Standard-iframe von ~150 px (nie vergrößert) → mehrdeutig: die Embed-Anfrage wurde gedrosselt oder der Kanal existiert nicht. Mehrdeutige Antworten werden einmal wiederholt, bevor sie als fehlend gezählt werden.

Auf diese Weise eine Nachricht zu erkennen, liest nie den Inhalt des Widgets (CORS verhindert das) — nur die Größe des iframe.

Mit der Existenz-Erkennung arbeitet die Suche in Durchläufen mit absteigender Auflösung und toleriert Lücken gelöschter Nachrichten:

1. Anker-Raster – ein kleines Raster aus Sonden-IDs findet eine nachweislich existierende Nachricht.
2. Aufwärts-Sweep – grobe Sonden (100k-Schritte) grenzen den Bereich oberhalb der letzten existierenden Nachricht ein.
3. Verfeinerung – aufeinanderfolgende Durchläufe mit 10k, 1k, 100 und 10 engen den Bereich ein.
4. Endscan – ein Scan mit Auflösung 1 nagelt die exakte letzte Nachrichten-ID fest.

Jeder Durchlauf läuft vorwärts und stoppt nach einer Serie aufeinanderfolgender Fehlschläge (standardmäßig 10) — genau das erlaubt es, Löschungs-Lücken zu überspringen: im 1k-Durchlauf kann er eine Lücke von bis zu ~10.000 gelöschten Nachrichten überqueren, im 100-Durchlauf ~1.000, und so weiter. Sonden laufen in parallelen Batches von 5. Ein Stop-Button bricht die Suche jederzeit ab; die höchste bislang verifizierte ID wird gespeichert, und die nächste Suche dieses Kanals setzt dort fort, statt von vorn zu beginnen.

#### Warum die Suche langsam sein kann

Jede Sonde ist eine echte Embed-Anfrage an t.me, und eine einzelne Antwort dauert etwa 0,1–1,5 Sekunden. Eine vollständige Suche kostet rund 150–250 Sonden, dauert also meist einige zehn Sekunden. Zwei Dinge verlangsamen sie:

- **Telegram-Rate-Limiting.** Nach vielen Anfragen beginnt t.me, Embed-Antworten zu verwerfen (der mehrdeutige ~150-px-Fall oben). Sonden brauchen dann die volle Wartezeit plus einen Wiederholungsversuch, und die gesamte Suche kann sich auf Minuten ausdehnen. Die Limits gelten pro IP und heben sich nach einer Weile von selbst.
- **Lücken gelöschter Nachrichten.** Größere Lücken erzwingen mehr Verfeinerungs-Sonden, bevor die Serien-Schwelle erreicht ist.

Ein Kanal, den du bereits geöffnet hast, ist beim Wiederbesuch sofort da: die letzte Nachrichten-ID ist gespeichert und wird wiederverwendet, mit null Sonden. „Neue Nachrichten prüfen" arbeitet danach nur an den wenigen IDs darüber: die nächsten zehn IDs werden sofort im Feed gerendert (nicht existierende Beiträge verstecken sich selbst), also taucht alles Neue sofort auf, während der Scan im Hintergrund die echte letzte Nachricht weiter bestimmt. Diese zehn Embeds dienen zugleich als Existenz-Sonden für ihre IDs, die Prüfung kostet also keine zusätzlichen Anfragen.

#### Bekannte Suchprobleme

- **Kanäle mit starken Löschungen.** Wenn ein Kanal eine Löschungs-Lücke hat, die größer ist als ein Durchlauf überqueren kann — zum Beispiel eine Spam-Säuberung, die den Großteil des Verlaufs entfernt hat und den neuesten Beitrag tausende IDs über dem letzten übrig gebliebenen Block isoliert —, stoppt die Suche unterhalb der echten letzten Nachricht. Es gibt keinen günstigen Weg, eine solche Lücke zu erkennen; nutze für diese Kanäle den manuellen Start-ID-Modus.
- **Sehr große Kanäle.** Kanäle, deren letzte Nachrichten-ID über 3 Millionen liegt, werden als „zu groß" gemeldet statt durchsucht; auch hier funktioniert der manuelle Start-ID-Modus.
- **Nicht existierende oder private Kanäle.** Telegram liefert für *jede* Nachrichten-ID eines nicht existierenden Kanals eine Vorschauseite, deshalb sehen alle Sonden „hoch" aus. Die Suche erkennt das mit einer Sentinel-Sonde auf einer ID, die kein realer Kanal haben kann, und meldet, dass der Kanal nicht gefunden wurde.

## Technologien

- Nutzt Telegrams öffentliche Widget-API, die keinen Sperren unterliegt
- Dynamisches Laden von Beiträgen in umgekehrter chronologischer Reihenfolge
- Automatisches Erkennen und Entfernen gelöschter Beiträge
- Einzelne HTML-Datei ohne Abhängigkeiten (Vanilla JS/CSS), als PWA installierbar

## Grenzen

- Funktioniert nur mit öffentlichen Kanälen
- Bei langsamen Internetverbindungen kann es Probleme geben.
- Manche sehr alten Beiträge laden möglicherweise nicht
- Kein Medien-Download möglich
- Kanäle mit extrem starken Löschungen (z. B. Spam-Säuberungen, die mehr als die Hälfte aller Nachrichten entfernen) können die automatische Suche aushebeln; nutze dort den manuellen Start-ID-Modus

## Lizenz

MIT-Lizenz - frei für private und kommerzielle Nutzung

---

**[README](https://franbarinstance.github.io/Telegram-Ban-Bypass/)** | **[Repository](https://github.com/FranBarInstance/Telegram-Ban-Bypass)** | **[Live-Web-Version](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**
