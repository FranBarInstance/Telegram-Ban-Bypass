# Telegram Ban Bypass

**Langue:** [English](README.md) | [Español](README.es.md) | [Русский](README.ru.md) | [Português](README.pt.md) | [Deutsch](README.de.md) | **Français** | [Italiano](README.it.md) | [Polski](README.pl.md) | [Nederlands](README.nl.md)

## Présentation

Un outil web amélioré qui permet de consulter le contenu de n'importe quel canal public Telegram, même si votre compte est banni dans ce canal précis. Comprend des optimisations de performance et des fonctions améliorées.

**Démo en ligne :** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Installation

Aucune installation requise. Vous pouvez :
1. utiliser la **[version web en ligne](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**, ou
2. télécharger le **[fichier HTML unique](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html)** et l'ouvrir dans n'importe quel navigateur

## Fonctionnalités

- **Aucune connexion requise** - pas de compte Telegram nécessaire pour lire les canaux
- **Recherche multi-passe tolérante aux trous** - trouve la dernière publication même à travers des trous de messages supprimés
- **Reprise là où vous vous êtes arrêté** - rouvrir un canal s'affiche instantanément à partir du dernier ID enregistré ; une recherche interrompue enregistre sa progression et la recherche suivante reprend depuis ce point, tandis que « Rechercher à nouveau » revérifie à partir du dernier ID enregistré et le corrige si des messages ont été supprimés, en sondant des ID différents à chaque clic
- **Vérifier les nouveaux messages** - les publications suivantes apparaissent instantanément pendant que la vérification continue en arrière-plan ; bouton manuel, minuteur de vérification automatique optionnel et vérification étendue avec limite configurable (jusqu'à 1000 publications en avant) qui franchit les plus grands trous
- **Mode Start ID manuel** - pour les canaux où la recherche automatique peine, partez d'un ID de message connu
- **Retour en temps réel** - affiche la progression de la recherche
- **Thèmes clair et sombre, 9 langues** - suit les préférences système, installable en tant que PWA
- **Optimisé mobile** - fonctionne sur tous les appareils
- **Sans installation** - s'exécute directement dans le navigateur

## Comment ça marche

Cet outil utilise l'[API Telegram Widgets](https://core.telegram.org/widgets/post), conçue pour intégrer des publications Telegram précises.

Dans les canaux et groupes Telegram, les ID de messages sont séquentiels. Cela signifie que si vous connaissez l'ID de la dernière publication, vous pouvez afficher autant de messages précédents que vous voulez grâce au widget de publication de Telegram.

#### Le défi : trouver l'ID du dernier message

Le principal obstacle est de déterminer l'ID du message le plus récent d'un canal ou d'un groupe. Les API officielles de Telegram pourraient fournir ces données, mais elles ont des limites :

- les limites de débit restreignent les requêtes fréquentes ;
- les restrictions CORS rendent difficile l'implémentation en JavaScript côté client.

#### La solution : un contournement basé sur le widget

Pour contourner ces limites et ne pas dépendre d'une API, cet outil utilise le widget de publication de Telegram pour détecter le dernier message. Une *sonde* charge le widget pour un ID de message supposé dans un conteneur caché et lit la hauteur de l'iframe obtenue :

- iframe haute (redimensionnée par l'intégration) → le message existe.
- iframe fine → Telegram a affiché sa page « post not found » : le message n'existe pas.
- iframe par défaut d'environ 150 px (jamais redimensionnée) → ambigu : la requête d'intégration a été bridée ou le canal n'existe pas. Les réponses ambiguës sont réessayées une fois avant d'être comptées comme absentes.

Détecter un message ainsi ne lit jamais le contenu du widget (CORS l'empêche) — seulement la taille de l'iframe.

Une fois la détection d'existence en place, la recherche procède par passes de résolution décroissante, en tolérant les trous de messages supprimés :

1. Grille d'ancrage – une petite grille d'ID sondés trouve un message dont l'existence est certaine.
2. Balayage ascendant – des sondes grossières (pas de 100k) encadrent la région au-dessus du dernier message existant.
3. Raffinement – des passes successives à 10k, 1k, 100 puis 10 resserrent la région.
4. Scan final – un scan de résolution 1 détermine exactement l'ID du dernier message.

Chaque passe avance vers l'avant et s'arrête après une série d'échecs consécutifs (10 par défaut), ce qui lui permet de franchir les trous de suppression : à la passe 1k elle peut traverser un trou d'environ 10 000 messages supprimés, à la passe 100 environ 1 000, et ainsi de suite. Les sondes tournent en lots parallèles de 5. Un bouton Stop interrompt la recherche à tout moment ; l'ID le plus élevé vérifié est enregistré, et la recherche suivante de ce canal reprend depuis cet ID au lieu de repartir de zéro.

#### Pourquoi la recherche peut être lente

Chaque sonde est une vraie requête d'intégration vers t.me, et une seule réponse prend environ 0,1 à 1,5 seconde. Une recherche complète coûte environ 150 à 250 sondes, elle prend donc généralement plusieurs dizaines de secondes. Deux choses la ralentissent :

- **La limitation de débit de Telegram.** Après beaucoup de requêtes, t.me commence à laisser tomber les réponses d'intégration (le cas ambigu d'environ 150 px décrit plus haut). Les sondes consomment alors toute l'attente plus une nouvelle tentative, et toute la recherche peut s'étirer sur plusieurs minutes. Les limites sont par IP et se lèvent d'elles-mêmes au bout d'un moment.
- **Les trous de messages supprimés.** Des trous plus grands imposent plus de sondes de raffinement avant que le seuil de série soit atteint.

Rouvrir un canal déjà ouvert est instantané : l'ID du dernier message est enregistré et réutilisé, avec zéro sonde. « Vérifier les nouveaux messages » ne travaille alors que sur les quelques ID au-dessus de lui : les dix ID suivants sont affichés immédiatement dans le fil (les publications inexistantes se masquent d'elles-mêmes), donc toute nouveauté apparaît d'un coup pendant que le scan continue de déterminer le vrai dernier message en arrière-plan. Ces dix intégrations servent aussi de sondes d'existence pour leurs ID, donc la vérification ne coûte aucune requête supplémentaire.

#### Problèmes connus de recherche

- **Canaux à suppressions massives.** Si un canal présente un trou de suppression plus grand qu'une passe ne peut en franchir — par exemple une purge de spam qui a supprimé l'essentiel de l'historique, laissant la publication la plus récente isolée des milliers d'ID au-dessus du dernier bloc survivant —, la recherche s'arrête en dessous du vrai dernier message. Il n'y a pas de moyen peu coûteux de détecter un tel trou ; utilisez le mode Start ID manuel pour ces canaux.
- **Canaux très volumineux.** Les canaux dont le dernier ID de message dépasse 3 millions sont signalés comme « trop volumineux » au lieu d'être recherchés ; là encore, le mode Start ID manuel fonctionne.
- **Canaux inexistants ou privés.** Telegram sert une page d'aperçu pour *chaque* ID de message d'un canal qui n'existe pas, donc toutes les sondes paraissent « hautes ». La recherche le détecte grâce à une sonde sentinelle sur un ID qu'aucun canal réel ne peut avoir, et indique que le canal est introuvable.

## Technologies

- Utilisation de l'API publique des widgets de Telegram, qui n'est pas soumise aux bannissements
- Chargement dynamique des publications en ordre chronologique inverse
- Détection et suppression automatiques des publications supprimées
- Fichier HTML unique sans dépendance (JS/CSS vanilla), installable en tant que PWA

## Limites

- Ne fonctionne qu'avec les canaux publics
- Des problèmes peuvent survenir avec les connexions internet lentes.
- Certaines publications très anciennes peuvent ne pas se charger
- Pas de téléchargement de médias
- Les canaux aux suppressions extrêmement massives (par exemple des purges de spam supprimant plus de la moitié des messages) peuvent mettre la recherche automatique en échec ; utilisez le mode Start ID manuel dans ce cas

## Licence

Licence MIT - libre pour un usage personnel et commercial

---

**[README](https://franbarinstance.github.io/Telegram-Ban-Bypass/)** | **[Dépôt](https://github.com/FranBarInstance/Telegram-Ban-Bypass)** | **[Version web en ligne](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**
