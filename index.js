const Discord = require('discord.js');
const client = new Discord.Client();
const token = "NzkxOTI5NDkxOTI0MTg5MjA0.X-WT0A.0a60Hck667jimCXnyI2ngVYAYfM"

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '$샘플 브리가론') {
    message.channel.send('브리가론 @악키열매\n성격: 장난꾸러기\n노력치: H252 B252 D4\n특성: 심록 or 방탄\n!광합성\n!벌크업\n!우드해머\n!니들가드');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 마폭시') {
    message.channel.send('마폭시 @구애안경\n특성 : 맹화\n성격 : 겁쟁이\n노력치 : C252 / D6 / S252 \n!불대문자\n!사이코키네시스\n!풀묶기\n!잠재파워');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 목록') {
    message.channel.send('현재 샘플은 \n1. 마폭시\n2. 브리가론\n 3. 어니부기\n이(가) 있습니다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$쿠키샘플봇 초대링크') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=791929491924189204&scope=bot 로 추가 해 주시면 감사하겠습니다. ');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 어니부기') {
    message.channel.send('어니부기@진화의휘석 H244 B252 D14\n(성격 | 대담) (특성 | 젖은접시)\n바다회오리/방어(철벽)/소금물(하품)/얼다바람특공 \n풀보정 로토무의 10만볼트 확 2타고집 구머띠 공 풀보정 고릴타의 그슬 확 2타특성이 젖은접시이기 때문에 앞에서 비를 깔아주면 좋습니다. 하품으로 재우고 바다회오리 데미지를 계속 줄 수도 있고 바다회오리로 상대 HP가 반보다 적게 남았을때 소금물로 큰 타격을 입힐 수도 있습니다. 방어대신 철벽을 채용하여 물리몬 앞에서 죽지 않고 계속 살아 바다회오리 데미지를 줄 수도 있습니다. 또 약점인 풀타입에게 얼다바람으로 딜을 줄 수 있고, 뒤에 상대의 포켓몬과 동속인 포켓몬이 있을시 얼다바람으로 스피드를 낮추고 동속전을 하지 않고 자신이 선공하게 할 수도 있습니다.');
  }
});

client.login(token);