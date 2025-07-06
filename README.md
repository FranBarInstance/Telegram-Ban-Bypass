# Telegram Ban Bypass Tool

## Overview
A client-side web tool that allows users to view content from any public Telegram channel, even if the channel is banned or restricted in their region. The tool works by fetching posts through Telegram's widget system and displaying them directly in the browser.

**Live Demo:** [DEMO](https://franbar1966.github.io/Telegram-Ban-Bypass/public/)

## How It Works
The tool bypasses restrictions by:
- Using Telegram's public widget API which isn't subject to regional bans
- Employing CORS proxies to avoid access restrictions
- Dynamically loading posts in reverse chronological order
- Automatically detecting and removing deleted posts

## Installation
No installation required. You can:
1. Use the **[live web version](https://franbar1966.github.io/Telegram-Ban-Bypass/public/)** at the link above, or
2. Download the [single HTML](https://github.com/FranBar1966/Telegram-Ban-Bypass/blob/master/public/index.html) file and open it in any browser

## Usage
1. Enter a Telegram channel name in any of these formats:
   - Channel name (e.g., `ORANGETERAPY`)
   - @ format (e.g., `@ORANGETERAPY`)
   - Full URL (e.g., `https://t.me/ORANGETERAPY`)
2. Click "Load Channel"
3. Use "Load More Posts" to view older content

## Features
- Bypasses regional bans and restrictions
- No Telegram account required
- Works entirely client-side (no server needed)
- Lightweight (single HTML file)
- Automatic proxy fallback system
- Removes deleted posts automatically

## Technical Details
- Fetching the latest posts using an API https://tg.i-c-a.su/json/
- **Frontend:** Pure HTML/CSS/JavaScript
- **Proxies Used:**
  - Primary: whateverorigin.org
  - Fallback: api.allorigins.win
- **API:** Telegram Widget API (v22)

## Limitations
- Only works with public channels
- Loading speed depends on proxy performance
- Some very old posts may not load
- No media download capability

## License
MIT License - Free for personal and commercial use
