// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
  const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {
    const goodbyeChannel = member.guild.channels.cache.get('820290190978842647');
    goodbyeChannel.send(`${member.user.tag} se fue :((`)
    
  }
}
