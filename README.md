# Telegram Ban Bypass Tool

## Overview
An enhanced client-side web tool that allows users to view content from any public Telegram channel, even if the channel is banned or restricted. The tool now includes improved features and performance optimizations.

**Live Demo:** [DEMO](https://franbar1966.github.io/Telegram-Ban-Bypass/public/)

## Installation
No installation required. You can:
1. Use the **[live web version](https://franbar1966.github.io/Telegram-Ban-Bypass/public/)**, or
2. Download the [single HTML file](https://github.com/FranBar1966/Telegram-Ban-Bypass/blob/master/public/index.html) and open it in any browser

## Key Improvements
- 🚀 **Faster loading** with enhanced proxy rotation system
- 📋 **Recent channels history** for quick access
- 💾 **Smart caching** (1 minute cache duration)
- 🎨 **Improved UI/UX** with modern design
- 📱 **Better mobile responsiveness**
- 🔄 **Auto-retry mechanism** for failed requests
- 🔍 **Auto-complete** for channel names

## How It Works
The tool bypasses restrictions by:
- Using Telegram's public widget API which isn't subject to regional bans
- Employing multiple CORS proxies with automatic fallback
- Dynamically loading posts in reverse chronological order
- Automatically detecting and removing deleted posts
- Caching responses to improve performance

## Usage
1. Enter a Telegram channel name in any format:
   - Channel name (e.g., `ORANGETERAPY`)
   - @ format (e.g., `@ORANGETERAPY`)
   - Full URL (e.g., `https://t.me/ORANGETERAPY`)
2. Click "Load Channel"
3. Use "Load More Posts" to view older content
4. Access recently viewed channels from the history panel

## Enhanced Features
- **Proxy Rotation**: Automatically tries multiple proxies for reliability
- **Channel History**: Keeps track of recently accessed channels
- **Stats Dashboard**: Shows loaded posts, hidden posts, and latest post ID
- **Error Handling**: Automatic retries and clear error messages
- **Performance**: Optimized loading with delays between requests

## Technical Details
- **API Endpoint**: `https://tg.i-c-a.su/json/`
- **Frontend**: Pure HTML5, CSS3, and JavaScript (ES6)
- **Proxy Servers**:
  - `api.codetabs.com/v1/proxy`
  - `whateverorigin.org`
  - `api.allorigins.win`
  - `cors-anywhere.herokuapp.com`
- **Cache System**: 1-minute memory cache
- **Widget API**: Telegram Widget API (v22)

## Limitations
- Only works with public channels
- Loading speed depends on proxy performance
- Some very old posts may not load
- No media download capability
- History is not persisted after page refresh

## License
MIT License - Free for personal and commercial use
