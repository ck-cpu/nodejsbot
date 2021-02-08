const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '쿠키 도움말을 쳐보세요!' }, status: 'online' })
});

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
      if(message.content === '$이로치 뮤') {
        message.channel.send('https://media.discordapp.net/attachments/743758949056118824/807489082351419422/52_151_.gif');
      }
    });

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

        const talkedRecently = new Set();
        if (talkedRecently.has(msg.author.id)) {
          msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
  } else {

    client.on('message', (message) => {
      if (message.content == '$교배 도치마론') {
        const embed = new Discord.MessageEmbed() 
            .setTitle('도치마론 교배 결과!') 
            .setDescription('아직 이벤트는 기획 중인거 같아요..') 
            embed.setImage('https://media.discordapp.net/attachments/791960387083960320/808302684372336700/unknown.png')
            .setColor('PINK') 
        message.channel.send(embed)
      }
    })

      // Adds the user to the set so that they can't talk for a minute
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(msg.author.id);
      }, 60000);
  }

            client.login(token);