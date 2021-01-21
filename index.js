const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$이벤트') {
    message.channel.send('```이벤트는 현재 기획 중입니다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$초대링크') {
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=791929491924189204&permissions=8&scope=bot');
  }
});

client.on('message', (message) => {
  if(message.content === '$a등급') {
    message.channel.send('```이벤트는 현재 기획 중입니다.```');
  }
});

if (message.content == '임베드') {
  const embed = new Discord.MessageEmbed() 
      .setTitle('임베드 테스트') 
      .setDescription('안녕하세요') 
      .setColor('#00ffff') 
  message.channel.send(embed)
}

client.login(token);