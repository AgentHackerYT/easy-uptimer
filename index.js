const fetch = require('node-fetch')
const config = require('./config.js')
try{
setInterval(async function(){
fetch(config.url)
console.log('Uptimed')
}, 120000)
}catch(e){
  console.log('Uptimed')
}
