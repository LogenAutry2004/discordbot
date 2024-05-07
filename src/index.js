// destructering the required modules from discord.js
const {Client, IntentsBitField} = require('discord.js')

// puts bots token into login
require('dotenv').config();

// event flags the bot client can listen for and interact to
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

// listens for when bot is ready
client.on('ready', (c) => {
    console.log(`✔️ ${c.user.tag} is online`);
});

// listens for when a message is created and checks if message author has the true flag for the key bot
client.on('messageCreate', (msg)=>{
        if(msg.author.bot){
            return;
        }
        if(msg.content ==='hey moosebot'){
            msg.reply(`hey ${msg.member}`);
        }
    }
);

// listens for commands
client.on("interactionCreate", (int) => {
    // returns if any other interaction occurs i.e a chat message
    if(!int.isChatInputCommand()) return;

    if(int.commandName === 'hey'){
        int.reply('hey!');
    }

});

// login password
client.login(process.env.TOKEN);