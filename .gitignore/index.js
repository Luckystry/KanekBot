const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NDA2Mzg2NTUwOTY4OTQyNTky.DUyTRg.WQuOr1iueUEDQxqlYXYZFmWZP4o");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    bot.on('message', message => {
        if (message.content === prefix + "new"){
            message.channel.sendMessage("Pour les nouveaux allez dans le channel #vos-roles. Vous allez voir que vous pouvez choisir vos rôles par exemples H en réaction c'est homme et F en réaction c'est Femme, vous avez juste a cliquer sur la bonne réaction et ainsi de suite.");
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

   bot.on('message', message => {
    if (message.content === prefix + "regle"){
        message.channel.sendMessage("Merci de prendre connaissance des règles et de les appliquer #vos-roles.");
    }
    


    if (message.content === prefix + "embed"){
        var embed = new Discord.RichEmbed()
        .setTitle("EMBED")
        .setDescription("Ceci est un embed")
        .addField("help","Pasge d'aide",true)
        .addField("Embed01","Embed 01 !", true)
        .setColor("#0040FF")
        .setFooter("Bon moment parmis nous!")
    message.channel.sendEmbed(embed);
    }

})})})
 
