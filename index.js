const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX, OWNER } = require('./config.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${client.users.size} idiots`, { type: "WATCHING" });
});

client.on('error', error => {
    console.log(error)
});


client.on('message', message => {
    const responses = [
        `Fuck off ${message.author}`,
        `Why do you have to bully me ${message.author} <a:sad:493973165865697291>`,
        `Ken is gay`,
        `Who wants to be on my headpat list`,
        `I hate children`,
        `No, neckass.`,
        `stop with the fucking jonny jonny yes papas smh`,
        `I have no socks on`,
        `jonny not johny`,
        `Fuck off Xig`,
        `Xig is the worst fucking Mod`,
        `This is a fucking uwu server only ${message.author}`,
        `JoJo is the best`,
        `Neckass`,
        `no bullying Dream`,
        `Unless you wanna be removed from the list, ${message.author}`,
        `yes`,
        `false`,
        `Shame you're not cool ${message.author}`,
        `You're not getting a headpat this christmas ${message.author}`,
        `fax`,
        `shut`,
        `Shut the fuck up ${message.author}, Ken says it's my turn to moderate`,
        `Thank you kindly`,
        `Children can we keep it civil kthx`,
        `I was on the phone with Chief, he says this aint it`,
        `I aint buying that shit game`,
        `My fam are the best`
    ]
    const modlog = [
        `Ads`,
        `Fucking Cunt`,
        `Neckass wanted to be cool`,
        `What the heck do you think you're doing`,
        `underage`,
        `dm ads`,
        `hoist ads`,
        `rhino musicbot as a selfbot`,
        `Advertising in general`,
        `Ads in #general`,
        `bot abuse`,
        `[Spamming my DMs after being muted above](https://cdn.discordapp.com/attachments/396848636081733632/506510994021941248/unknown.png)`,
        `ads`,
        `Ban evasion`,
        `spamming smh (selfbot idk)`,
        `Spamming cunt`,
        `another pin - gonna get a strike soon`,
        `ban evasion of 'bowling pin', 'bowling pin', 'bowling pin' and 'bowling pin'`,
        `advertising scam servers to random people in DMs https://i.imgur.com/GRBt5wR.png`,
        `Just spams bowling pins in chat for a living`,
        `selfbot`,
        `Sending invites in General`,
        `Came into #general speaking French in an insulting manner and refused to stop when told to`,
        `Spamming a bunch of shady files into #general`,
        `Spamming something in #general`
    ]
    let args = message.content.split(' ').slice(1);
    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(PREFIX) && message.content.toLowerCase().endsWith("?")) {
        return message.channel.send("Do I look like Support to you?");
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "ping")) {
        return message.channel.send(`PONG ${client.ping}`);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "jonny")) {
        return message.channel.send("What did you say you cunt?");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "help")) {
        return message.channel.send(`${PREFIX}help \n${PREFIX}serverinfo \n${PREFIX}ping \n${PREFIX}jonny \n${PREFIX} [Question?]\n${PREFIX}vote \n${PREFIX}invite`);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "serverinfo")) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL(), "https://discordbots.org/bot/513875565447741440")
            .addField("Server Name", message.guild.name, true)
            .addField("Server ID", message.guild.id, true)
            .addField("Creation Date", message.guild.createdAt.toUTCString())
            .addField("Bot Join Date", message.guild.joinedAt.toUTCString())
            .setTimestamp()
        return message.channel.send(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "eval")) {
        if (message.author.id !== OWNER) {
            return message.channel.send("You don't own me you neckass");
        }
        return message.channel.send("You own me but you're an idiot");
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "avatar")) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}'s Avatar`)
            .setImage(message.author.displayAvatarURL({ size: 2048 }))
            .setTimestamp()
        return message.channel.send(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "xignotic")) {
        message.channel.send("Fuck Xignotic, he's the biggest joke on dbl fuckin meme of a kid")
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "invite")) {
        return message.channel.send("Here's your invite link neckass \n https://discordapp.com/oauth2/authorize?client_id=513875565447741440&permissions=8&scope=bot");
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "vote")) {
        return message.channel.send("Yeah you better fucking vote for me \n https://discordbots.org/bot/513875565447741440");
    }
    let modtxt = modlog[Math.floor(Math.random() * modlog.length)]
    let user = message.mentions.members.first() || message.guild.members.get(args) || message.guild.members.find(m => m.displayName.toLowerCase().includes(args.toLowerCase()) || m.user.tag.toLowerCase().includes(args.toLowerCase()));
    if(!user){
        user = message.author
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "ban")) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Ban | Case #${Math.floor(Math.random() * 100000)}`)
            .addField("User", `${user.user.tag} (${user})`, true)
            .addField("Moderator", "Jonny 絶望#7777", true)
            .addField("Reason", modtxt)
            .setTimestamp()
            .setColor("#ff0000")
        return message.channel.send(embed);
    }
    let txt = responses[Math.floor(Math.random() * responses.length)];
    if (message.content.toLowerCase().startsWith(PREFIX)) {
        message.channel.send(`${txt}`)
    }
})

client.login(TOKEN);