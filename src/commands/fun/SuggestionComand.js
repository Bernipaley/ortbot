const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js');

module.exports = class SuggestCommand extends BaseCommand {
  constructor() {
    super('suggest', 'fun', ['suggestion']);
  }

  async run(client, message, args) {

    let suggestion = args.join(' ');
    if (!args[0]) return message.channel.send('You have to send a suggest');('819315554891333693');
    const suggestEmbed = new discord.MessageEmbed()
    .setTitle(`Suggestion`)
    .addField(`Suggestion: ${suggestion}`, `This was suggested by ${message.author.tag}.`)
    .setColor('RANDOM')
    .setTimestamp();

    message.channel.send(suggestEmbed).then(sentMessage => sentMessage.react('👍')).then(reaction => reaction.message.react('👎'))
    message.delete();
  }
}