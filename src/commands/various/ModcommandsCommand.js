const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class modcommandsCommand extends BaseCommand {
  constructor() {
    super('modcommands', 'various', []);
  }

  run(client, message, args) {
    const rulesEmbed = new Discord.MessageEmbed()
    .setTitle("Moderation commands")
    .addField('N-1','o!ban')
    .addField('how to use it?','Simple! \`o!ban @user reason (//why you do want to ban this member//)\` the member will receive a DM with the info of his/her ban')
    .addField('N-2','o!tempban')
    .addField('how to use it?','Simple! \` o!tempban @user because he didnt behave with the server 30m\` //the member will receive a DM with the info of his/her tempban')
    .addField('N-3','o!kick')
    .addField('how to use it?',' \`o!kick @user reason (//why you do want to kick this member//)\`the member will receive a DM with the info of his/her kick')
    .addField('N-4','o!lock')
    .addField('how to use it?',' \`¿o!lock\` (you have to put that, in the channel you want to lock. For exaple i go to <#814887573742551111> and i put ¿lock when you send that nobody will be able to write at that channel')
    .addField('N-5','¿unlock')
    .addField('how to use it?',' \`o!unlock\` (you have to put that, in the channel you want to unlock. For exaple i go to <#814887573742551111> and i put o!unlock when you send that everyone will be able to write at that channel')
    .addField('N-6','o!nickname')
    .addField('how to use it?',' \`o!nickname @user new nickname\` If someone have an offensive nickname, you must change it to another one')
    .addField('N-7','o!purge')
    .addField('how to use it?',' \`o!purge 1-100 (messages do you want to delete)\` If someone spam, you must use this command and use tempmute it for 1hs as the rules say')
    .addField('N-8','o!tempmute')
    .addField('how to use it?','Simple! \` o!tempmute @user because he didnt behave with the server 30m\` //the member will receive a DM with the info of his/her tempmute, and another one when his/her tempmute finish')
    .addField('N-9','o!mute')
    .addField('how to use it?','Simple! \` o!mute @user reason\` //the member will receive a DM with the info of his/her mute.')
    .addField('N-10','o!unmute')
    .addField('how to use it?','Simple! \` o!unmute @user reason\` //the member will receive a DM with the info of his/her unmute.')
    .addField('N-11','o!helpF')
    .addField('how to use it?','Simple! \` o!helpF @user reason\` //You can only in one case. When a member ')
    .setTimestamp();
    message.delete()
    message.channel.send(rulesEmbed);
  }
}