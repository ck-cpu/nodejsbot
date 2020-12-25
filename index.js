const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$샘플 브리가론') {
    message.channel.send('브리가론 @악키열매\n성격: 장난꾸러기\n노력치: H252 B252 D4\n특성: 심록 or 방탄\n!광합성\n!벌크업\n!우드해머\n!니들가드');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 마폭시') {
    message.channel.send('마폭시 @구애안경\n특성 : 맹화\n성격 : 겁쟁이\n노력치 : C252 / D6 / S252 \n!불대문자\n!사이코키네시스\n!풀묶기\n!잠재파워');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 목록') {
    message.channel.send('현재 샘플은 \n1. 마폭시\n2. 브리가론\n이(가) 있습니다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$쿠키샘플봇 초대링크') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=791929491924189204&scope=bot 로 추가 해 주시면 감사하겠습니다. ');
  }
});

client.login(token);