const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '$도움을 쳐보세요!' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.content === '$봇 초대링크') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=791929491924189204&scope=bot');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 목록') {
    message.channel.send('현재 샘플은\n라이츄, 핫삼, 이상해씨, 뽀록나(이)가 있습니다. (총 4개)');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 이상해씨') {
    message.channel.send('이상해씨 @기합의띠\n성격 : 대담\n특성 : 엽록소\n개체값 : 공격 제외 5v\n노력치 : hs 252 or hd 252\n!독가루 or 맹독\n!씨뿌리기\n!방어\n!대타출동\n추가설명: 씨뿌려주고 방어>대타>대타>독가루>방어 순으로 때려준다. 이렇게만하면 한마리정도는 잡는다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 라이츄') {
    message.channel.send('라이츄 @기합의띠\n성격: 겁쟁이\n특성 : 피뢰침\n개체값 : 공격 제외 5v\n노력치 : h 4 cs 252\n!10만볼트\n!볼트체인지\n!파도타기\n!나쁜음모');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 핫삼') {
    message.channel.send('핫삼 @구애머리띠 \n성격 : 고집\n특성 : 테크니션\n개체값 : 6v\n노력치 H 236 A 252 S 20\n!유턴\n!불릿펀치\n!더블윙\n!엄청난힘');
  }
});

client.on('message', (message) => {
  if(message.content === '$샘플 뽀록나') {
    message.channel.send('뽀록나 @검은진흙\n성격: 대담\n특성: 재생력\n개체값: vzvvvv\n노력치 h252 b128 d128\n!기가드레인\n!버섯포자\n!광합성\n!맹독');
  }
});

client.on('message', (message) => {
  if(message.content === '$도움') {
    message.channel.send('쿠키샘플봇에는 이 명령어가 존재합니다.\n$샘플 목록: 현재 등록 되어있는 샘플을 알려줍니다.\n$샘플 (포켓몬 이름): 그 포켓몬의 샘플을 알려줍니다. 쓰실 때 $샘플 목록을 확인하시고 쓰시기 바랍니다.\n$봇 초대링크: 쿠키샘플봇의 초대링크로 자기 서버에 쿠키샘플봇을 추가할 수 있습니다.\n$도움 봇의 명령어를 알려줍니다.\n$봇 의견: 봇의 대한 의견을 추가 하는 방법을 알려줍니다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$봇 의견') {
    message.channel.send('쿠키샘플봇의 대한 의견은 https://discord.gg/xhPEgPenAb 이 서버의 #봇-의견 채널에서 작성해주세요.');
  }
});

client.on('message', (message) => {
  if(message.content === '$현재 이벤트굴') {
    message.channel.send('현재 이벤트 레이드 굴은 32번째 이벤트굴이며 대표적으로 딜리버드, 알로라 식스테일, 미로치 알로라 식스테일 (2%)가 등장합니다. (기간: 12월 25일~12월 27일)\n자세한 정보는 https://www.serebii.net/swordshield/maxraidbattles/eventden-christmas2020.shtml 에서 참고해주세요!');
  }
});

client.on('message', (message) => {
  if(message.content === '$이상해씨') {
    message.channel.send('```이상해씨 フシギダネ Bulbasaur```\n전국도감: 001번\n성비: 수: 87.5 암: 12.5\n타입: 풀, 독\n특성: 심록, 엽록소\n알그룹: 괴수, 식물\n포획률: 45/220\n방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 상철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀\n종족치: H: 45 A: 49 B: 49 C: 65 D: 65 S: 45 합: 315');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 심록') {
    message.channel.send('자신의 현재 HP가 전체의 ⅓ 이하일 때, 풀 타입 공격기의 위력이 1.5배 상승한다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 엽록소') {
    message.channel.send('날씨가 쾌청 상태일 때 스피드가 2배가 된다.');
  }
});

client.login(token);