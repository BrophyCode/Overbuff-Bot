
const Dicsord = require('discord.js');
const bot = new Dicsord.Client();

console.log("Hello World");
const token = "";
const cmdToken = '$'


bot.on('ready', () =>{
    console.log(`Loggen in as ${bot.user.tag}`);
});


bot.on('message', msg=>{
    if(msg.content.substring(0, 1) == cmdToken){
        msg.reply("Nerd");
        switch(msg.content.substring(1)){
            case "":

            break;
        }
    }
})









bot.login(token)