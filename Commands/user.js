module.exports = {
    name: 'user',
    description: "Returns user information",
    execute(message, args) {
        var version = '1.0.0';
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username, true)
            .addField('Current Server', message.guild.name, true)
            .addField('Version: ' + version)
            .setColor(0x3DFF6C)
            .setThumbnail(message.author.avatarURL());
            message.channel.send(embed);
    }
}