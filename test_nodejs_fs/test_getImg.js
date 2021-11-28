const axios = require('axios')

axios.get('https://user-images.githubusercontent.com/88765055/143734451-f9f2294e-0b52-4fc2-83ef-722a53eb46a3.jpg').then(({data}) => {
  console.log('有抓到圖片')
}).catch(error=>{
  console.log('沒有抓到圖片')
})