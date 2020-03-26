module.exports = {
    name: 'help',
    description: "Lists all available commands",
    execute(message, args) {
        message.channel.send('Available commands are: !hello, !user, !info version, !info author, !clear [number of messages you want to delete'
        + '(no brackets)], !help');
    }
}