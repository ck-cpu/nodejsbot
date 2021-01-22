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
                embed.setImage("https://media.discordapp.net/attachments/799112066518089748/801794432671547442/Screenshot_20210118-173939_NAVER.png?width=971&height=676")
                embed.setColor('BLUE')
                .setFooter(`${message.author.username} 아뭔가 안맞는데`)
            message.channel.send(embed)
          }
          })

          client.on('message', (message) => {
            if (message.content == '아르세우스 나와랏!') {
              const embed = new Discord.MessageEmbed() 
                  .setTitle('야생 포켓몬이 나타났다!') 
                  .setDescription('p!catch `<포켓몬 이름>을 통해서 잡으세요!`')
                  embed.setImage("https://images-ext-2.discordapp.net/external/Ewqdsanlw6fe9P1VwEJ0BENIbFFVM_zcDkZh6IX46qo/https/pokecord.xyz%3A443/pokepic/2c477ce5c6765f3dc912a89f96f6125c%3A65d8d43a05bd7cc7b15e1e21a8508771")
                  embed.setColor('BLACK')
                  .setFooter(`다음 포켓몬이 나타나면 잡을 수 없습니다!  •2021.01.21.`)
              message.channel.send(embed)
            }
            })

            client.on('message', (message) => {
              if (message.content == '규칙') {
                const embed = new Discord.MessageEmbed() 
                    .setTitle('규칙을 읽어주세요...!') 
                    embed.setColor('#F8E77F')
                    .setFooter(`${message.author.username}님..규칙 읽어주세요.. 규칙은 <#798754239198658560> 채널에서 읽으시면 됩니다!`)
                message.channel.send(embed)
              }
              })
    
              client.on('message', (message) => {
                if (message.content == '아르세우스 개체') {
                  const embed = new Discord.MessageEmbed() 
                      .setTitle('level 40 Arceus | #493 | Pokémon Info') 
                      .setDescription('**XP**: 10/4790\n**Gender**: Genderless\n**Nature**: Impish\n**HP**: 28 - 5/31\n**Attack**: 15 - 20/31\n**Defense**: 20 - 1/31\n**Sp. Atk**: 27 - 23/31\n**Sp. Def**: 20 - 12/31\n**Speed**: 18 - 5/31\n**Total** IV: 100%\n**Trainer ID**: 167996')
                      embed.setImage("https://images-ext-2.discordapp.net/external/Ewqdsanlw6fe9P1VwEJ0BENIbFFVM_zcDkZh6IX46qo/https/pokecord.xyz%3A443/pokepic/2c477ce5c6765f3dc912a89f96f6125c%3A65d8d43a05bd7cc7b15e1e21a8508771")
                      embed.setColor('BLACK')
                      .setFooter(`#1041/1333 | Caught Date •2021.01.21.`)
                  message.channel.send(embed)
                }
                })

                client.on('message', message => {
    
                  let foods = ["족발", "피자", "치킨"]
              
                  if (message.content.startsWith(`!뭐먹지`)) {
                      let rand = Math.floor(Math.random() * foods.length);
                      message.reply(`${foods[rand]} 어떰?`);
                  };
              
                  if (message.content.startsWith(`!음식추가`)) {
                      let addedFood = message.content.split(`!음식추가 `)[1];
                      foods.push(addedFood);
                      message.reply(`${addedFood} 를 추가했습니다!`);
                  };
              });

              client.on('message', message => {
    
                let foods = ["족발", "피자", "치킨"]
            
                if (message.content.startsWith(`!이로치`)) {
                    let rand = Math.floor(Math.random() * foods.length);
                    message.reply(`${foods[rand]}`);
                };
            
                if (message.content.startsWith(`!싫어추가`)) {
                    let addedFood = message.content.split(`!ㅋ추가 `)[1];
                    foods.push(addedFood);
                    message.reply(`${addedFood} 를 추가했습니다!`);
                };
            });
            const request = require("request")

            if (message.content === '!코로나') {
              let url = "https://apiv2.corona-live.com/stats.json"
              request(url, (error, response, body) => {
                  let overview = JSON.parse(response.body).overview;
                  overview = {
                      total_confirmed_person: overview.confirmed[0], // 총 확진자수
                      yesterday_confirmed_person: overview.confirmed[1], // 어제 확진자수
              
                      current_confirmed_person: overview.current[0], // 현재 확진자수
                      current_confirmed_person_diff: overview.current[1], // diff(어제 이 시간대 확진자 수 - 현재 이 시간대 확진자 수)
                  }
              
                  let embed = new Discord.MessageEmbed()
                  embed.setTitle('코로나 라이브 홈페이지')
                  embed.setURL('https://corona-live.com')
                  embed.setColor('#FF8000')
                  embed.setDescription('코로나 정보입니다')
                  embed.addField(`대한민국 총 확진자 수`, `${overview.total_confirmed_person}명`, true)
                  embed.addField(`어제 확진자 수`, overview.yesterday_confirmed_person + `명`, true)
                  embed.addField(`오늘 확진자 수`, overview.current_confirmed_person + `명`, true)
                  // embed.addField(`오늘 어제지금시간   -   현재지금시간의 확진자`, overview.current_confirmed_person_diff + `명`, true)
                  message.channel.send(embed)
              
                })
              }
              
            client.login(token);