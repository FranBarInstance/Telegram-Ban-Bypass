# Telegram Ban Bypass

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
- **Resume where you left off** - Revisiting a channel opens instantly from the saved last ID
- **Check for new messages** - Manual button, optional auto-check timer, and an extended check that jumps larger gaps
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

To bypass these limitations and avoid relying on an API, this tool uses Telegram’s post widget to detect the latest message. The search works in passes of decreasing resolution, tolerating gaps of deleted messages:

1. Anchor grid – A small grid of probe IDs finds a message known to exist.
2. Upward sweep – Coarse probes bracket the region above the last existing message.
3. Refinement – Successive passes at 10k, 1k, 100 and 10 narrow the region.
4. Final scan – A resolution-1 scan pins down the exact last message ID.

#### Bypassing CORS to Identify Deleted Telegram Messages

The last obstacle is detecting a non-existent message; it's not possible to access the Telegram widget's content due to CORS policies.

However, deleted messages have a pattern - the iframe where they reside is noticeably smaller and can be easily identified.

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
