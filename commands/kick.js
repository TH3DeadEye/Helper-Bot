module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        //check if the member has the Mod role 
        if (message.member.roles.cache.has('822523337237987393')) {

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
      }else {
        message.channel.send('You Dont Have the permision to Kick any mambers');
      };
    }
}