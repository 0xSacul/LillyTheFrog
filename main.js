const { Client, Intents } = require("discord.js");
const config = require("./config/config.json");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!"); // Logs when the bot is ready
  client.user.setStatus('available')
  client.user.setActivity("Learning from humans")
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return; // If the message is from a bot, return.
  if (message.channel.id != config.channel) return; // If the message is not in the right channel, return.

  // Here we got every trigger words for every bugs/issues solution
  const triggerWordsSWR = ["something went wrong", "smthing went wrong", "tried to sync", "can't sync", "sync error"]; //Something Went Wrong
  const triggerWordsCNIS = ["clock not in sync", "clock not synced", "clock sync error", "clock error"]; //Clock Not In Sync
  const triggerWordsTMR = ["too many request", "to many request", "too many requests", "to many requests"]; //Too Many Requests
  const triggerWordBAWF = ["my farm is grey", "grey farm", "black and white farm"]; //Black and White Farm
  const triggerWordBF = ["blacklisted farm", "blacklisted account", "blacklisted opensea", "farm blacklisted", "goblin detected", "goblin farm", "goblin detect"]; //Blacklisted Farm
  const triggerWordWEB3 = ["web3 error", "wallet not detected", "can't find wallet", "error web3"]; //Web3 Error
  const triggerWordHW = ["wallet hacked", "wallet comprised", "account hacked", "account compromised", "wallet stolen", "account stolen", "hacked wallet", "hacked account"]; //Hacked Wallet

  // Something Went Wrong Reply
  for (var i = 0; i < triggerWordsSWR.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordsSWR[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🔴 Error: \"Something Went Wrong\" `,
        description: "This error can mean a lot, at first, try the basic troubleshooting ways\n\n`1. Sync your device clock.\n2. Restart your device and try again.\n3. Try to play with a different browser.\n4. Try to play with a different device (PC, Mobile, Laptop).\n5. Make sure you are using the right network , Configure Polygon network again.\n6. Clear all browser cache and try again later.\n7. Reinstall metamask, make sure you have your private key before doing so!\n8. Don't use any VPN, turn off your adblock.`\n\n──────────────────────────────────────────────\n**This error occurs while syncing to the blockchain?** \nDid you buy resources on Rarible and transfer them to your farm? If yes, the problem comes from there, go to Menu > Settings > Reset Session and reset your session, do not try to sell or withdraw resources purchased on Rarible, they are bugged and lost.\n\n**This error occurs while withdrawing?**\nMake sure that you do not try to withdraw some resources with a decimal. For example, do not withdraw 5.6 wood but only 5\n\n❓**Still not working ? Wait for further assistance**",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

  // Clock Not In Sync Reply
  for (var i = 0; i < triggerWordsCNIS.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordsCNIS[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🔴 Error: \"Clock Not In Sync\" `,
        description: "This error occurs when your clock is not properly synchronized. You will have to do it, here is how: \n\n`1. Open Settings on your Windows PC\n2. Click on Time & Language\n3. Click on Date & Time\n5. Under \"Synchronize your clock\" click the Sync now button`\n\nHere is a video on how to \"Hard Synchronize your clock\" if the above solution didn't work:\nhttps://youtube.com/watch?v=6a3vgVhgb0g\n\n❓**Still not working ? Wait for further assistance**",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

  // Too Many Request Reply
  for (var i = 0; i < triggerWordsTMR.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordsTMR[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🔴 Error: \"Too Many Requests\" `,
        description: "This error popups when you try to make too many actions in a very small time frame. \n\nPlease try to wait a few hours before syncing again, each try increases the timeout so please don't retry 1000 times in a row 😅\n\nMake sure you don't have any captcha programs on your pc and you are not using any bots/scripts to speed up things.\n\n❓**Still not working ? Wait for further assistance**",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

  // Black and White Farm Reply
  for (var i = 0; i < triggerWordBAWF.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordBAWF[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🟠 Info: \"Grey Farm\" `,
        description: "**This is not a error.**\n\nA new farm is automatically displayed in grey for a **30 day verification period** from the date of its creation.\n\nOnce the 30 days have passed, refresh the meta data of your NFT on OpenSea and your farm will be colored.",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

  // Blacklisted Farm Reply
  for (var i = 0; i < triggerWordBF.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordBF[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🔴 Error: \"Blacklisted Farm\" `,
        description: "Oh no, you've been blacklisted...\n\nIf you did not use any automation mechanism (bot, auto click, fast click, ...) \n\nAnd you don't play on multiple farms, fill in the form below. The team will deal with your case in the next few days.\n\nhttps://forms.gle/9nozKJpnc8PEeoov8 (Fill out this form only once, even if you have been waiting for a long time)",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

  // Web3 Error Reply
  for (var i = 0; i < triggerWordWEB3.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordWEB3[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🔴 Error: \"Web3\" `,
        description: "Make sure your Metamask is **unlocked and active**\n\nIf you are playing on your phone, use the integrated browser in the Metamask app to play.\n\nAvailable for [iOS](https://metamask.app.link/skAH3BaF99) and [Android](https://metamask.app.link/bxwkE8oF99)",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

  // Hacked Waller Reply
  for (var i = 0; i < triggerWordHW.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordHW[i])) {
      message.reply({ embeds: [{
        type: "rich",
        title: `🟠 Info: \"Hacked Wallet\" `,
        description: "We are sorry to hear that, but unfortunately there is nothing we can do on our side.\n\nYou can still try to send the NFT of your farm to a new wallet if you still have access to it, here is how to do it:\n\n`1. Go to https://opensea.io/account\n2. Click on your farm NFT\n3. Click on the \"Transfer\" button upper right corner\n4. Follow the instructions`",
        color: 0x00FFFF
      }],
      components: [{
        type: 1,
          components: [
          {
            style: 5,
            label: `Our Knowledge Base`,
            url: `https://sunflowerland.freshdesk.com/support/solutions`,
            disabled: false,
            type: 2
          }
        ]}],
      });
      break;
    }
  }

});

client.login(config.token);