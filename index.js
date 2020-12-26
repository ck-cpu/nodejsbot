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
    message.channel.send('현재 샘플은\n라이츄, 핫삼(이)가 있습니다. (총 2개)');
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
  if(message.content === '$도움') {
    message.channel.send('쿠키샘플봇에는 이 명령어가 존재합니다.\n$샘플 목록: 현재 등록 되어있는 샘플을 알려줍니다.\n$샘플 (포켓몬 이름): 그 포켓몬의 샘플을 알려줍니다. 쓰실 때 $샘플 목록을 확인하시고 쓰시기 바랍니다.\n$봇 초대링크: 쿠키샘플봇의 초대링크로 자기 서버에 쿠키샘플봇을 추가할 수 있습니다.\n$도움 봇의 명령어를 알려줍니다.\n$봇 의견: 봇의 대한 의견을 추가 하는 방법을 알려줍니다.');
  }
});

client.on('message', (message) => {
  if(message.content === '$봇 의견') {
    message.channel.send('쿠키샘플봇의 대한 의견은 https://discord.gg/xhPEgPenAb 이 서버의 #봇-의견 채널에서 작성해주세요.');
  }
});

const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzkxOTI5NDkxOTI0MTg5MjA0.X-WT0A.1293grkKh3Y0FoV18cj5TN1mO-U';
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content.startsWith('$전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('$전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

client.login(token);