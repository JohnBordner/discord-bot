# Discord Band Bot

A simple Discord bot built with **discord.js (v14+)**, written using **ES Modules (ESM)** syntax. This bot was built to help manage and perform administrative tasks in my band's discord server. It is still a work in progress.

## Features
- Slash commands using Discord's interactions API
- ESM-based project (`"type": "module"`)
- Loads data dynamically from `data.json`
- Easy setup with `.env` configuration

## Requirements
- Node.js v18+ (v20+ recommended)
- A Discord Application & Bot Token  
  Create one at [Discord Developer Portal](https://discord.com/developers/applications)

## Setup

1. Clone the repository
   ```bash
   git clone https://github.com/JohnBordner/discord-bot.git
   cd discord-bot
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```env
   DISCORD_TOKEN=your-bot-token-here
   CLIENT_ID=your-application-id-here
   GUILD_ID=your-test-server-id-here
   ```

4. (Optional) Add your data file  
   Create a `data.json` file in the root directory:
   ```json
   [
     "Song 1",
     "Song 2",
     "Song 3",
     "Song 4",
     "Song 5",
     "Song 6",
     "Song 7",
     "Song 8",
     "Song 9",
     "Song 10"
   ]
   ```

## Commands

### `/setlist`
Replies with the current setlist from `data.json`.

## Deploy Slash Commands
Deploys your commands to your test server (guild):

```bash
node deploy-commands.js
```

Expected output:
```
Started refreshing 1 application (/) command.
Successfully reloaded 1 application (/) command.
```

## Run the Bot
Start the bot:

```bash
node index.js
```

Expected output:
```
Ready! Logged in as YourBotName#1234
```

## File Structure
```
discord-bot/
├── commands/
│   └── utility/
│       └── setlist.js
├── data.json
├── deploy-commands.js
├── index.js
├── .env
└── package.json
```

## Tips
- Make sure your bot is invited to your server with the right scopes:
  ```
  https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&scope=bot%20applications.commands
  ```
- Re-run `node deploy-commands.js` after adding or renaming slash commands.
- Keep your `.env` file private — never commit it to GitHub.


## Roadmap

- More administrative commands, such as ones to edit the setlist
- Google Drive API integration to help manage recordings


## License
This project is licensed under the MIT License.
