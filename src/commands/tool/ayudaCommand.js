const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class AyudaCommand extends BaseCommand {
  constructor() {
    super('ayuda', 'tool', []);
  }
  async run(client, message, args) {
    const helpEmbed = new discord.MessageEmbed()
    .setTitle('Ayuda')
    .setDescription('Por favor enviar tu problema al canal 🆘🆘canal-de-ayuda🆘🆘 Que se te acaba de desbloquear.')
    .setFooter('Ort Bot, creado por Bernardo Paley.')
     if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send ("🛑 I DONT HAVE MANAGE ROLES PERMISSION 🛑");

     const estudianteenayudarole = message.guild.roles.cache.get('820290190970585105');  message.channel.send (helpEmbed)
     const memberrole = message.guild.roles.cache.get('820290190970585103');  
       


     await message.member.roles.add(estudianteenayudarole).catch(err => console.log(err));
     await message.member.roles.remove(memberrole).catch(err => console.log(err));
  }
}