module.exports = {
    name: 'clear',
    description: "Clears a requested amount of messages in the given text channel (must be newer than 2 weeks).",
    execute(message, args) {
        if(!args[1]) {
            return message.reply('Error: Please define a second arg');
        }
        
        else {
            message.channel.bulkDelete(args[1]);
        }
    }
}