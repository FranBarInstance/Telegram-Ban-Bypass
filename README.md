# Telegram Ban Bypass

**Read in:** **English** | [Español](README.es.md) | [Русский](README.ru.md) | [Português](README.pt.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [Nederlands](README.nl.md)

## Overview

An enhanced web-based tool that lets you view content from any public Telegram channel—even if your account is banned in that particular channel. Includes performance optimizations and upgraded features.

**Live Demo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Installation

No installation required. You can:
1. Use the **[live web version](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**, or
2. Download the [single HTML file](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html) and open it in any browser

## Features

- **No login required** - No Telegram account needed to read channels
- **Gap-tolerant multi-pass search** - Finds the latest post even across deleted-message gaps
- **Resume where you left off** - Revisiting a channel opens instantly from the saved last ID; a stopped search saves its progress and the next search continues from it, and "Search again" forces a fresh search
- **Check for new messages** - The next posts appear instantly while the check keeps running in the background; manual button, optional auto-check timer, and an extended check with a configurable limit (up to 1000 posts ahead) that jumps larger gaps
- **Manual Start ID mode** - For channels where the automatic search struggles, start from a known message ID
- **Real-Time Feedback** - Shows search progress
- **Light & dark themes, 9 languages** - Follows system preferences, installable as a PWA
- **Mobile Optimized** - Works on all devices
- **No Installation** - Runs directly in browser

## How It Works

This tool uses the [API Telegram Widgets](https://core.telegram.org/widgets/post), which is designed to embed specific Telegram posts.

In Telegram channels and groups, message IDs are sequential. This means that if you know the ID of the latest post, you can display any number of previous messages using Telegram’s post widget.

#### The Challenge: Finding the Last Message ID

The main obstacle is determining the most recent message ID in a channel or group. While Telegram’s official APIs could provide this data, they come with limitations:

- Rate limits restrict frequent queries.
- CORS restrictions make client-side JavaScript implementation difficult.

#### The Solution: A Widget-Based Workaround

To bypass these limitations and avoid relying on an API, this tool uses Telegram’s post widget to detect the latest message. A *probe* loads the widget for a guessed message ID in a hidden container and reads the resulting iframe height:

- Tall iframe (resized by the embed) → the message exists.
- Thin iframe → Telegram rendered its "post not found" page: the message does not exist.
- Default ~150 px iframe (never resized) → ambiguous: the embed request was throttled or the channel itself does not exist. Ambiguous answers are retried once before being counted as missing.

Detecting a message this way never reads the widget's content (CORS prevents it) — only the iframe's size.

With existence detection in place, the search works in passes of decreasing resolution, tolerating gaps of deleted messages:

1. Anchor grid – A small grid of probe IDs finds a message known to exist.
2. Upward sweep – Coarse probes (100k steps) bracket the region above the last existing message.
3. Refinement – Successive passes at 10k, 1k, 100 and 10 narrow the region.
4. Final scan – A resolution-1 scan pins down the exact last message ID.

Each pass walks forward and stops after a streak of consecutive misses (10 by default), which is what lets it jump over deletion gaps: at the 1k pass it can cross a gap of up to ~10,000 deleted messages, at the 100 pass ~1,000, and so on. Probes run in parallel batches of 3. A Stop button aborts the search at any moment; the highest ID verified so far is saved, and the next search of that channel continues from it instead of starting over.

#### Why the Search Can Be Slow

Every probe is a real embed request to t.me, and a single answer takes roughly 0.1–1.5 seconds. A full search costs around 150–250 probes, so it usually takes tens of seconds. Two things make it slower:

- **Telegram rate-limiting.** After many requests, t.me starts dropping embed responses (the ambiguous ~150 px case above). Probes then take the full wait plus a retry, and the whole search can stretch to minutes. The limits are per IP and lift on their own after a while.
- **Deleted-message gaps.** Larger gaps force more refinement probes before the streak threshold is reached.

Revisiting a channel you already opened is instant: the last message ID is stored and reused, with zero probes. "Check for new messages" then only works on the few IDs above it: the next ten IDs are rendered in the feed right away (nonexistent posts hide themselves), so anything new shows up at once while the scan keeps determining the real last message in the background. Those ten embeds double as the existence probes for their IDs, so the check costs no extra requests.

#### Known Search Problems

- **Heavy-deletion channels.** If a channel has a deletion gap larger than a pass can cross — e.g. a spam purge that removed most of the history, leaving the newest post isolated thousands of IDs above the last surviving block — the search stops below the true last message. There is no cheap way to detect such a gap; use manual Start ID mode for these channels.
- **Very large channels.** Channels whose last message ID is beyond 3 million are reported as "too large" instead of being searched; again, manual Start ID mode works there.
- **Non-existent or private channels.** Telegram serves a preview page for *every* message ID of a channel that doesn't exist, so all probes look "tall". The search detects this with a sentinel probe at an ID no real channel can have, and reports that the channel was not found.

## Technologies

- Using Telegram's public widget API which isn't subject bans
- Dynamically loading posts in reverse chronological order
- Automatically detecting and removing deleted posts
- Single dependency-free HTML file (vanilla JS/CSS), installable as a PWA

## Limitations

- Only works with public channels
- There may be issues with slow internet connections.
- Some very old posts may not load
- No media download capability
- Channels with extremely heavy deletions (e.g. spam purges removing more than half of all messages) can defeat the automatic search; use manual Start ID mode there

## License

MIT License - Free for personal and commercial use
