const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzkxOTI5NDkxOTI0MTg5MjA0.X-WT0A.js9RD4-p1PUXttkJ9PDavSzA1yE"


client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$샘플 브리가론') {
    message.channel.send('브리가론 @악키열매\n성격: 장난꾸러기\n노력치: H252 B252 D4\n특성: 심록 or 방탄\n!광합성\n!벌크업\n!우드해머\n!니들가드');
  }
});

client.login(token);