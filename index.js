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

                const messages = ['message one', 'message two', 'message three', 'message four'];
                const randomMessage = messages[Math.floor(Math.random() * (messages.length - 1))];
                module.exports = {
                    name: 'random',
                    description: 'send a randomised message.',
                    execute(message, args) {
                        message.channel.send(randomMessage);
                    }
                }
                
                client.on('message', (message) => {
                  if(message.content == '인성') {
                    const embed = new Discord.MessageEmbed()
                      .setTitle('펑')
                      embed.setColor('RED')
                      embed.setImage ("https://www.google.com/url?sa=i&url=https%3A%2F%2Falgomas.tistory.com%2F180&psig=AOvVaw2W2n3ZHu2pGUfueXSvvk6Y&ust=1611376241959000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDUnbvaru4CFQAAAAAdAAAAABAD%22")
                      .setDescription('이거.. 사람이냐?')
                    message.channel.send(embed)
                  };
                
                })

client.login(token);