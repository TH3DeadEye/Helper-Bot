//This code dosent support custome server emojies 
module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

         const channel = '822523341393887271';
//823111313840537610     823111309872332820   823111342616608788
       const webdeveloper = message.guild.roles.cache.find(role => role.name === "web-developer");
        const mobiledeveloper = message.guild.roles.cache.find(role => role.name === "mobile-developer");
        const gamedeveloper = message.guild.roles.cache.find(role => role.name === "game developer");
           

        
        const webdeveloperEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Html');
        const mobiledeveloperEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'kotlin');
        const gamedeveloperEmoji = message.guild.emojis.cache.find(emoji => emoji.name  === 'C_plus_plus');

         //create a new embed for reaction role 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('coding type')
            .setDescription('\n\n'
                + `${webdeveloperEmoji} for web developers\n`
                + `${mobiledeveloperEmoji} for mobile developers\n`
                + `${gamedeveloperEmoji} for game developers\n`);
               
         // react to that embed
        let messageEmbed = await message.channel.send(embed);
         messageEmbed.react(webdeveloperEmoji);
         messageEmbed.react(mobiledeveloperEmoji);
         messageEmbed.react(gamedeveloperEmoji);

         //add role  when member react to emoji
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            //add role when mmeber reacat to that emoji 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === webdeveloperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(webdeveloper);
                }
                if (reaction.emoji.name === mobiledeveloperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mobiledeveloper);
                }  
                 if (reaction.emoji.name === gamedeveloperEmoji ) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gamedeveloper);
                } 
              
            } else {
                return;
            }
 
        });
             //remove role when mmeber remove reaction
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;      
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === webdeveloperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(webdeveloper);
                }
                if (reaction.emoji.name === mobiledeveloperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mobiledeveloper);
                }
                if (reaction.emoji.name === gamedeveloperEmoji ) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gamedeveloper);
                } 
            } else {
                return;
            }
        });
    }

}
