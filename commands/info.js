module.exports = {
	name: 'info',
	description: 'This command will gave the user his own info',
	execute(message, args) {
		message.channel.send(`Your Username : ${message.author.username}\nYour ID :  ${message.author.id}`);
	},
};