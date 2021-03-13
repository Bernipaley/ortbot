const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class helpWCommand extends BaseCommand {
  constructor() {
    super('helpW', 'tool', []);
  }

  run(client, message, args) {

  const holaEmbed = new discord.MessageEmbed()
  .setTitle('🛑🛑🛑 Ayuda 🛑🛑🛑')
  .setDescription('Bienvenido al sistema de soporte del servidor de ORT \n\ Por favor Enviar un mensaje breve y conciso explicando el problema\n\  Muchas gracias!  ')
  .setColor('RANDOM')
  .setFooter('Ort Bot, desarrollado por Bernardo Paley')
  .setTimestamp();
  message.delete();
  message.channel.send(holaEmbed);    
  }
}