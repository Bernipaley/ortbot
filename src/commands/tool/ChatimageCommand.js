const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class ChatCommand extends BaseCommand {
  constructor() {
    super('chatimage', 'tool', []);
  }

  async run(client, message, args) {
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    await mentionedMember.send(reason).catch(err => console.log(err));
    
    
    }
} 