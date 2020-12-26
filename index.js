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
    message.channel.send('```쿠키샘플봇에는 이 명령어가 존재합니다.```\n```$샘플 목록: 현재 등록 되어있는 샘플을 알려줍니다.```\n```$샘플 (포켓몬 이름): 그 포켓몬의 샘플을 알려줍니다. 쓰실 때 $샘플 목록을 확인하시고 쓰시기 바랍니다.```\n```$봇 초대링크: 쿠키샘플봇의 초대링크로 자기 서버에 쿠키샘플봇을 추가할 수 있습니다.```\n```$도움 봇의 명령어를 알려줍니다.```\n```$봇 의견: 봇의 대한 의견을 추가 하는 방법을 알려줍니다.```\n```$(포켓몬 이름): 그 포켓몬의 도감을 알려줍니다.```\n```$특성 (특성 이름): 특성 효과에 대해 알려줍니다.```');
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
    message.channel.send('```이상해씨 Bulbasaur```\n```전국도감: 001번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 심록, 엽록소```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 상철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 45 A: 49 B: 49 C: 65 D: 65 S: 45 합: 315```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 심록') {
    message.channel.send('```자신의 현재 HP가 전체의 ⅓ 이하일 때, 풀 타입 공격기의 위력이 1.5배 상승한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 엽록소') {
    message.channel.send('```날씨가 쾌청 상태일 때 스피드가 2배가 된다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$이상해풀') {
    message.channel.send('```이상해풀 Ivysaur```\n```전국도감: 002번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 심록, 엽록소```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 강철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 60 A: 62 B: 63 C: 80 D: 80 S: 60 합: 405```');
  }
});

client.on('message', (message) => {
  if(message.content === '$이상해꽃') {
    message.channel.send('```이상해꽃 Venusaur```\n```전국도감: 003번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 심록, 엽록소```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 강철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 80 A: 82 B: 83 C: 100 D: 100 S: 80 합: 525```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가이상해꽃') {
    message.channel.send('```메가이상해꽃  Mega Venusaur```\n```전국도감: 003번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 두꺼운지방```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 강철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 80 A: 100 B: 123 C: 122 D: 120 S: 80 합: 625```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 두꺼운지방') {
    message.channel.send('```불꽃과 얼음 타입 공격의 데미지를 반으로 줄인다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$미싱노') {
    message.channel.send('```미싱노  MissingNo```\n```전국도감: 000번```\n```성비: 없음```\n```타입: 노말, 격투```\n```특성: 없음```\n```알그룹: 없음```\n```방어상성\n2배: 격투, 비행, 에스퍼\n1배: 노말, 독, 드래곤, 땅, 물, 불꽃, 얼음, 전기, 풀\n0.5배: 바위, 벌레\n0배: 고스트```\n```종족치: 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$파이리') {
    message.channel.send('```파이리  Charmander```\n```전국도감: 004번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃```\n```특성: 맹화, 선파워```\n```알그룹: 괴수, 드래곤```\n```방어상성\n2배: 땅, 물, 바위\n1배: 격투, 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 전기\n0.5배: 강철, 벌레, 불꽃, 얼음, 페어리, 풀```\n```종족치: H: 39 A: 52 B: 43 C: 60 D: 50 S: 65 합: 309```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 맹화') {
    message.channel.send('```현재 HP가 전체 HP의 1/3일 때, 불꽃 타입 공격기의 위력이 1.5배 상승한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 선파워') {
    message.channel.send('```쾌청일 때 특공이 1.5배 상승하지만, 매 턴마다 체력이 1/8씩 줄어든다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$리자드') {
    message.channel.send('```리자드  Charmeleon```\n```전국도감: 005번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃```\n```특성: 맹화, 선파워```\n```알그룹: 괴수, 드래곤```\n```방어상성\n2배: 땅, 물, 바위\n1배: 격투, 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 전기\n0.5배: 강철, 벌레, 불꽃, 얼음, 페어리, 풀```\n```종족치: H: 58 A: 64 B: 58 C: 80 D: 65 S: 80 합: 405```');
  }
});

client.on('message', (message) => {
  if(message.content === '$리자몽') {
    message.channel.send('```리자몽  Charizard```\n```전국도감: 006번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃, 비행```\n```특성: 맹화, 선파워```\n```알그룹: 괴수, 드래곤```\n```방어상성\n4배: 바위\n2배: 물, 전기\n1배: 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 얼음\n0.5배: 강철, 격투, 페어리, 불꽃\n0.25배: 벌레, 풀\n0배: 땅```\n```종족치: H: 78 A: 84 B: 78 C: 109 D: 85 S: 100 합: 534```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가리자몽Y') {
    message.channel.send('```메가리자몽Y  Mega Charizard Y```\n```전국도감: 006번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃, 비행```\n```특성: 가뭄```\n```알그룹: 괴수, 드래곤```\n```방어상성\n4배: 바위\n2배: 물, 전기\n1배: 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 얼음\n0.5배: 강철, 격투, 페어리, 불꽃\n0.25배: 벌레, 풀\n0배: 땅```\n```종족치: H: 78 A: 104 B: 78 C: 159 D: 115 S: 100 합: 634```');
  }
});

client.login(token);