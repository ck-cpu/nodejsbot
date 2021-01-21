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
          .setDescription('쿠키 도움말: 쿠키봇에 명령어를 알려줘요!\n쿠키 좋아하는거?: 쿠키가 좋아하는걸 알려줘요!\n쿠키봇에 추가했으면 하는 것을 알려주시면 감사할거같아요!  <#801742258252414986> 여기 채널에 알려주세요!!\n쿠키 이벤트: 이벤트 목록을 알려줘요!') 
          .setColor('YELLOW') 
      message.channel.send(embed)
    }
    })

    client.on('message', (message) => {
      if (message.content == '쿠키 좋아하는거?') {
        const embed = new Discord.MessageEmbed() 
            .setTitle('저는 포켓몬 도치마론을 좋아해요!!') 
            .setDescription('으악...넘 귀엽지않나요....?') 
            .setColor('GREEN') 
            .setFooter(`${message.author.username}님은 뭘 좋아하시나요..?ㅎㅎ`)
        message.channel.send(embed)
      }
      })

      client.on('message', (message) => {
        if (message.content == '쿠키 이벤트') {
          const embed = new Discord.MessageEmbed() 
              .setTitle('이벤트 목록') 
              .setDescription('아직 이벤트는 기획 중인거 같아요..') 
              .setColor('PINK') 
          message.channel.send(embed)
        }
        })

        client.on('message', (message) => {
          if (message.content == '쿠키 너무 착해') {
            const embed = new Discord.MessageEmbed() 
                .setTitle('쿠키는 착해요!') 
                .setDescription('https://media.discordapp.net/attachments/798201325766705193/800649608396668948/Screenshot_20210118-173939_NAVER.jpg?width=971&height=676') 
                .setColor('BLUE') 
                .setFooter(`${message.author.lastMessage} 아뭔가 안맞는데`)
            message.channel.send(embed)
          }
          })

client.login(token);