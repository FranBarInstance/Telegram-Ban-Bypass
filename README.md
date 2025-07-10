# Telegram Ban Bypass

## Overview
An enhanced client-side web tool that allows users to view content from any public Telegram channel, even if the channel is banned or restricted. The tool now includes improved features and performance optimizations.

**Live Demo:** [DEMO](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)

## Installation
No installation required. You can:
1. Use the **[live web version](https://franbarinstance.github.io/Telegram-Ban-Bypass/public/)**, or
2. Download the [single HTML file](https://github.com/franbarinstance/Telegram-Ban-Bypass/blob/master/public/index.html) and open it in any browser

## Features
- **Binary Search Algorithm** - Finds latest posts efficiently
- **Dual Loading Methods** - API or binary search
- **Smart Caching** - cache for fast reloads
- **Real-Time Feedback** - Shows search progress
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

To bypass these limitations and avoid relying on an API, this tool uses Telegram’s post widget to detect the latest message. The process works in two stages:

1. Estimating the message range – The tool checks for the existence of messages within a probable range.
2. Binary search – It then performs an efficient binary search to pinpoint the last available message.

#### Technical Limitation: Message Existence Verification

The algorithm cannot distinguish between:

- Non-existent message IDs (beyond valid range)
- Purged messages (deleted by admins/users)

This means in channels with substantial message deletions, the last-post detection may fail.

#### Bypassing CORS to Identify Deleted Telegram Messages

The last obstacle is detecting a non-existent message; it's not possible to access the Telegram widget's content due to CORS policies.

However, deleted messages have a pattern - the iframe where they reside is noticeably smaller and can be easily identified.

## Technologies
- Powered by: [telegram-channel-api](https://github.com/ArcInTower/telegram-channel-api)
- Using Telegram's public widget API which isn't subject bans
- Dynamically loading posts in reverse chronological order
- Automatically detecting and removing deleted posts
- Caching responses to improve performance

## Limitations
- Only works with public channels
- There may be issues with slow internet connections.
- Some very old posts may not load
- No media download capability
- History is not persisted after page refresh

## License
MIT License - Free for personal and commercial use
