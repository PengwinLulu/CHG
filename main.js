require('dotenv').config() ;

const Discord = require('discord.js') ;
const client = new Discord.Client() ;

const sqlite3 = require('sqlite3').verbose() ;
const database = new sqlite3.Database('database/dbCHG.db', err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connexion à la database SQLite réussie');
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

require('./handlers/event_handler')(client, Discord, database) ;
require('./handlers/command_handler')(client, Discord, database) ;

client.login(process.env.DISCORD_TOKEN).then( () => {});