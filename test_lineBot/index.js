import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', (event) => {
  axios
    .get('https://cloud.hakka.gov.tw/Pub/Opendata/DTST20210700008.json')
    .then(({ data }) => {
      let result = []
      for (const d of data) {
        result.push(d.category)
      }
      event.reply(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

bot.listen('/', 3000, () => {
  console.log('機器人開啟中...')
})
