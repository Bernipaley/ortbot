// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const welcomeChannel = member.guild.channels.cache.get('820290190978842646');
    welcomeChannel.send(`Hola, <@${member.user.id}> Bienvenido a ${member.guild.name} Recorda leer las <#820290190978842648> y ante cualquier duda avisarle a los moderadores!`)
    
  }
}
