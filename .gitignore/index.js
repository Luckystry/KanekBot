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
            message.channel.send("Bienvenue à toi, lis les règles avant de te servire du discord y pas grand chose à lire :wink:. Fait ta présentation et le staff mettra les rôle qui te vont. Il y a des grades automatique qui donne des channel privée alors n'hésite pas à être présent, on va pas te manger =). Ici nous voulons des gens mature mais on sait rire alors profite bien.")
        }
    
        if (message.channel.id === '408191248256598016') {
            if (isNaN(message.content)) {
                message.delete()
                message.author.send("Merci de lire les règles, il n'y a pas besoin d'écrire :wink:")
        } 
    }

        if (message.content === prefix + "help"){
            message.channel.sendMessage("Liste des commandes: \n - *regles, \n - *new");
        }

    })  
