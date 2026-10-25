# Telegram Ban Bypass

**Lingua:** [English](README.md) | [Español](README.es.md) | [Русский](README.ru.md) | [Português](README.pt.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | **Italiano** | [Polski](README.pl.md) | [Nederlands](README.nl.md)

## Panoramica

Uno strumento web migliorato che consente di consultare i contenuti di qualsiasi canale pubblico di Telegram, anche se il tuo account è bannato in quel canale. Include ottimizzazioni delle prestazioni e funzionalità potenziate.

**Demo dal vivo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Installazione

Non serve installare nulla. Puoi:
1. usare la **[versione web dal vivo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**, oppure
2. scaricare il **[singolo file HTML](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** e aprirlo in qualsiasi browser

## Funzionalità

- **Niente login** - per leggere i canali non serve un account Telegram
- **Ricerca multi-pass tollerante ai buchi** - trova l'ultimo post anche attraverso buchi di messaggi eliminati
- **Riprende da dove eri** - riaprire un canale si apre istantaneamente dall'ultimo ID salvato; una ricerca interrotta salva il progresso e la ricerca successiva riparte da lì, mentre "Cerca di nuovo" ricontrolla dall'ultimo ID salvato, correggendolo se sono stati eliminati messaggi, sondando ID diversi a ogni clic
- **Controlla nuovi messaggi** - i post successivi appaiono subito mentre il controllo continua in background; pulsante manuale, timer di controllo automatico opzionale e un controllo esteso con limite configurabile (fino a 1000 post più avanti) che salta buchi più grandi
- **Modalità Start ID manuale** - per i canali dove la ricerca automatica si inceppa, parti da un ID di messaggio noto
- **Feedback in tempo reale** - mostra l'avanzamento della ricerca
- **Temi chiaro e scuro, 9 lingue** - segue le preferenze di sistema, installabile come PWA
- **Ottimizzato per mobile** - funziona su tutti i dispositivi
- **Senza installazione** - gira direttamente nel browser

## Come funziona

Questo strumento usa l'[API Telegram Widgets](https://core.telegram.org/widgets/post), progettata per incorporare post specifici di Telegram.

Nei canali e nei gruppi di Telegram gli ID dei messaggi sono sequenziali. Questo significa che se conosci l'ID dell'ultimo post, puoi mostrare qualsiasi numero di messaggi precedenti con il widget dei post di Telegram.

#### La sfida: trovare l'ID dell'ultimo messaggio

L'ostacolo principale è determinare l'ID del messaggio più recente in un canale o gruppo. Le API ufficiali di Telegram potrebbero fornire questi dati, ma hanno limiti:

- i rate limit restringono le query frequenti;
- le restrizioni CORS rendono difficile l'implementazione JavaScript lato client.

#### La soluzione: un aggiramento basato sul widget

Per aggirare questi limiti e non dipendere da un'API, questo strumento usa il widget dei post di Telegram per rilevare l'ultimo messaggio. Una *sonda* carica il widget per un ID di messaggio ipotizzato in un contenitore nascosto e legge l'altezza dell'iframe risultante:

- iframe alto (ridimensionato dall'embed) → il messaggio esiste.
- iframe sottile → Telegram ha renderizzato la sua pagina "post not found": il messaggio non esiste.
- iframe predefinito di ~150 px (mai ridimensionato) → ambiguo: la richiesta di embed è stata limitata oppure il canale non esiste. Le risposte ambigue vengono riprovate una volta prima di essere conteggiate come mancanti.

Rilevare un messaggio in questo modo non legge mai il contenuto del widget (CORS lo impedisce): solo la dimensione dell'iframe.

Ottenuta la rilevazione dell'esistenza, la ricerca procede in passate a risoluzione decrescente, tollerando buchi di messaggi eliminati:

1. Griglia di ancoraggio – una piccola griglia di ID sonda trova un messaggio noto per esistere.
2. Scansione verso l'alto – sonde grossolane (passi da 100k) delimitano la regione sopra l'ultimo messaggio esistente.
3. Raffinamento – passate successive a 10k, 1k, 100 e 10 restringono la regione.
4. Scansione finale – una scansione a risoluzione 1 fissa l'ID esatto dell'ultimo messaggio.

Ogni passata avanza in avanti e si ferma dopo una serie di errori consecutivi (10 per impostazione predefinita), ed è questo che le permette di saltare i buchi di eliminazione: alla passata da 1k può attraversare un buco di fino a ~10.000 messaggi eliminati, alla passata da 100 circa ~1.000, e così via. Le sonde girano in batch paralleli da 5. Un pulsante Stop interrompe la ricerca in qualsiasi momento; l'ID più alto verificato fin lì viene salvato, e la ricerca successiva di quel canale riparte da lì invece di ricominciare da capo.

#### Perché la ricerca può essere lenta

Ogni sonda è una vera richiesta di embed a t.me, e una singola risposta richiede più o meno 0,1-1,5 secondi. Una ricerca completa costa circa 150-250 sonde, quindi di solito richiede decine di secondi. Due cose la rallentano:

- **Rate limiting di Telegram.** Dopo molte richieste, t.me inizia a scartare le risposte di embed (il caso ambiguo dei ~150 px di cui sopra). Le sonde consumano allora l'attesa completa più un nuovo tentativo, e l'intera ricerca può allungarsi a minuti. I limiti sono per IP e si alzano da soli dopo un po'.
- **Buchi di messaggi eliminati.** Buchi più grandi impongono più sonde di raffinamento prima che la soglia della serie venga raggiunta.

Riaprire un canale già aperto è istantaneo: l'ID dell'ultimo messaggio è salvato e riutilizzato, con zero sonde. "Controlla nuovi messaggi" allora lavora solo sui pochi ID sopra di esso: i dieci ID successivi vengono renderizzati subito nel feed (i post inesistenti si nascondono da soli), quindi qualsiasi novità appare subito mentre la scansione continua a determinare il vero ultimo messaggio in background. Quei dieci embed fungono anche da sonde di esistenza per i loro ID, quindi il controllo non costa richieste extra.

#### Problemi noti di ricerca

- **Canali con eliminazioni massicce.** Se un canale ha un buco di eliminazione più grande di quelli che una passata può attraversare - ad esempio una pulizia anti-spam che ha rimosso la maggior parte della cronologia, lasciando il post più recente isolato migliaia di ID sopra l'ultimo blocco superstite - la ricerca si ferma sotto il vero ultimo messaggio. Non c'è modo economico di rilevare un buco del genere; usa la modalità Start ID manuale per questi canali.
- **Canali molto grandi.** I canali il cui ultimo ID di messaggio supera i 3 milioni vengono segnalati come "troppo grande" invece di essere cercati; anche qui, la modalità Start ID manuale funziona.
- **Canali inesistenti o privati.** Telegram serve una pagina di anteprima per *ogni* ID di messaggio di un canale che non esiste, quindi tutte le sonde sembrano "alte". La ricerca lo rileva con una sonda sentinella su un ID che nessun canale reale può avere, e segnala che il canale non è stato trovato.

## Tecnologie

- Uso dell'API pubblica dei widget di Telegram, che non è soggetta ai ban
- Caricamento dinamico dei post in ordine cronologico inverso
- Rilevamento e rimozione automatici dei post eliminati
- Singolo file HTML senza dipendenze (JS/CSS vanilla), installabile come PWA

## Limitazioni

- Funziona solo con canali pubblici
- Potrebbe dare problemi con connessioni internet lente.
- Alcuni post molto vecchi potrebbero non caricarsi
- Nessuna possibilità di scaricare media
- Canali con eliminazioni estremamente massicce (ad esempio pulizie anti-spam che rimuovono più della metà di tutti i messaggi) possono vanificare la ricerca automatica; usa la modalità Start ID manuale in quei casi

## Licenza

Licenza MIT - libera per uso personale e commerciale

---

**[README](https://franbarinstance.github.io/Telegram-Ban-Bypass/)** | **[Repository](https://github.com/FranBarInstance/Telegram-Ban-Bypass)** | **[Versione web dal vivo](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**
