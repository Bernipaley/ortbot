const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send(" 🛑 You cant use this 🛑");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(" 🛑 i dont have permissions 🛑");
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join (" ");


    if (!args[0]) return message.channel.send("🛑 You must set a member to change the nickname 🛑");
    if (!mentionedMember) return message.channel.send("🛑 The mentioned member its not at the server 🛑");
    if (!nickName) return message.channel.send("🛑 You must put a nickname to change 🛑")
    if (!mentionedMember.kickable) return message.channel.send("🛑 i cannot change that member nickname as their role are higher than mine 🛑");

    await mentionedMember.setNickname(nickName).catch(err => console.log(err) && message.channel.send("🛑 I cant put that nickname 🛑"))
    
    message.channel.send(`Nickname of ${mentionedMember} to ${nickName}`)
    console.log(`Nickname of ${mentionedMember} changedto ${nickName}`)
  


}}    
  