const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX, OWNER } = require('./config.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${client.users.size} idiots`, { type: "WATCHING" });
});

client.on('error', () => {
    console.log(`${error}`)
});

client.on('message', message => {
    const responses = [
        `Fuck off ${message.author}`,
        `Why do you have to bully me ${message.autor}`,
        `Ken is gay`,
        `Who wants to be on my headpat list`,
        `I hate children`,
        `No, neckass.`,
        `stop with the fucking jonny jonny yes papas smh`,
        `I have no socks on`,
        `jonny not johny`,
        `Fuck off Xig`,
        `Xig is the worst fucking Mod`
    ]
    let args = message.content.split(' ').slice(1);
    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(PREFIX) && message.content.toLowerCase().endsWith("?")) {
        return message.channel.send("Do I look like Support to you?")
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "ping")) {
        return message.channel.send(`PONG ${client.ping}`);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "jonny")) {
        return message.channel.send("What did you say you cunt?");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "help")) {
        message.channel.send(`${prefix}help \n ${prefix}serverinfo \n ${prefix}ping \n ${prefix}jonny \n ${prefix} [Question?]`)
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "serverinfo")) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Server Info')
            .setAuthor(message.author.tag, message.author.displayAvatarURL(), "htts://discordbots.org/bot/513875565447741440")
            .addField(`${message.guild.name}`)
            .setColor(0xFF0000)``
            .setTimestamp()
        message.channel.send(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "eval")) {
        if (!message.author.id === OWNER) {
            return message.channel.send("You don't own me you neckass")
        }
        message.channel.send("Yes")
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "eval")) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Avatar`)
        .setImage(message.author.displayAvatarURL())
    }


    if (message.content.toLowerCase().startsWith(PREFIX + "xignotic")) {
        message.channel.send("Fuck you Xignotic")
    }
    let txt = responses[Math.floor(Math.random() * responses.length)];
    if (message.content.toLowerCase().startsWith(PREFIX)) {
        message.channel.send(`${txt}`)
    }
})

client.login(TOKEN);