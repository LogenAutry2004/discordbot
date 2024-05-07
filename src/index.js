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

client.on('ready', (c) => {
    console.log(`✔️ ${c.user.tag} is online`);
});
client.on('messageCreate', (msg)=>{
        if(msg.author.bot){
            return;
        }
        if(msg.content ==='hey moosebot'){
            msg.reply(`hey ${msg.user}`);
        }
    }
);

// login password
client.login(process.env.TOKEN);