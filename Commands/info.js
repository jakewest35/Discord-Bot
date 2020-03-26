module.exports = {
    name: 'info',
    description: "Returns bot information",
    execute(message, args) {
        var version = '1.0.0';
        const Discord = require('discord.js');

        if (args[1] === 'version') {
            message.channel.send('Version ' + version)
        }

        else if (args[1] === 'author') {
            message.channel.send('Jakey Boiiiiii') 
        }

        else {
            message.channel.send('Invalid argument') 
        }
    }
}