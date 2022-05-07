/*
YES I KNOW MY CODE IS NOT PERFECT
*/
const { Client, Intents } = require("discord.js");
const config = require("./config/config.json");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!"); // Logs when the bot is ready
  client.user.setStatus('available')
  client.user.setActivity("Learning from humans")
  console.log("scloud active")
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return; // If the message is from a bot, return.

  // Nothing personal here, keep scrolling
  if (message.content.toLowerCase().includes("sacul is amazing")) {
    message.react("💯");
    message.reply("I totally agree with you.");
  }
  
  if (message.channel.id != config.channel) return; // If the message is not in the right channel, return.

  // Here we got every trigger words for every bugs/issues solution
  const triggerWordsSWR = ["something went wrong", "smthing went wrong", "tried to sync", "can't sync", "sync error", "cant sync"]; //Something Went Wrong
  const triggerWordsCNIS = ["clock not in sync", "clock not synced", "clock sync error", "clock error"]; //Clock Not In Sync
  const triggerWordsTMR = ["too many request", "to many request", "too many requests", "to many requests"]; //Too Many Requests
  const triggerWordBAWF = ["my farm is grey", "grey farm", "black and white farm", "no color", "no colors", "unverified farm", "farm is unverified", "verify my farm"]; //Black and White Farm
  const triggerWordBF = ["blacklisted farm", "blacklisted account", "blacklisted opensea", "farm blacklisted", "goblin detected", "goblin farm", "goblin detect"]; //Blacklisted Farm
  const triggerWordWEB3 = ["web3 error", "wallet not detected", "can't find wallet", "error web3"]; //Web3 Error
  const triggerWordHW = ["wallet hacked", "wallet comprised", "account hacked", "account compromised", "wallet stolen", "account stolen", "hacked wallet", "hacked account"]; //Hacked Wallet
  const triggerWordSR = ["cant migrate", "can't migrate", "supply reach", "supply reached", "want to migrate", "want to create"]; //Supply Reached
  const triggerWordWS = ["sfl lost", "sfl disappear","item lost", "item disappear", "land reset", "farm reset", "i lost"]; //Withdraw Lost

  // Something Went Wrong Reply
  for (var i = 0; i < triggerWordsSWR.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordsSWR[i])) {
      message.react('👀');
      message.reply({ embeds: [{
        type: "rich",
        title: `🔴 Error: \"Something Went Wrong\" `,
        description: "This error can mean a lot, at first, try the basic troubleshooting ways\n\n`1. Sync your device clock.\n2. Restart your device and try again.\n3. Try to play with a different browser.\n4. Try to play with a different device (PC, Mobile, Laptop).\n5. Make sure you are using the right network , Configure Polygon network again.\n6. Clear all browser cache and try again later.\n7. Reinstall metamask, make sure you have your private key before doing so!\n8. Don't use any VPN, turn off your adblock.`\n\n──────────────────────────────────────────────\n**This error occurs while syncing to the blockchain?**\nDid you buy resources on Rarible and transfer them to your farm? If yes, the problem comes from there, go to Menu > Settings > Reset Session and reset your session, do not try to sell or withdraw resources purchased on Rarible, they are bugged and lost.\n\n**This error occurs while withdrawing?**\nMake sure that you do not try to withdraw some resources with a decimal. For example, do not withdraw 5.6 wood but only 5\n\n**UI/UX Issue?**\nIf the UI does not display properly and/or the Captcha does not display, make sure you are not using an ad blocker or any other type of blocker. If you are using the Brave browser, disable the shiel in the upper right corner.\n\n❓**Still not working ? Wait for further assistance**",
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
      console.log("[INFO] User " + message.author.username + " has asked for a something went wrong message. Trigger: " + triggerWordsSWR[i]);
      break;
    }
  }

  // Clock Not In Sync Reply
  for (var i = 0; i < triggerWordsCNIS.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordsCNIS[i])) {
      message.react('👀');
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
      console.log("[INFO] User " + message.author.username + " has asked for a clock not in sync message. Trigger: " + triggerWordsCNIS[i]);
      break;
    }
  }

  // Too Many Request Reply
  for (var i = 0; i < triggerWordsTMR.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordsTMR[i])) {
      message.react('👀');
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
      console.log("[INFO] User " + message.author.username + " has asked for a too many request message. Trigger: " + triggerWordsTMR[i]);
      break;
    }
  }

  // Black and White Farm Reply
  for (var i = 0; i < triggerWordBAWF.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordBAWF[i])) {
      message.react('👀');
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
      console.log("[INFO] User " + message.author.username + " has asked for a grey farm message. Trigger: " + triggerWordBAWF[i]);
      break;
    }
  }

  // Blacklisted Farm Reply
  for (var i = 0; i < triggerWordBF.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordBF[i])) {
      message.react('👀');
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
      console.log("[INFO] User " + message.author.username + " has asked for a blacklisted farm message. Trigger: " + triggerWordBF[i]);
      break;
    }
  }

  // Web3 Error Reply
  for (var i = 0; i < triggerWordWEB3.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordWEB3[i])) {
      message.react('👀');
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
      console.log("[INFO] User " + message.author.username + " has asked for a web3 error message. Trigger: " + triggerWordWEB3[i]);
      break;
    }
  }

  // Hacked Waller Reply
  for (var i = 0; i < triggerWordHW.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordHW[i])) {
      message.react('👀');
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
      console.log("[INFO] User " + message.author.username + " has asked for a hacked wallet message. Trigger: " + triggerWordHW[i]);
      break;
    }
  }

  // Supply Reached Reply
  for (var i = 0; i < triggerWordSR.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordSR[i])) {
      message.react('👀');
      message.reply({ embeds: [{
        type: "rich",
        title: `🟠 Info: \"Supply Reached\" `,
        description: "The **100,000 Open Beta slots are full**, we are not accepting any new players for now.\n\n⚠️ In addition, the migration system is no longer available. If you were not able to migrate your old farms during the provided period, you will not be able to do it anymore.\n\nKeep an eye on <#897231700776615936> and our social networks to be notified when new spots are added.",
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
      console.log("[INFO] User " + message.author.username + " has asked for a supply reach message. Trigger: " + triggerWordSR[i]);
      break;
    }
  }

  // Withdraw Lost Reply
  for (var i = 0; i < triggerWordWS.length; i++) {
    if (message.content.toLowerCase().includes(triggerWordWS[i])) {
      message.react('👀');
      message.reply({ embeds: [{
        type: "rich",
        title: `🟠 Info: \"Items lost after withdrawing\" `,
        description: "**Any progress that has not been synchronized on chain before withdrawing will be lost**\n\nUnfortunately what you have lost cannot be recovered. Next time, pay more attention to what is written before doing anything.",
        color: 0x00FFFF,
        image: {
          url: `https://sacul.fr/img/warning-whithdraw.png`,
          height: 0,
          width: 0
        },
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
      console.log("[INFO] User " + message.author.username + " has asked for a withdraw lost message. Trigger: " + triggerWordWS[i]);
      break;
    }
  }

});

client.login(config.token);