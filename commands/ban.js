module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){

        //check if the member has the [Mod] id or not 
        if (message.member.roles.cache.has('822523337237987393')) {
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been Banned");
        }else{
            message.channel.send(`You coudn't banned that member!`);
        } 
        }else {
            message.channel.send('You Dont Have the permision to ban any mambers');
        };
   
    }
}