/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['260981593368','27681866256'], // Add your number without + or spaces (e.g., 260573533041)
    ownerName: ['Deekaytee Bot Mini', 'Impoossible'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Deekaytee Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFmOYiCER0xCIKAu0FFUU35qGAEkpuZQEqTPjvE9jTM/OwO9v7VpcTWXky89Q3UJS4Qg5qgfoNEIqvsEb9sm4JAioYN6cTomAAIlhDoILcYDVLmsRx22oEub6d3bTJsDu7CW+1RTablHtR8zPjuB++gscAkCbIcPgHwApy7W6FubFCZEQO7bEuJosRJySSVu59/xIt5aEfoEs2tV7Bo0eEmOIinpIE5YjCzEHtCmL6OfqVnXXMgVV0IVREz5mP7JjhGSU+o7mEL65FxvEFp8Y25j9JnxhLE/vHM+tmiX5bx0mz2O/GnXfJ56MF3Qw7yJdW7sttUb7Tr3BcoMiKUFHjuv287lZE9jBbdFOXWYT7IKL3C2/x2qR7ExcpSWQll0ounrjG/HPEJ7tDCBdw0lFpa4iKOVwy3e7MvHgj3iLtxBCOylJj3rauXv1OfEU/spL+H93DVar5s0PGkCBYS4aXXMKM95rYv3ETe7OMbMYs+a6Svdkn6YfktprGjHXBjbMVjozTeNlOuCCjCeeGOTWWSruwji9DkZv/og/rhv6J5WzsXkgzR3m7TAPlmsiSR7uZUOn2pjTz+Jx3d2zZ6Wl11G54tj7Lwrx2hsSe6ziQvIy75FhZ654THufYyMnskLJMcnt9dpSi1oqAyj0GgKIYVzWFNS6L/ozn5AGA0XWDQorqp7xATIYv3Mu4iUbjVVDrq0OhSUPdFmityYkMu5AJr0eSs29UfgUDQGgZoqpC0QxXdUnbOaoqGKMKqH9/HYAC3et34/rnBG4ATphWtVc0JCth9OHqxyUMw7Ip6k1bhHq/QBSo7K9jVNe4iKtex6aANEzwFekJrCugnmBWoZ8dIooioNa0QT+nVi+jXnh/7ez18XANBiB/GoIjoAJ+JMmcLEm8KKmc+Ff15dajQkK+FKgGA5A9qzheFEYKy7OywgrisK/sLx4/CfZ4EaohziqgAn3FSFf25vIrc9W5h4OGNc3RtF60j4Y+kvGuPL92xztvHhwdB8XOLHCLap/tFnGWm5s3pRUS8wbtSHyLsPdPIEAFR/PkNVu6b9k1a0eB2HR75y5yp3q9YsS1YZZXBD2rJKEo4OWuuYjlraWThWboxT1d3mmO7ku5qxa+gALTd0ypGbV6H6MBiNAVh+j3x4rpeEOOFnHnrmGOyWpaofIuHritjNrpRQo4K3W3m1DcNRNbN9Np6ju3eK+3b+IuSC+dU5Yvlii0WYslbr9tD8uEqc7xe2afM5P9+KvwM029Vf32hNFz9AvYG/if1r3z7gPGPga/Qfz4S/5lHsdR6mm73cTkN7go9YRn7ZFBdtuDfUxS/BLWw3VlYh9thEMGHo+vA0AyWJ9KmgMVwCKiJY7AANCy6RNrFafyD4/pmmWN3XjTN57BqtZ+TcEW56iqYU6Ayo1GvCAKI3H0XrWiJZnBKgEqENbKUVDA4zvKIEnIUwcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/impossible3112-kali/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Deekaytee Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: true,
    autoBio: false,
    autoSticker: true,
    autoReact: true,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Zambia/Lusaka',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
