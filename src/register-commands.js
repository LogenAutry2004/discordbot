// File where / commands are registered 

// gets global environment variables and gets required modules
require('dotenv').config();
const { REST, Routes } = require('discord.js');

// object array containing commands
const commands =[{
    name: 'hey',
    description: "Replies with hey!",
},
];

// setting rest api to our clients token
const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

// asyncronous function that registers the command to the route of guild commands with the body of the commands array
(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Slash commands were registed succesfully!')
    } catch (error) {
        console.log(`There was an error ${error}`);
    }
})();