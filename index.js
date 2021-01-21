const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
if (message.content == '쿠키') {
  const embed = new Discord.MessageEmbed() 
      .setTitle('뭐하지') 
      .setDescription('심심해') 
      .setColor('#00ffff') 
  message.channel.send(embed)
}
})
client.on('message', (message) => {
  if (message.content == '심심해') {
    const embed = new Discord.MessageEmbed() 
        .setTitle('그래?') 
        .setDescription('나랑놀자') 
        .setColor('RED') 
    message.channel.send(embed)
  }
  })
  client.on('message', (message) => {
    if (message.content == '쿠키 도움말') {
      const embed = new Discord.MessageEmbed() 
          .setTitle('쿠키봇 명령어 리스트입니다!') 
          .setDescription('아직 명령어를 추가하고있어요..조금만 기다려주세요..!') 
          .setColor('YELLOW') 
      message.channel.send(embed)
    }
    })
client.login(token);