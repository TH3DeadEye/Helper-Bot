module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (!args[0]) return message.reply("Please enter the amount of messages to clear!");
 
        if(isNaN(args[0])) return message.reply("Yeah.... Thats a real number <a:monkaHmm:823118306403680287> ");
 
        if(args[0] > 100) return message.reply("You can't remove more than 100 messages!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");
 
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}
}   