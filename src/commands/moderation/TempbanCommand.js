const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = class TempbanCommand extends BaseCommand {
  constructor() {
    super('tempban', 'moderation', []);
  }

  async run (client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('🚫YOU CANT USE THIS COMMAND🚫')
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('🚫 I DONT HAVE PERMISSION TO USE THIS COMMAND 🚫')

    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(2).join(" ");
    let time = args[1];
    const banEmbed = new Discord.MessageEmbed()
    .setTitle(`🚫You have been tempbanned from ${message.guild.name} here is the invite link, you will able to join when your tempban finish. https://discord.gg/xgcwydb29S 🚫`)
    .addField(`reason: ${reason}`, `Duration: ${time}`)
    .setTimestamp()

    if (!args[0]) return message.channel.send('🚫You must mention a member🚫, remember, ¿tempban @user time');
    if (!mentionedMember) return message.channel.send('🚫The member its not in the server🚫');
    if (!mentionedMember.bannable) return message.channel.send('🚫 I cant ban this member 🚫');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send("🚫 The member that you want to ban havea higher role than me 🚫");
    if (!reason) reason = 'No reason given';
    if (!time) return message.channel.send('🚫 Please put a time for the tempban 🚫')

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    mentionedMember.ban({
      reason: reason
    }).catch(err => console.log(err)); message.channel.send(`${mentionedMember} banned`)

  setTimeout(async function () {
     await message.guild.fetchBans().then(async bans => {
       if (bans.size == 0) return message.channel.send('🚫 This guild dows not have any bans 🚫')
       let bannedUser = bans.find(b => b.user.id == mentionedMember.id)
       if (!bannedUser) return console.log('Member unbanned')
        await message.guild.members.unban(bannedUser.user, reason).catch(err => console.log(err))
        message.delete();
     })
  }, ms(time));
  }
} 