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

            client.on('message', (message) => {
              if (message.content == '$이로치 물짱이') {
                const embed = new Discord.MessageEmbed() 
                    .setTitle('이로치 물짱이의 사진') 
                    embed.setColor('#E0709B')
                    .setFooter(`${message.author.username}님이 찾으시던 이로치 물짱이의 사진이에요!`)
                    embed.setImage("https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0258_000_mf_n_00000000_f_r.png")
                message.channel.send(embed)
              }
              })

              let foods = ["https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png","https://projectpokemon.org/images/sprites-models/homeimg/poke_capture_0151_000_uk_n_00000000_f_n.png"]
if(message.content.startsWith("$갸차 뮤")) {
  let rand = Math.floor(Math.random() * foods.length)
  message.channel.send(`${foods[rand]}`)
}

if(message.content.startsWith("!음식추가")) {
  let addedFood = message.content.split("!음식추가 ")[1]
  foods.push(addedFood)
  message.channel.send("추가완료 :check:")
}

            client.login(token);