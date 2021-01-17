const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$이벤트') {
    message.reply('현재 이벤트 기획 중 입니다.');
  }
});

client.login(token);