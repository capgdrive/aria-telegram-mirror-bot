module.exports = Object.freeze({
  TOKEN: '906641166:AAFKAAQNYcLnHOxMJqLkBEnkKyZR-cELGq8',
  ARIA_SECRET: 'somebylongbykey',
  ARIA_DOWNLOAD_LOCATION: '/app (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/app', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '13d-SS4kev97DWlGX9WPr9eqHiv6X39At',
  SUDO_USERS: [825558831,  839423892],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [1001441510922],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['mndf66@gmail.com', 'capgdriveheroku@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: false
});
