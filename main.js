//libraris
const Discord = require('discord.js');
const fs = require('fs');
const { prefix } = require('./config.json');
const { token } = require('./config.json');
const client = new Discord.Client({partials:["MESSAGE", "REACTION", "CHANNEL"]});
const search = require('youtube-search');
const opts = {
    maxResults: 25,
    key: token.YOUTUBE_API,
    type: 'video'
}


client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const files of commandFiles) {
    const command = require(`./commands/${files}`);
    client.commands.set(command.name, command);
}



//run this code when the client is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);   
});

//give a new member [Member] role 
client.on('guildMemberAdd', guildMember => {
let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member')

guildMember.roles.add(welcomeRole);
//message member and say welcome 
    message.channel.send('Hello and welacome!');
}) ;

//commands
client.on('message', async message => {
 
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   
 
   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const command = args.shift().toLowerCase();
    
   if(command === 'hi') {
       client.commands.get('hi').execute(message , args) ;
   }

   if (command === "ping") {
    client.commands.get('ping').execute(message, args);


    
   }else if (command === 'info'){
    client.commands.get('info').execute(message, args);


   }else if (command === 'ban'){
    client.commands.get('ban').execute(message, args);
    

   }else if (command === 'kick') { 
       client.commands.get('kick').execute(message, args);
   }
   
   if (command === 'reactionrole') {
    client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
    else if (command === 'clear') {
        
        client.commands.get('clear').execute(message, args);
    }else if (command === 'gs'){

        client.commands.get('gs'),execute(message, args);
    }
    
})
 

client.login(token);
