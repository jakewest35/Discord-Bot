const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjkyNDc0NTA2MDk0MTgyNTAy.XnvDMA.W-81-YyDZhUpjUyR8s_ALE7BaHY';
const PREFIX = '!';

// iterates through the Commands folder and reads in all .js files.
const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('Bot is online.');
})

bot.on('message', message =>{

    //allows us to implement the PREFIX to the beginning of every argument
    let args = message.content.substring(PREFIX.length).split(" ");

    // index 0 is the first keyword after the PREFIX. 
    switch(args[0]) {

        case 'hello': 
            bot.commands.get('hello').execute(message, args);
            break;

        case 'user':
            bot.commands.get('user').execute(message, args);
            break;

        case 'info':
            bot.commands.get('info').execute(message, args);
            break;

        case 'clear':
            bot.commands.get('clear').execute(message, args);
            break;

        case 'help':
           bot.commands.get('help').execute(message, args);
            break;
    }
})

// logs the bot into the server
bot.login(token);