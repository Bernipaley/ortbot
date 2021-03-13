const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
   if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have permision to unban members ._. ")
   if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send ("I dont have permissions to unban members")

   let reason = args.slice(1).join(" ")
   let userID = args[0];

  if (!reason) reason = ('No reason given');
  if (!args[0]) return message.channel.send("You must state someone to unban. (remember, o!ban ID reason)")
  if (isNaN(args[0])) return message.channel.send("The ID is not a number. (remember, o!ban ID reason)")

  message.guild.fetchBans().then(async bans => {
    if (bans.size == 0) return message.channel.send(' This server does not have anyone banned ._.');
    let bUser = bans.find(b => b.user.id == userID);
    if (!bUser) return message.channel.send('That ID is not banned');
    await message.guild.members.unban(bUser.user, reason).catch(err => {
      console.log(err);
      return message.channel.send('Something went wrong trying to unban the ID stated');
    }).then(() => {
      message.channel.send(`Succesfully unbanned  ${args[0]}`);
    })
  })

  }
}