const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');
const ms = require('ms');

module.exports = class TempmodCommand extends BaseCommand {
  constructor() {
    super('tempmod', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑I DONT HAVE PERMISSION TO USE THIS COMMAND🛑');

    
    const modRole = message.guild.roles.cache.get('820290190970585106');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let time = args[1];
    let reason = args.slice(2).join(" ");

    const tempmodEmbed = new discord.MessageEmbed()
      .setTitle(`Fuiste asignado como moderador en ${message.guild.name}🛑`)
      .addField(`Duracion ${time}`, `Razon: ${reason}`)
      .setColor('RANDOM')
      .setFooter('Ort Bot, desarrollado por bernardo paley')
      .setTimestamp();
      
      const staffPrefix = ' | TEMP MOD'
    const modfinishedEmbed = new discord.MessageEmbed()
      .setTitle(`Your moderator role finished at ${message.guild.name}`)
      .setFooter('Ort Bot, desarrolado por bernardo paley')
      .setColor('RANDOM');

    if (!args[0]) return message.channel.send('🛑You must mention a member to tempmute with a duration. \`¿tempmute @user time reason\`🛑');
    if (!mentionedMember) return message.channel.send('🛑I DONT FIND THE MEMBER🛑');
    if (!mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('🛑You cannot tempmute a member with the same or highest role as you.🛑');
    if (!time) return message.channel.send('🛑You must put a duration for the tempmute🛑');
    if (reason) reason = 'No reason given';

    await mentionedMember.roles.add(modRole).catch(err => console.log(err));
      await mentionedMember.send(tempmodEmbed).catch(err => console.log(err)); message.channel.send(`Mod added for ${time}`)
      await mentionedMember.setNickname(mentionedMember.user.username +   staffPrefix);
    
    setTimeout(async function () {
      await mentionedMember.roles.remove(modRole).catch(err => console.log(err)); message.channel.send('Mod removed')
      await mentionedMember.send(modfinishedEmbed).catch(err => console.log(err));
      await mentionedMember.setNickname(mentionedMember.user.username);
    }, ms(time));
    



  }
}