module.exports = {
    name: 'help',
    description: "Lists all available commands",
    execute(message, args) {
        if (args[1] === 'commands') {
            message.channel.send('Available commands are: !hello, !user, !info version, !info author, !clear [number of messages you want to delete'
            + '(no brackets)], !help');
        }

        else if (args[1] === 'info') {
            message.channel.send('Available information is: version, author.')
        }

        else {
            message.channel.send('Please specify what you would like help with.')
        }
    }
}