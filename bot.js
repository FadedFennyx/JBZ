const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzY2MjgyMjU3NDU1MzgyNTM4.X4hF9w.krTpjDvBRUsFTmwqYFXjt1tYeYk);//BOT_TOKEN is the Client Secret
