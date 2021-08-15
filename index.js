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
              .setDescription('다이아몬드: 신오 202번도로, 신오 203번도로, 신오 204번도로, 골풀무제철소\n펄: 신오 202번도로, 신오 203번도로, 신오 204번도로, 골풀무제철소\n플레티나: 신오 202번도로, 신오 203번도로, 신오 204번도로, 골풀무제철소\n하트골드: 성도 사파리존, 관동 1번도로, 관동 2번도로, 관동 3번도로, 관동 4번도로, 관동 5번도로, 관동 7번도로, 관동 8번도로, 관동 11번도로, 관동 14번도로, 관동 15번도로, 관동 16번도로, 관동 17번도로, 관동 18번도로, 성도 29번도로, 성도 33번도로, 성도 36번도로, 성도 37번도로, 성도 38번도로, 성도 39번도로, 성도 46번도로, 성도 48번도로, 자연공원\n소울실버: 성도 사파리존, 관동 1번도로, 관동 2번도로, 관동 3번도로, 관동 4번도로, 관동 5번도로, 관동 7번도로, 관동 8번도로, 관동 11번도로, 관동 14번도로, 관동 15번도로, 관동 16번도로, 관동 17번도로, 관동 18번도로, 성도 29번도로, 성도 33번도로, 성도 36번도로, 성도 37번도로, 성도 38번도로, 성도 39번도로, 성도 46번도로, 성도 48번도로, 자연공원\n블랙: 교환\n화이트: 화이트포리스트\n블랙2: 교환\n화이트2: 교환\nX: 럭시오 또는 렌트라를 교배\nY: 럭시오 또는 렌트라를 교배\nOR: 럭시오 또는 렌트라를 교배\nAS: 럭시오 또는 렌트라를 교배\n썬: 럭시오 또는 렌트라를 교배\n문: 럭시오 또는 렌트라를 교배\n울트라썬: 교환\n울트라문: 교환\nLP: X\nLE: X\nSW(ver.1.2.0+): 교환\nSH(ver.1.2.0+): 교환\nSWEX: 냄비바닥사막, 단련평원, 챌린지로드, 챌린지비치\nSHEX: 냄비바닥사막, 단련평원, 챌린지로드, 챌린지비치') 
              .setColor('#FFFACD') 
          message.channel.send(embed)
        }
        })

    client.login(token);

    client.on('message', (message) => {
      if (message.content == '%신오 202번도로') {
        const embed = new Discord.MessageEmbed() 
            .setTitle('KOR : 202번도로 | JPN : 202ばんどうろ | ENG: Route 202') 
            .setDescription('다이아몬드 | 풀숲(아침): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n풀숲(낮): 찌르꼬 40% / 비버니 30% / 꼬링크 30%\n풀숲(밤): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n대량발생: 지그제구리 40%\n포켓트레: 꼬리선 12%\n더블슬롯(파이어레드): 가디 8%\n\n펄 | 풀숲(아침): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n풀숲(낮): 찌르꼬 40% / 비버니 30% / 꼬링크 30%\n풀숲(밤): 찌르꼬 30% / 비버니 30% / 귀뚤뚜기 10% / 꼬링크 30%\n대량발생: 지그제구리 40%\n포켓트레: 꼬리선 12%\n더블슬롯(파이어레드): 가디 8%\n\n플레티나 | 풀숲(아침): 찌르꼬 20% / 비버니 40% / 귀뚤뚜기 10% / 꼬링크 30%\n풀숲(낮): 찌르꼬 30% / 비버니 50% / 꼬링크 20%\n풀숲(밤): 찌르꼬 20% / 비버니 50% / 귀뚤뚜기 10% / 꼬링크 20%\n대량발생: 지그제구리 40%\n포켓트레: 꼬리선 12%\n더블슬롯(파이어레드): 가디 8%')
             .setImage('https://static.wikia.nocookie.net/pokemon/images/5/5e/202%EB%B2%88%EB%8F%84%EB%A1%9C.png/revision/latest/scale-to-width-down/256?cb=20111023095525&path-prefix=ko')
            .setColor('#808080') 
        message.channel.send(embed)
      }
      })

  client.login(token);
