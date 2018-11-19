const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX, OWNER } = require('./config.js');

client.on('message', message => {

    let args = message.content.split(' ').slice(1);

    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;


    if (message.content.startsWith(PREFIX + "Jonny")) {
       return message.channel.send("What you cunt?");
    }
    if(message.conent.startWish(PREFIX + "serverinfo")) {
        const embed = new Discord.MessageEmbed()
              .setTitle('Server Info')
              .setAuthor(message.author.tag, message.author.displayAvatarURL())
              .setColor(0xFF0000)
              .setTimestamp()
          message.channel.send(embed);
    }
    if(message.content.startsWith(PREFIX + "eval")) {
        if(!message.author.id === OWNER) {
            return message.channel.send("You don't own me you neckass")
        }
        
    }
})

client.login(TOKEN);