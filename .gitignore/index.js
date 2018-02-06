    const Discord = require('discord.js');
    const bot = new Discord.Client();

    var prefix = ("*")

    bot.on('ready', function() {
        bot.user.setGame("Créateur: Nox");
        console.log("Connectedç");
    });

    bot.login("NDA2Mzg2NTUwOTY4OTQyNTky.DVIIBw.4fYscZ7Fb_9J1LIzgFoatWABApQ");

    bot.on('message', function (message) {
        if (message.content === '*regles') {
            message.channel.send("***-IL EST IMPÉRATIF*** de respecter chaque chanel. Toute actions entreprise dans le mauvais chanel débouchera sur un mute de 5 à 10 minutes et 1 avertissement(warn). \r -Au bout de ***3*** avertissements (warn) un kick du serveur sera effectuée. Au bout de 5 avertissements(warn) c'est un ban définitif du serveur. Pour suppression de warn il faut ***1 semaine*** sans aucune erreur. \r -Le respect d'autrui est ***PRIMORDIALE***. Toute insultes, menaces, harcèlement, incitation à la haine ou à la violence serra puni d'un kick immédiat du serveur. Toute récidives se verra ban définitivement avec possibilité de de- bannissement au bout de 2 jours. \r -***TOUT*** manquement de respect à un membre du staff sera puni d'un avertissement(warn).")
        }
    })

    bot.on('message', function (message) {
        if (message.content === '*new') {
            message.channel.send("Pour les nouveaux vous allez voir que vous pouvez choisir vos rôles par exemples H en réaction c'est homme et F en réaction c'est Femme, vous avez juste a cliquer sur la bonne réaction et ainsi de suite.")
        }
    
        if (message.channel.id === '408191248256598016') {
            if (isNaN(message.content)) {
                message.delete()
                message.author.send("Merci de lire les règles, il n'y a pas besoin d'écrire ;-)")
        } 
    }

        if (message.content === prefix + "help"){
            message.channel.sendMessage("Liste des commandes: \n - *regles, \n - *new");
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
            message.reply("Je suis dévouée à Nox. Sorry my friend.:slight_smile: ")
            console.log("Commande je t'aime effectué");

        }

    })  
