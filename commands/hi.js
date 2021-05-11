module.exports = {
    name: 'hi' ,
     description: "say hi and add reaction to member message",
      async execute(message ,args) {
          //reply to memeber
          message.channel.send(`Hi ${message.author.username} `);

         //add reaction to member message
            message.react('👋');
     }
}