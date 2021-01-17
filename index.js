client.login(token);

const Discord = require("discord.js")
const intent_list = new Discord.Intents(["GUILD_MEMBERS", "GUILD_MESSAGES", "GUILDS", "GUILD_INVITES"])
const client = new Discord.Client({ ws: { intents: intent_list } })
const token = process.env.token

client.on("ready", () => {
  console.log("켰다.")
})

client.on('message', message => {
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
        embed.setDescription('증상이 있으실 경우 주변 접촉자에게 알리신 후 인근 보건소를 찾아주시기 바랍니다(코로나 자동 알림 시스템)')
        embed.addField(`대한민국 총 확진자수`, `${overview.total_confirmed_person}명`, true)
        embed.addField(`어제 확진자수`, overview.yesterday_confirmed_person + `명`, true)
        embed.addField(`오늘 확진자수`, overview.current_confirmed_person + `명`, true)
        // embed.addField(`오늘 어제지금시간   -   현재지금시간의 확진자`, overview.current_confirmed_person_diff + `명`, true)
        message.channel.send(embed)
    
      })
    }
    })

client.login(token)