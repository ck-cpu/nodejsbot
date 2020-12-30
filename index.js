const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '$도움을 쳐보세요!' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.content === '$봇 초대링크') {
    message.channel.send('https://discord.com/oauth2/authorize?client_id=791929491924189204&scope=bot 로 추가해주시면 감사하겠습니다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$도움') {
    message.channel.send('```쿠키봇 명령어 리스트```\n```$샘플 목록: 현재 등록 되어있는 샘플을 알려줍니다.--현재 중지 상태입니다.```\n```$샘플 (포켓몬 이름): 그 포켓몬의 샘플을 알려줍니다. 쓰실 때 $샘플 목록을 확인하시고 쓰시기 바랍니다.--현재 중지 상태입니다.```\n```$봇 초대링크: 쿠키봇의 초대링크로 자기 서버에 쿠키봇을 추가할 수 있습니다.```\n```$도움: 봇의 명령어를 알려줍니다.```\n```$봇 의견: 봇의 대한 의견을 추가 하는 방법을 알려줍니다.```\n```$(포켓몬 이름): 그 포켓몬의 도감을 알려줍니다.(현재 0번~15번까지 사용 가능합니다.)```\n```$특성 (특성 이름): 특성 효과에 대해 알려줍니다. (현재 일부만 사용 가능합니다)```\n```$성격 (성격 이름): 성격의 능력치 변화를 알려줍니다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$봇 의견') {
    message.channel.send('쿠키봇의 대한 의견은 https://discord.gg/xhPEgPenAb 이 서버의 #봇-의견 채널에서 작성해주세요.');
  }
});

client.on('message', (message) => {
  if(message.content === '$미싱노') {
    message.channel.send('```미싱노  MissingNo```\n```전국도감: 000번```\n```성비: 없음```\n```타입: 노말, 격투```\n```특성: 없음```\n```알그룹: 없음```\n```방어상성\n2배: 격투, 비행, 에스퍼\n1배: 노말, 독, 드래곤, 땅, 물, 불꽃, 얼음, 전기, 풀\n0.5배: 바위, 벌레\n0배: 고스트```\n```종족치: 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$이상해씨') {
    message.channel.send('```이상해씨 Bulbasaur```\n```전국도감: 001번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 심록, 엽록소*```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 상철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 45 A: 49 B: 49 C: 65 D: 65 S: 45 합: 315```');
  }
});

client.on('message', (message) => {
  if(message.content === '$이상해풀') {
    message.channel.send('```이상해풀 Ivysaur```\n```전국도감: 002번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 심록, 엽록소*```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 강철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 60 A: 62 B: 63 C: 80 D: 80 S: 60 합: 405```');
  }
});

client.on('message', (message) => {
  if(message.content === '$이상해꽃') {
    message.channel.send('```이상해꽃 Venusaur```\n```전국도감: 003번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 심록, 엽록소*```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 강철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 80 A: 82 B: 83 C: 100 D: 100 S: 80 합: 525```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가이상해꽃') {
    message.channel.send('```메가이상해꽃  Mega Venusaur```\n```전국도감: 003번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 풀, 독```\n```특성: 두꺼운지방```\n```알그룹: 괴수, 식물```\n```방어상성\n2배: 불꽃, 비행, 얼음, 에스퍼\n1배: 강철, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 악\n0.5배: 격투, 물, 전기, 페어리\n0.25배: 풀```\n```종족치: H: 80 A: 100 B: 123 C: 122 D: 120 S: 80 합: 625```');
  }
});

client.on('message', (message) => {
  if(message.content === '$파이리') {
    message.channel.send('```파이리  Charmander```\n```전국도감: 004번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃```\n```특성: 맹화, 선파워*```\n```알그룹: 괴수, 드래곤```\n```방어상성\n2배: 땅, 물, 바위\n1배: 격투, 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 전기\n0.5배: 강철, 벌레, 불꽃, 얼음, 페어리, 풀```\n```종족치: H: 39 A: 52 B: 43 C: 60 D: 50 S: 65 합: 309```');
  }
});

client.on('message', (message) => {
  if(message.content === '$리자드') {
    message.channel.send('```리자드  Charmeleon```\n```전국도감: 005번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃```\n```특성: 맹화, 선파워*```\n```알그룹: 괴수, 드래곤```\n```방어상성\n2배: 땅, 물, 바위\n1배: 격투, 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 전기\n0.5배: 강철, 벌레, 불꽃, 얼음, 페어리, 풀```\n```종족치: H: 58 A: 64 B: 58 C: 80 D: 65 S: 80 합: 405```');
  }
});

client.on('message', (message) => {
  if(message.content === '$리자몽') {
    message.channel.send('```리자몽  Charizard```\n```전국도감: 006번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃, 비행```\n```특성: 맹화, 선파워*```\n```알그룹: 괴수, 드래곤```\n```방어상성\n4배: 바위\n2배: 물, 전기\n1배: 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 얼음\n0.5배: 강철, 격투, 페어리, 불꽃\n0.25배: 벌레, 풀\n0배: 땅```\n```종족치: H: 78 A: 84 B: 78 C: 109 D: 85 S: 100 합: 534```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가리자몽Y') {
    message.channel.send('```메가리자몽Y  Mega Charizard Y```\n```전국도감: 006번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃, 비행```\n```특성: 가뭄```\n```알그룹: 괴수, 드래곤```\n```방어상성\n4배: 바위\n2배: 물, 전기\n1배: 고스트, 노말, 독, 드래곤, 비행, 악, 에스퍼, 얼음\n0.5배: 강철, 격투, 페어리, 불꽃\n0.25배: 벌레, 풀\n0배: 땅```\n```종족치: H: 78 A: 104 B: 78 C: 159 D: 115 S: 100 합: 634```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가리자몽X') {
    message.channel.send('```메가리자몽X  Mega Charizard X```\n```전국도감: 006번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 불꽃, 드래곤```\n```특성: 단단한발톱```\n```알그룹: 괴수, 드래곤```\n```방어상성\n2배: 드래곤, 땅, 바위\n1배: 격투, 고스트, 노말, 독, 물, 비행, 악, 얼음, 에스퍼, 페어리\n0.5배: 강철, 벌레, 전기\n0.25배: 불꽃, 풀```\n```종족치: H: 78 A: 130 B: 111 C: 130 D: 85 S: 100 합: 634```');
  }
});

client.on('message', (message) => {
  if(message.content === '$꼬부기') {
    message.channel.send('```꼬부기  Squirtle```\n```전국도감: 007번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 물```\n```특성: 급류, 젖은접시*```\n```알그룹: 괴수, 수중1```\n```방어상성\n2배: 전기, 풀\n1배: 격투, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 비행, 악, 에스퍼, 페어리\n0.5배: 강철, 물, 불꽃, 얼음```\n```종족치: H: 44 A: 48 B: 65 C: 50 D: 64 S: 43 합: 314```');
  }
});

client.on('message', (message) => {
  if(message.content === '$어니부기') {
    message.channel.send('```어니부기  Wartortle```\n```전국도감: 008번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 물```\n```특성: 급류, 젖은접시*```\n```알그룹: 괴수, 수중1```\n```방어상성\n2배: 전기, 풀\n1배: 격투, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 비행, 악, 에스퍼, 페어리\n0.5배: 강철, 물, 불꽃, 얼음```\n```종족치: H: 59 A: 63 B: 80 C: 65 D: 80 S: 58 합: 405```');
  }
});

client.on('message', (message) => {
  if(message.content === '$거북왕') {
    message.channel.send('```거북왕  Blastoise```\n```전국도감: 009번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 물```\n```특성: 급류, 젖은접시*```\n```알그룹: 괴수, 수중1```\n```방어상성\n2배: 전기, 풀\n1배: 격투, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 비행, 악, 에스퍼, 페어리\n0.5배: 강철, 물, 불꽃, 얼음```\n```종족치: H: 79 A: 83 B: 100 C: 85 D: 105 S: 78 합: 530```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가거북왕') {
    message.channel.send('```메가거북왕   Mega Blastoise```\n```전국도감: 009번```\n```성비: 수: 87.5 암: 12.5```\n```타입: 물```\n```특성: 메가런처```\n```알그룹: 괴수, 수중1```\n```방어상성\n2배: 전기, 풀\n1배: 격투, 고스트, 노말, 독, 드래곤, 땅, 바위, 벌레, 비행, 악, 에스퍼, 페어리\n0.5배: 강철, 물, 불꽃, 얼음```\n```종족치: H: 79 A: 103 B: 120 C: 135 D: 115 S: 78 합: 630```');
  }
});

client.on('message', (message) => {
  if(message.content === '$캐터피') {
    message.channel.send('```캐터피  Caterpie```\n```전국도감: 010번```\n```성비: 수: 50 암: 50```\n```타입: 벌레```\n```특성: 인분, 도주*```\n```알그룹: 벌레```\n```방어상성\n2배: 바위, 불꽃, 비행\n1배: 강철, 고스트, 노말, 독, 드래곤, 물, 벌레, 악, 얼음, 에스퍼, 전기, 페어리\n0.5배: 격투, 땅, 풀```\n```종족치: H: 45 A: 30 B: 35 C: 20 D: 20 S: 45 합: 195```');
  }
});

client.on('message', (message) => {
  if(message.content === '$단데기') {
    message.channel.send('```단데기  Metapod```\n```전국도감: 011번```\n```성비: 수: 50 암: 50```\n```타입: 벌레```\n```특성: 탈피```\n```알그룹: 벌레```\n```방어상성\n2배: 바위, 불꽃, 비행\n1배: 강철, 고스트, 노말, 독, 드래곤, 물, 벌레, 악, 얼음, 에스퍼, 전기, 페어리\n0.5배: 격투, 땅, 풀```\n```종족치: H: 50 A: 20 B: 55 C: 25 D: 25 S: 30 합: 205```');
  }
});

client.on('message', (message) => {
  if(message.content === '$버터플') {
    message.channel.send('```버터플  Butterfree```\n```전국도감: 012번```\n```성비: 수: 50 암: 50```\n```타입: 벌레, 비행```\n```특성: 복안, 색안경*```\n```알그룹: 벌레```\n```방어상성\n4배: 바위\n2배: 불꽃, 비행, 얼음, 전기\n1배: 강철, 고스트, 노말, 독, 드래곤, 물, 악, 에스퍼, 페어리\n0.5배: 벌레\n0.25배: 격투, 풀\n0배: 땅```\n```종족치: H: 60 A: 45 B: 50 C: 90 D: 80 S: 70 합: 395```');
  }
});

client.on('message', (message) => {
  if(message.content === '$뿔충이') {
    message.channel.send('```뿔충이  Weedle```\n```전국도감: 013번```\n```성비: 수: 50 암: 50```\n```타입: 벌레, 독```\n```특성: 인분, 도주*```\n```알그룹: 벌레```\n```방어상성\n2배: 바위, 불꽃, 비행, 에스퍼\n1배: 강철, 고스트, 노말, 드래곤, 땅, 물, 악, 얼음, 전기\n0.5배: 독, 벌레, 페어리\n0.25배: 격투, 풀```\n```종족치: H: 40 A: 35 B: 30 C: 20 D: 20 S: 50 합: 195```');
  }
});

client.on('message', (message) => {
  if(message.content === '$딱충이') {
    message.channel.send('```딱충이  Kakuna```\n```전국도감: 014번```\n```성비: 수: 50 암: 50```\n```타입: 벌레, 독```\n```특성: 탈피```\n```알그룹: 벌레```\n```방어상성\n2배: 바위, 불꽃, 비행, 에스퍼\n1배: 강철, 고스트, 노말, 드래곤, 땅, 물, 악, 얼음, 전기\n0.5배: 독, 벌레, 페어리\n0.25배: 격투, 풀```\n```종족치: H: 45 A: 25 B: 50 C: 25 D: 25 S: 35 합: 205```');
  }
});

client.on('message', (message) => {
  if(message.content === '$독침붕') {
    message.channel.send('```독침붕  Beedrill```\n```전국도감: 015번```\n```성비: 수: 50 암: 50```\n```타입: 벌레, 독```\n```특성: 벌레의알림, 스나이퍼*```\n```알그룹: 벌레```\n```방어상성\n2배: 바위, 불꽃, 비행, 에스퍼\n1배: 강철, 고스트, 노말, 드래곤, 땅, 물, 악, 얼음, 전기\n0.5배: 독, 벌레, 페어리\n0.25배: 격투, 풀```\n```종족치: H: 65 A: 90 B: 40 C: 45 D: 80 S: 75 합: 395```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가독침붕') {
    message.channel.send('```메가독침붕  Mega Beedrill```\n```전국도감: 015번```\n```성비: 수: 50 암: 50```\n```타입: 벌레, 독```\n```특성: 적응력```\n```알그룹: 벌레```\n```방어상성\n2배: 바위, 불꽃, 비행, 에스퍼\n1배: 강철, 고스트, 노말, 드래곤, 땅, 물, 악, 얼음, 전기\n0.5배: 독, 벌레, 페어리\n0.25배: 격투, 풀```\n```종족치: H: 65 A: 150 B: 40 C: 15 D: 80 S: 145 합: 495```');
  }
});

client.on('message', (message) => {
  if(message.content === '$구구') {
    message.channel.send('```구구  Pidgey```\n```전국도감: 016번```\n```성비: 수: 50 암: 50```\n```타입: 노말, 비행```\n```특성: 날카로운눈, 갈지자걸음, 부풀린가슴*```\n```알그룹: 비행```\n```방어상성\n2배: 바위, 얼음, 전기\n1배: 강철, 격투, 노말, 독, 드래곤, 물, 불꽃, 비행, 악, 에스퍼, 페어리\n0.5배: 벌레, 풀\n0배: 고스트, 땅```\n```종족치: H: 40 A: 45 B: 40 C: 35 D: 35 S: 56 합: 251```');
  }
});

client.on('message', (message) => {
  if(message.content === '$피죤') {
    message.channel.send('```피죤  Pidgeotto```\n```전국도감: 017번```\n```성비: 수: 50 암: 50```\n```타입: 노말, 비행```\n```특성: 날카로운눈, 갈지자걸음, 부풀린가슴*```\n```알그룹: 비행```\n```방어상성\n2배: 바위, 얼음, 전기\n1배: 강철, 격투, 노말, 독, 드래곤, 물, 불꽃, 비행, 악, 에스퍼, 페어리\n0.5배: 벌레, 풀\n0배: 고스트, 땅```\n```종족치: H: 63 A: 60 B: 55 C: 50 D: 50 S: 71 합: 349```');
  }
});

client.on('message', (message) => {
  if(message.content === '$피죤투') {
    message.channel.send('```피죤투  Pidgeot```\n```전국도감: 018번```\n```성비: 수: 50 암: 50```\n```타입: 노말, 비행```\n```특성: 날카로운눈, 갈지자걸음, 부풀린가슴*```\n```알그룹: 비행```\n```방어상성\n2배: 바위, 얼음, 전기\n1배: 강철, 격투, 노말, 독, 드래곤, 물, 불꽃, 비행, 악, 에스퍼, 페어리\n0.5배: 벌레, 풀\n0배: 고스트, 땅```\n```종족치: H: 83 A: 80 B: 75 C: 70 D: 70 S: 101 합: 479```');
  }
});

client.on('message', (message) => {
  if(message.content === '$메가피죤투') {
    message.channel.send('```메가피죤투  Mega Pidgeot```\n```전국도감: 018번```\n```성비: 수: 50 암: 50```\n```타입: 노말, 비행```\n```특성: 노가드```\n```알그룹: 비행```\n```방어상성\n2배: 바위, 얼음, 전기\n1배: 강철, 격투, 노말, 독, 드래곤, 물, 불꽃, 비행, 악, 에스퍼, 페어리\n0.5배: 벌레, 풀\n0배: 고스트, 땅```\n```종족치: H: 83 A: 80 B: 80 C: 135 D: 80 S: 121 합: 579```');
  }
});

client.on('message', (message) => {
  if(message.content === '$꼬렛') {
    message.channel.send('```꼬렛  Rattata```\n```전국도감: 019번```\n```성비: 수: 50 암: 50```\n```타입: 노말```\n```특성: 도주, 근성, 의욕*```\n```알그룹: 육상```\n```방어상성\n2배: 격투\n1배: 강철, 노말, 독, 드래곤, 땅, 물, 바위, 벌레, 불꽃, 비행, 악, 얼음, 에스퍼, 전기, 페어리, 풀\n0배: 고스트```\n```종족치: H: 30 A: 56 B: 35 C: 25 D: 35 S: 72 합: 253```');
  }
});

client.on('message', (message) => {
  if(message.content === '$레트라') {
    message.channel.send('```레트라  Raticate```\n```전국도감: 020번```\n```성비: 수: 50 암: 50```\n```타입: 노말```\n```특성: 도주, 근성, 의욕*```\n```알그룹: 육상```\n```방어상성\n2배: 격투\n1배: 강철, 노말, 독, 드래곤, 땅, 물, 바위, 벌레, 불꽃, 비행, 악, 얼음, 에스퍼, 전기, 페어리, 풀\n0배: 고스트```\n```종족치: H: 55 A: 81 B: 60 C: 50 D: 70 S: 97 합: 413```');
  }
});

client.on('message', (message) => {
  if(message.content === '$알로라 꼬렛') {
    message.channel.send('``` 알로라 꼬렛  Alola Rattata```\n```전국도감: 019번```\n```성비: 수: 50 암: 50```\n```타입: 악, 노말```\n```특성: 의욕, 먹보, 두꺼운지방*```\n```알그룹: 육상```\n```방어상성\n4배: 격투\n2배: 벌레, 페어리\n1배: 강철, 노말, 독, 드래곤, 땅, 물, 바위, 볼꽃, 비행, 얼음, 전기, 풀\n0.5배: 악\n0배: 고스트, 에스퍼```\n```종족치: H: 30 A: 56 B: 35 C: 25 D: 35 S: 72 합: 253```');
  }
});

client.on('message', (message) => {
  if(message.content === '$알로라 레트라') {
    message.channel.send('``` 알로라 레트라  Alola Raticate```\n```전국도감: 020번```\n```성비: 수: 50 암: 50```\n```타입: 악, 노말```\n```특성: 의욕, 먹보, 두꺼운지방*```\n```알그룹: 육상```\n```방어상성\n4배: 격투\n2배: 벌레, 페어리\n1배: 강철, 노말, 독, 드래곤, 땅, 물, 바위, 볼꽃, 비행, 얼음, 전기, 풀\n0.5배: 악\n0배: 고스트, 에스퍼```\n```종족치: H: 75 A: 71 B: 70 C: 40 D: 80 S: 77 합: 413```');
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
  if(message.content === '$특성 두꺼운지방') {
    message.channel.send('```불꽃과 얼음 타입 공격의 데미지를 반으로 줄인다.```');
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
  if(message.content === '$특성 가뭄') {
    message.channel.send('```배틀에서 꺼내면 날씨를 5턴간 쾌청으로 바꾼다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 단단한발톱') {
    message.channel.send('```접촉기의 위력이 1.3배 증가한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 급류') {
    message.channel.send('```자신의 현재 HP가 전체 HP의 1/3일 때, 물 타입 공격기의 위력이 1.5배 상승한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 젖은접시') {
    message.channel.send('```비가 내릴 때, 매 턴마다 체력의 1/16을 회복한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 메가런처') {
    message.channel.send('```파동계 기술의 위력이 상승한다. (파동 계열 기술의 위력 1.5배, 치유파동 회복량 1.34배 증가)```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 인분') {
    message.channel.send('```공격 기술의 추가효과를 무시한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 도주') {
    message.channel.send('```야생 포켓몬으로부터 반드시 도망칠 수 있다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 탈피') {
    message.channel.send('```상태 이상을 회복할 때가 있다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 복안') {
    message.channel.send('```이 포켓몬이 사용하는 기술의 정확도가 30% 높아진다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 색안경') {
    message.channel.send('```효과가 별로인 기술의 위력이 배로 늘어난다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 벌레의알림') {
    message.channel.send('```이 포켓몬의 체력이 1/3이하일 시, 이 포켓몬의 벌레 타입 기술 위력이 50% 더 강해진다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 스나이퍼') {
    message.channel.send('```공격을 상대의 급소에 명중시켰을 경우, 위력이 상승한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 적응력') {
    message.channel.send('```타입이 같은 기술의 위력이 올라간다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 날카로운눈') {
    message.channel.send('```상대에게 명중률이 떨어지지 않는다. 상대의 회피율을 무시한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 갈지자걸음') {
    message.channel.send('```혼란 상태에 빠지면 회피율이 올라간다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 부풀린가슴') {
    message.channel.send('```방어력이 떨어지지 않는다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 노가드') {
    message.channel.send('```서로의 기술이 반드시 명중한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 근성') {
    message.channel.send('```상태이상에 걸렸다면 공격력이 1.5배 상승한다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 의욕') {
    message.channel.send('```물리공격의 위력이 50% 올라가지만 명중률이 20% 떨어진다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$특성 먹보') {
    message.channel.send('```나무열매를 일찍 먹는다.```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 노력') {
    message.channel.send('```변함 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 수줍음') {
    message.channel.send('```변함 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 온순') {
    message.channel.send('```변함 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 변덕') {
    message.channel.send('```변함 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 성실') {
    message.channel.send('```변함 없음```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 외로움') {
    message.channel.send('```공격 1.1배 상승 - 방어 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 고집') {
    message.channel.send('```공격 1.1배 상승 - 특공 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 개구쟁이') {
    message.channel.send('```공격 1.1배 상승 - 특방 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 용감') {
    message.channel.send('```공격 1.1배 상승 - 스피드 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 대담') {
    message.channel.send('```방어 1.1배 상승 - 공격 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 장난꾸러기') {
    message.channel.send('```방어 1.1배 상승 - 특공 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 촐랑') {
    message.channel.send('```방어 1.1배 상승 - 특방 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 무사태평') {
    message.channel.send('```방어 1.1배 상승 - 스피드 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 조심') {
    message.channel.send('```특공 1.1배 상승 - 공격 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 의젓') {
    message.channel.send('```특공 1.1배 상승 - 방어 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 덜렁') {
    message.channel.send('```특공 1.1배 상승 - 특방 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 냉정') {
    message.channel.send('```특공 1.1배 상승 - 스피드 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 차분') {
    message.channel.send('```특방 1.1배 상승 - 공격 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 얌전') {
    message.channel.send('```특방 1.1배 상승 - 방어 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 신중') {
    message.channel.send('```특방 1.1배 상승 - 특공 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 건방진') {
    message.channel.send('```특방 1.1배 상승 - 스피드 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 겁쟁이') {
    message.channel.send('```스피드 1.1배 상승 - 공격 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 성급') {
    message.channel.send('```스피드 1.1배 상승 -방어 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 명랑') {
    message.channel.send('```스피드 1.1배 상승 - 특공 0.9배 하락```');
  }
});

client.on('message', (message) => {
  if(message.content === '$성격 천진난만') {
    message.channel.send('```스피드 1.1배 상승 - 특방 0.9배 하락```');
  }
});

client.login(token);