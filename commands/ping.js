module.exports = {
    name: "ping",
    descripton: "this is a test command",
    execute(message, args) {
        message.channel.send('This is a test command');
    }
}