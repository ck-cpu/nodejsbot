const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzkxOTI5NDkxOTI0MTg5MjA0.X-WT0A.js9RD4-p1PUXttkJ9PDavSzA1yE"


client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$봇 초대링크') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=791929491924189204&scope=bot');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 목록') {
    message.channel.send('현재 샘플은\n없습니다. (총 0개)');
  }
});

client.login(token);