const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ModoutCommand extends BaseCommand {
  constructor() {
    super('modout', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('๐NO TENES PERMISO PARA USAR ESTE COMANDO๐');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('๐NO TENGO PERMISO PARA USAR ESTE COMANDO๐');
    let reason = args.slice(1).join(" ");
    const staffRole = message.guild.roles.cache.get('820290190970585106');
    const memberRole = message.guild.roles.cache.get('820290190970585103');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const staffoutEmbed = new Discord.MessageEmbed()
      .setTitle(`Ya no sos staff en ${message.guild.name}`)
      .setDescription(`Razon: ${reason}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Ort Bot, Desarrollado por Bernardo Paley")
    const sEmbed = new Discord.MessageEmbed()
      .setTitle('staff removed');


    if (!args[0]) return message.channel.send('๐\`o!modout @user reason\`๐ ');
    if (!mentionedMember) return message.channel.send('๐No encuentro el miembro๐');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('๐No podes sacarte staff vos mismo ya lo sos xDD๐')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('๐No me puedo sacar staff a mi mismo ._.๐');
    if (!reason) reason = 'No reason given';
    if (mentionedMember.roles.cache.has(memberRole)) return message.channel.send('๐Este miembro ya no es staff๐');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('๐You cannot extract staff role someone with the same role or higher then you.๐')

    message.channel.send(sEmbed)
    await mentionedMember.send(staffoutEmbed).catch(err => console.log(err));
    await mentionedMember.roles.remove(staffRole.id).catch(err => console.log(err).then(message.channel.send('๐There was an issue while tring to add the mute role to the member๐')));
    await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err).then(message.channel.send('๐There was an issue while tring to add the mute role to the member๐')));
    await mentionedMember.setNickname(mentionedMember.user.username);
    



  }
} 