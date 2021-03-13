const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class RecruitCommand extends BaseCommand {
  constructor() {
    super('recruit', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑NO TENES PERMISO PARA USAR ESTE COMANDO🛑');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('🛑NO TENGO PERMISO PARA USAR ESTE COMANDO🛑');
    const staffRole = message.guild.roles.cache.get('820290190970585106');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const staffPrefix = ' | MOD'
    const staffEmbed = new Discord.MessageEmbed()
      .setTitle(`Ahora sos staff en ${message.guild.name}`)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter("Ort Bot, Desarrolado por Bernardo Paley");
    const sEmbed = new Discord.MessageEmbed()
      .setTitle('staff added');
      const staffwEmbed = new Discord.MessageEmbed()
      .setDescription("¡Hola! \n\ Bienvenido al equipo de moderadores del servidor de ORT! \n\ Se te pide releer las reglas. \n\ Para revisar los comandos de moderacion (que es de caracter OBLIGATORIO) usar el comando `o!modcommands`")
    
    
    if (!args[0]) return message.channel.send('🛑\`o!recruit @user reason\`🛑 ');
    if (!mentionedMember) return message.channel.send('🛑No encuentro el miembro🛑');
    if (!mentionedMember.user.id == message.author.id) return message.channel.send('🛑No podes ser staff vos mismo ya lo sos xDD🛑')
    if (!mentionedMember.user.id == client.user.id) return message.channel.send('🛑Yo ya soy staf ._.🛑');
    if (mentionedMember.roles.cache.has(staffRole)) return message.channel.send('🛑Este miembro ya es staff🛑');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('🛑You cannot mute someone with the same role or higher then you.🛑')

    message.channel.send(sEmbed)
    await mentionedMember.send(staffwEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(staffRole.id).catch(err => console.log(err).then(message.channel.send('🛑There was an issue while tring to add the mute role to the member🛑')));
    await mentionedMember.setNickname(mentionedMember.user.username +   staffPrefix);
    



  }
} 