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
client.login(token);