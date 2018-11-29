const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX, OWNER, DBLTOKEN } = require('./config.js');
const DBL = require('dblapi.js');
const dbl = new DBL(DBLTOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`${client.users.size} idiots`, { type: "WATCHING" });
    dbl.postStats(client.guilds.size)
        .then(() => console.log("Posted Stats"))
        .catch(error => console.log(error))
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
        `My fam are the best`,
        `I don't have a Chinese accent`,
        `I'm still telling Ken that you were vulgar`,
        `Just look at how I treat ${message.author}'s soggy, bitch ass`,
        `I am a very aggressive person at times`,
        `Dream is no loser`,
        `this kid`,
        `Forgot to add "Appreciate Dream" to that to do list`,
        `too late, you've akready earned a spot on my to do list`,
        `${message.author} I don't want to be the best mod`,
        `do it`,
        `Compliment me all you like`,
        `I'll step down shall I?`,
        `expect changes in 3-5 working days`,
        `my memes look like memes`,
        `I want you to not like me at all ${message.author}`,
        `${message.author}, I get the impression that you don't like me`,
        `god no`,
        `lol what hoe <a:sad:493973165865697291>`
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
        `Spamming something in #general`,
        `Keeps bringing up the fact he's waiting for his bot to be approved and spamming emotes in #general`,
        `DM ads, I think`,
        `Accomplice of above case`,
        `Mute Evading`,
        `Asking for star reactions to get on #starboard`
    ]
    const dreamresponses = [
        `Ily dream`,
        `Take care Dream`,
        `Gn`,
        `uwu Dream`,
        `*hugs dream*`,
        `hi dream`,
        `dream is a qt`,
        `Sleep well Dream`
    ]
    let args = message.content.split(' ').slice(2);
    let param = args.join(" ");
    if (!message.content.startsWith(PREFIX)) return;
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    if (message.content.toLowerCase().startsWith(PREFIX) && message.content.toLowerCase().endsWith("?")) {
        return message.channel.send("Do I look like Support to you?");
    }
    if (message.content.toLowerCase().startsWith(PREFIX + "ping")) {
        return message.channel.send(`PONG ${client.ws.ping}ms`);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "jonny")) {
        return message.channel.send("What did you say you cunt?");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "git")) {
        return message.channel.send("https://github.com/Xignotic84/Jonny-Simulator");
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "say")) {
        return message.channel.send(param);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "stats")) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL(), "https://discordbots.org/bot/513875575447741440")
            .setColor(message.guild.me.displayColor)
            .addField("Server Count", client.guilds.size, true)
            .addField("User Count", client.users.size, true)
            .setTimestamp()
        return message.channel.send(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "simulators")) {
        const embed = new Discord.MessageEmbed()
            .setTitle("So I am not good enough for you neckass! Fine maybe these bots will fit your needy ass")
            .setAuthor(message.author.tag, message.author.displayAvatarURL(), "https://discordbots.org/bot/513875575447741440")
            .setColor(message.guild.me.displayColor)
            .addField("Oliy Simulator", "https://discordbots.org/bot/500954344510980136")
            .addField("Xiggy Simulator", "https://discordbots.org/bot/510506828031852555")
            .addField("Spider Simulator", "https://discordbots.org/bot/515668968464187402")
            .addField("DBL Simulator 2", "https://discordbots.org/bot/513814680662179857")
        return message.channel.send(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "help")) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL(), "https://discordbots.org/bot/513875575447741440")
            .setColor(message.guild.me.displayColor)
            .addField(`${PREFIX}help`, "Sends this message")
            .addField(`${PREFIX}modlog`, "Sends a mod-log case")
            .addField(`${PREFIX}invite`, "Sends the invite link")
            .addField(`${PREFIX}git`, "Sends the git link")
            .addField(`${PREFIX}ping`, "Sends ping")
            .addField(`${PREFIX}jonny`, "Yes")
            .addField(`${PREFIX}[question/text]`, "Returns a response")
            .setTimestamp()
        return message.channel.send(embed);
    }

    if (message.content.toLowerCase().startsWith(PREFIX + "serverinfo")) {
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL(), "https://discordbots.org/bot/513875565447741440")
            .setColor(message.guild.me.displayColor)
            .addField("Server Name", message.guild.name, true)
            .addField("Server ID", message.guild.id, true)
            .addField("Member Count", message.guild.memberCount, true)
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
            .setColor(message.guild.me.displayColor)
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

    if (message.content.toLowerCase().startsWith(PREFIX + "modlog")) {
        let cases = [Math.floor(Math.random() * 3)]
        if (cases == 0) {
            cases = "Mute | Case"
            color = "#E1AE0B"
        } else if (cases == 1) {
            cases = "Ban | Case"
            color = "#ff0000"
        } else {
            cases = "Kick | Case"
            color = "#E1AE0B"
        }

        let modtxt = modlog[Math.floor(Math.random() * modlog.length)]
        let user = message.mentions.members.first() || message.guild.members.get(param) || message.guild.members.find(m => m.displayName.toLowerCase().includes(param.toLowerCase()) || m.user.tag.toLowerCase().includes(param.toLowerCase())) || null;
        if (!user || !param) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`${cases} #${Math.floor(Math.random() * 10000)}`)
                .addField("User", `${message.author.tag} (${message.author})`, true)
                .addField("Moderator", "Jonny 絶望#7777", true)
                .addField("Reason", modtxt)
                .setTimestamp()
                .setColor(color)
            return message.channel.send(embed);
        }
        const embed = new Discord.MessageEmbed()
            .setTitle(`${cases} #${Math.floor(Math.random() * 10000)}`)
            .addField("User", `${user.user.tag} (${user})`, true)
            .addField("Moderator", "Jonny 絶望#7777", true)
            .addField("Reason", modtxt)
            .setTimestamp()
            .setColor(color)
        return message.channel.send(embed);
    }

    if (message.author.id === "257521982021566464") {
        let dream = dreamresponses[Math.floor(Math.random() * dreamresponses.length)];
        return message.channel.send(dream);
    }

    if (message.content.toLowerCase().startsWith(PREFIX)) {
        let txt = responses[Math.floor(Math.random() * responses.length)];
        message.channel.send(`${txt}`)
    }
})

client.login(TOKEN);