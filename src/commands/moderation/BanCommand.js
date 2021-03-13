const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have permision to ban members ._. ")
   if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send ("I dont have permissions to ban members")

   let reason = args.slice(1).join(" ")
   const mentionedMember = message.mentions.members.first();
  

  if (!reason) reason = ('No reason given');
  if (!args[0]) return message.channel.send("You have to mention someone to ban. (remember, ¿ban @user reason)")
  if (!mentionedMember) return message.channel.send('I dont find the mentioned member :(');
  if (!mentionedMember.bannable) return message.channel.send('I cant ban that user')




  const banEmbed = new Discord.MessageEmbed() 
  .setTitle(`You have beem banned from ${message.guild.name}`)
  .setDescription(`Reason for being banned: ${reason}`)
  .setFooter(message.author.tag ,message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp();


  await mentionedMember.send(banEmbed).catch(err => console.log(err));
  await mentionedMember.ban({
    days: 7,
    reason: reason
  }).catch(err => console.log(err)).then(() => message.channel.send("Member banned" +  mentionedMember.user.tag))
  
  
  }
}