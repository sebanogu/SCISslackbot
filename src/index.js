const Slackbot = require('slackbots');
const botInstance = new Slackbot({
        token:'xoxb-5068337783073-5049268168486-go5Bi7mcPjzxfMfcXTBeG7fe',
        name: 'SCISBot'
});
botInstance.on('open',()=> console.log("Bot is ON"));
botInstance.on('start',()=>{
        botInstance.postMessageToUser('seba.micorreo','Hola Seba');
});