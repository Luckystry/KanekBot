const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Créateur NOX");
    console.log("Connectedç");
});

bot.login("NDA2Mzg2NTUwOTY4OTQyNTky.DVB-ZQ.47ONjyymj9eyiGfqTJpWS5WXGaE");

bot.on('message', function (message) {
    if (message.content === '*regles') {
        message.channel.send('Merci de prendre connaissance des règles de les appliquées.')
    }
  })

bot.on('message', function (message) {
    if (message.content === '*new') {
        message.channel.send("Pour les nouveaux vous allez voir que vous pouvez choisir vos rôles par exemples H en réaction c'est homme et F en réaction c'est Femme, vous avez juste a cliquer sur la bonne réaction et ainsi de suite.")
    }
  })

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*regles, \n -*new");
    }

    if (message.content === "wesh"){
        message.reply("On est pas a Villeurbanne ici")
        console.log("Commande wesh effectué");

    }

    if (message.content === "wsh"){
        message.reply("On est pas a Villeurbanne ici")
        console.log("Commande wesh effectué");

    }

    if (message.content === "Wesh"){
        message.reply("On est pas a Villeurbanne ici")
        console.log("Commande wesh effectué");

    }

    if (message.content === "WESH"){
        message.reply("On est pas a Villeurbanne ici")
        console.log("Commande wesh effectué");

    }

    if (message.content === "putain"){
        message.reply("il n'y'a pas de putain, que des dames qui travaillent")
        console.log("Commande putain effectué");

    }
    
    if (message.content === "Putain"){
        message.reply("il n'y'a pas de putain, que des dames qui travaillent")
        console.log("Commande Putain effectué");

    }

    if (message.content === "Je t'aime"){
        message.reply("Je suis dévouée à Nox. Dsl.")
        console.log("Commande je t'aime effectué");

    }

    bot.on('message', function (message) {
        if (message.content === '*new') {
            message.channel.send(">Ne pas envoyer pas de photo pédopornographique dans les salons du serveur. Vérifiez les sources de vos photos pour éviter tout problème \r >Respecter les lois en vigueurs en France et dans vos pays respectif. \r >Ne pas harceler, rabaisser et ne pas divulguer d’information sur les personnes sans leurs accords. \r >Ne pas spam et évitez les doubles postes. \r >Respectez les salons et leurs contenues. \r >Respectez les autres. \r >Ne pas demander de rôles. \r >Les pubs sont totalement interdites. \r >Le troll est interdit.")
        }
      })
})
