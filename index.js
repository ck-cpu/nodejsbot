const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '쿠키 도움말을 쳐보세요!' }, status: 'online' })
});

client.on('message', (message) => {
        if (message.content == '%꼬링크 출현지역') {
          const embed = new Discord.MessageEmbed() 
              .setTitle('KOR : 꼬링크 | JPN : コリンク | ENG: Shinx') 
              .setDescription('D: 신오 202번도로, 신오 203번도로, 신오 204번도로, 골풀무제철소\nP: 신오 202번도로, 신오 203번도로, 신오 204번도로, 골풀무제철소\nPt: 신오 202번도로, 신오 203번도로, 신오 204번도로, 골풀무제철소\n\nHG: 성도 사파리존, 관동 1번도로, 관동 2번도로, 관동 3번도로, 관동 4번도로, 관동 5번도로, 관동 7번도로, 관동 8번도로, 관동 11번도로, 관동 14번도로, 관동 15번도로, 관동 16번도로, 관동 17번도로, 관동 18번도로, 성도 29번도로, 성도 33번도로, 성도 36번도로, 성도 37번도로, 성도 38번도로, 성도 39번도로, 성도 46번도로, 성도 48번도로, 자연공원\nSS: 성도 사파리존, 관동 1번도로, 관동 2번도로, 관동 3번도로, 관동 4번도로, 관동 5번도로, 관동 7번도로, 관동 8번도로, 관동 11번도로, 관동 14번도로, 관동 15번도로, 관동 16번도로, 관동 17번도로, 관동 18번도로, 성도 29번도로, 성도 33번도로, 성도 36번도로, 성도 37번도로, 성도 38번도로, 성도 39번도로, 성도 46번도로, 성도 48번도로, 자연공원\n\nB: 교환\nW: 화이트포리스트\nB2: 교환\nW2: 교환\n\nX: 럭시오 또는 렌트라를 교배\nY: 럭시오 또는 렌트라를 교배\n\nOR: 럭시오 또는 렌트라를 교배\nAS: 럭시오 또는 렌트라를 교배\n\nS: 럭시오 또는 렌트라를 교배\nM: 럭시오 또는 렌트라를 교배\nUS: 교환\nUM: 교환\n\nLP: X\nLE: X\n\nSW(ver.1.2.0+): 교환\nSH(ver.1.2.0+): 교환\nSWEX: 냄비바닥사막, 단련평원, 챌린지로드, 챌린지비치\nSHEX: 냄비바닥사막, 단련평원, 챌린지로드, 챌린지비치')
              .setColor('#FFFACD') 
          message.channel.send(embed)
        }
        })

    client.login(token);

    client.on('message', (message) => {
      if (message.content == '%신오 202번도로') {
        const embed = new Discord.MessageEmbed() 
            .setTitle('KOR : 202번도로 | JPN : 202ばんどうろ | ENG: Route 202') 
            .setDescription('D\n풀숲(아침): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n풀숲(낮): 찌르꼬 40% / 비버니 30% / 꼬링크 30%\n풀숲(밤): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n대량발생: 지그제구리 40%\n포켓트레: 꼬리선 12%\n더블슬롯(파이어레드): 가디 8%\nP\n풀숲(아침): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n풀숲(낮): 찌르꼬 40% / 비버니 30% / 꼬링크 30%\n풀숲(밤): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n대량발생: 지그제구리 40%\n포켓트레: 꼬리선 12%\n더블슬롯(파이어레드): 가디 8%\nPt\n풀숲(아침): 찌르꼬 20% / 비버니 40% / 귀뚤뚜기 10% / 꼬링크 30%\n풀숲(낮): 찌르꼬 30% / 비버니 50% / 꼬링크 20%\n풀숲(밤): 찌르꼬 20% / 비버니 50% / 귀뚤뚜기 10% / 꼬링크 20%\n대량발생: 지그제구리 40%\n포켓트레: 꼬리선 12%\n더블슬롯(파이어레드): 가디 8%')
            .setColor('#808080') 
        message.channel.send(embed)
      }
      })

      client.login(token);

      client.on('message', (message) => {
        if (message.content == '%관동 1번도로') {
          const embed = new Discord.MessageEmbed() 
              .setTitle('KOR : 1번도로 | JPN : 1ばんどうろ | ENG: Route 202') 
              .setDescription('R\n풀숲: 구구 55% / 꼬렛 45%\nG\n풀숲: 구구 55% / 꼬렛 45\nB\n풀숲: 구구 55% / 꼬렛 45%\nPk\n풀숲: 구구 70% / 꼬렛 30%\n\nG\n풀숲(아침): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(낮): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(밤): 꼬렛 55% / 부우부 45%\nS\n풀숲(아침): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(낮): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(밤): 꼬렛 55% / 부우부 45%\nC\n풀숲(아침): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(낮): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(밤): 꼬렛 50% / 레트라 5% / 부우부 45%\n\nFR\n풀숲: 구구 50% / 꼬렛 50%\nLG\n풀숲: 구구 50% / 꼬렛 50%\n\nHG\n풀숲(아침): 꼬렛 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(낮): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(밤): 꼬렛 55% / 부우부 45%\n박치기: 부우부 130% / 페이검 30% / 피콘 30% / 개무소 20%\n대량발생: 포챠나 40%\n호연사운드: 플러시 20% / 마이농 20%\n신오사운드: 꼬링크 40%\nSS\n풀숲(아침): 꼬렛 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(낮): 구구 45% / 꼬렛 30% / 꼬리선 20% / 다꼬리 5%\n풀숲(밤): 꼬렛 55% / 부우부 45%\n박치기: 부우부 130% / 레디바 30% / 피콘 30% / 개무소 20%\n대량발생: 포챠나 40%\n호연사운드: 플러시 20% / 마이농 20%\n신오사운드: 꼬링크 40%\n\nLP\n풀숲: 구구 40% / 꼬렛 30% / 뚜벅쵸 30%\n비행(전당등록 후): 구구 60% / 피죤 35% / 피죤투 5%\nLE\n풀숲: 구구 40% / 꼬렛 30% / 모다피 30%\n비행(전당등록 후): 구구 60% / 피죤 35% / 피죤투 5%')
              .setColor('#808080') 
          message.channel.send(embed)
        }
        })

        client.on('message', (message) => {
          if (message.content == '%레이드 꼬링크 이로치') {
            const embed = new Discord.MessageEmbed() 
                .setTitle('**Raid announcement**') 
                .setDescription('New raid will start in 15 minutes!\nWill you defeat **Shinx?**')
                .setImage('http://play.pokemonshowdown.com/sprites/ani-shiny/shinx.gif')
                .setColor('#616264') 
                .setFooter('오늘 오후 11:42')
            message.channel.send(embed)
          }
          })

          client.on('message', (message) => {
            if (message.content == '%레이드 레지스틸 이로치') {
              const embed = new Discord.MessageEmbed() 
                  .setTitle('**Raid announcement**') 
                  .setDescription('New raid will start in 15 minutes!\nWill you defeat **Registeel :sparkles:?**')
                  .setImage('http://play.pokemonshowdown.com/sprites/ani-shiny/registeel.gif')
                  .setColor('#FFFF00') 
                  .setFooter('오늘 오후 11:26')
              message.channel.send(embed)
            }
            })


  client.login(token);
