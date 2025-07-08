# Telegram Ban Bypass

## Overview
An enhanced client-side web tool that allows users to view content from any public Telegram channel, even if the channel is banned or restricted. The tool now includes improved features and performance optimizations.

**Live Demo:** [DEMO](https://franbar1966.github.io/Telegram-Ban-Bypass/public/)

## Installation
No installation required. You can:
1. Use the **[live web version](https://franbar1966.github.io/Telegram-Ban-Bypass/public/)**, or
2. Download the [single HTML file](https://github.com/FranBar1966/Telegram-Ban-Bypass/blob/master/public/index.html) and open it in any browser

## Features
 **Binary Search Algorithm** - Finds latest posts efficiently
 **Dual Loading Methods** - API or binary search
 **Smart Caching** - cache for fast reloads
 **Real-Time Feedback** - Shows search progress
 **Mobile Optimized** - Works on all devices
 **No Installation** - Runs directly in browser

## How It Works
The tool bypasses restrictions by:
- Powered by: [telegram-channel-api](https://github.com/ArcInTower/telegram-channel-api)
- Using Telegram's public widget API which isn't subject bans
- Dynamically loading posts in reverse chronological order
- Automatically detecting and removing deleted posts
- Caching responses to improve performance

## Limitations
- Only works with public channels
- Loading speed depends on proxy performance
- Some very old posts may not load
- No media download capability
- History is not persisted after page refresh

## License
MIT License - Free for personal and commercial use
