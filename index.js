const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
if (message.content == '임베드') {
  const embed = new Discord.MessageEmbed() 
      .setTitle('임베드 테스트') 
      .setDescription('https://media.discordapp.net/attachments/794941121431076885/801452569821577256/pokemon.png') 
      .setColor('#00ffff') 
  message.channel.send(embed)
}
})
client.login(token);