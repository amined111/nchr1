const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '516350859756699668') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`https://discord.gg/DSz9jE`,``,``]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})
client.login(process.env.BOT_TOKEN);
