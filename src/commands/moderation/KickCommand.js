const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  

 async  run(client, message, args) {
   if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You dont have permissions to kick members")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given"
    const kickEmbed = new Discord.MessageEmbed()
    .setTitle(`You were kicked from ${message.guild.name} https://discord.gg/9bdVQRsbwK `)
    .setDescription(`Reason: ${reason}`)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter("Ort Bot, Desarrolado por Bernardo Paley (1E)")
    // ¿kick @user reason
    if (!args[0]) return message.channel.send("You need to state a user to kick. ¿kick @user reason.");
    if (!mentionedMember) return message.channel.send("The member mention its not in the server");
    if (!mentionedMember.kickable) return message.channel.send('I cant kick that user')
    try {
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log('i was unable to message the member');
    }

    try {
      await mentionedMember.kick(reason), message.channel.send("Succesfully kicked")
    } catch (err) {
      console.log(err)
      return message.channel.send("i was unable to kick the user")
    }
  }
}