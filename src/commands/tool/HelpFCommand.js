const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpFCommand extends BaseCommand {
  constructor() {
    super('helpF', 'tool', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑YOU DONT HAVE PERMISSION TO USE THIS COMMAND🛑');
    let reason = args.slice(1).join(" ");
    const estudianteenayudaRole = message.guild.roles.cache.get('820290190970585105');
    const memberRole = message.guild.roles.cache.get('820290190970585103');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const helpfinishedEmbed = new Discord.MessageEmbed()
      .setTitle(`AYUDA FINALIZADA  ${message.guild.name}`)
      .setDescription(`Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Ort Bot, Creado por Bernardo Paley");


    if (!args[0]) return message.channel.send('🛑\`¿unhelp @user reason\`🛑 ');
    if (!mentionedMember) return message.channel.send('🛑I dont find the member🛑');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('🛑You cannot unhelp yourself🛑')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('🛑You cannot unhelp me with my own command 🛑');
    if (!reason) reason = 'No reason given';
    if (mentionedMember.roles.cache.has(memberRole)) return message.channel.send('🛑This member, has already finished her/his help🛑');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('🛑You cannot unhelp someone with the same role or higher then you.🛑')


    await mentionedMember.send(helpfinishedEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(memberRole).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while tring to unhelp role to the member🛑')));
    await mentionedMember.roles.remove(estudianteenayudaRole).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while tring to unhelp role to the member🛑')));
    
    }
} 