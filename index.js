const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$이벤트') {
    messgae.channel.send('이벤트는 현재 기획 중입니다.');
  }
});

client.login(token);