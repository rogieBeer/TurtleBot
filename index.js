const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'xxxxxxXXXXXXXXXXXXXXXxxxxxxxxxxx';
const fs = require('fs');
const prefix = '!';
const join = '-';
const functions = require("./functions/ready");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
// Returns "READY" when on.
client.on('ready', () => {
    console.log(functions.readyReply());
})

// Client Commands and answers.
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    // const secondCommand = args.shift().toLowerCase();
    // const thirdCommand = args.shift().toLowerCase();
    // Used for testing.
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    // -commands. 
    if (command === 'apex') {// Apex Legends.
        client.commands.get('apex').execute(message, args);
    } else if (command == 'star') {// Star Citizen.
        client.commands.get('star').execute(message, args);
    } else if (command == 'help') { // Helper Function.
        client.commands.get('help').execute(message, args);
    } else if (command == 'roll') { // Random Roll Function.
        client.commands.get('roll').execute(message, args);
    }
});

client.login(token);
