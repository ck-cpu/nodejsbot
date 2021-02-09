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
              .setDescription('현재 $교배 (포켓몬이름) 커맨드를 입력하면 약 1/60 확률로 이로치가 등장!\n등장하는 포켓몬: 치코리타, 브케인, 리아코, 도치마론, 푸호꼬, 개구마르\n당신의 운빨을 확인해보세요!') 
              .setColor('PINK') 
          message.channel.send(embed)
        }
        })

        client.on('message', message => {
    
          let foods = ["https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/shiny-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif", "https://projectpokemon.org/images/normal-sprite/chespin.gif"]
          if(message.content.startsWith("$교배 도치마론")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          if(message.content.startsWith("!음식추가")) {
            let addedFood = message.content.split("!음식추가 ")[1]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        })

        client.on('message', message => {
    
          let foods = ["https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/shiny-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif","https://projectpokemon.org/images/normal-sprite/fennekin.gif"]
          if(message.content.startsWith("$교배 푸호꼬")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          if(message.content.startsWith("!음식추가")) {
            let addedFood = message.content.split("!음식추가 ")[1]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        })

        client.on('message', message => {
    
          let foods = ["https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/shiny-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif","https://projectpokemon.org/images/normal-sprite/froakie.gif"]
          if(message.content.startsWith("$교배 개구마르")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          if(message.content.startsWith("!음식추가")) {
            let addedFood = message.content.split("!음식추가 ")[1]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        })

        client.on('message', message => {
    
          let foods = ["https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/shiny-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif","https://projectpokemon.org/images/normal-sprite/chikorita.gif"]
          if(message.content.startsWith("$교배 치코리타")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          if(message.content.startsWith("!음식추가")) {
            let addedFood = message.content.split("!음식추가 ")[1]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        })

        client.on('message', message => {
    
          let foods = ["https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/shiny-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif","https://projectpokemon.org/images/normal-sprite/cyndaquil.gif"]
          if(message.content.startsWith("$교배 브케인")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          if(message.content.startsWith("!음식추가")) {
            let addedFood = message.content.split("!음식추가 ")[1]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        })

        client.on('message', message => {
    
          let foods = ["https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/shiny-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif","https://projectpokemon.org/images/normal-sprite/totodile.gif"]
          if(message.content.startsWith("$교배 리아코")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          if(message.content.startsWith("!음식추가")) {
            let addedFood = message.content.split("!음식추가 ")[1]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        })

        client.on('message', message => {
    
          let foods = ["강아지는 귀엽지?","아니 안귀여운데"]
          if(message.content.startsWith("$강아지는 귀여워")) {
            let rand = Math.floor(Math.random() * foods.length)
            message.channel.send(`${foods[rand]}`)
          }
          
          let a = "!음식추가 피자"
          console.log(a.split("!음식추가 "))
          // ["", "피자"]
            foods.push(addedFood)
            message.channel.send("추가완료 :check:")
          }
        )

    client.login(token);