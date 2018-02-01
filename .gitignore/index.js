    const Discord = require('discord.js');
    const bot = new Discord.Client();

    var prefix = ("*")

    db.defaults({ histoires: [], xp: []}).write

    bot.on('ready', function() {
        bot.user.setGame("Créateur: Nox");
        console.log("Connectedç");
    });

    bot.login("NDA2Mzg2NTUwOTY4OTQyNTky.DVIIBw.4fYscZ7Fb_9J1LIzgFoatWABApQ");

    bot.on('message', function (message) {
        if (message.content === '*regles') {
            message.channel.send(">Ne pas envoyer pas de photo pédopornographique dans les salons du serveur. Vérifiez les sources de vos photos pour éviter tout problème \r >Respecter les lois en vigueurs en France et dans vos pays respectif. \r >Ne pas harceler, rabaisser et ne pas divulguer d’information sur les personnes sans leurs accords. \r >Ne pas spam et évitez les doubles postes. \r >Respectez les salons et leurs contenues. \r >Respectez les autres. \r >Ne pas demander de rôles. \r >Les pubs sont totalement interdites. \r >Le troll est interdit.")
        }
    })

        var msgauthor = message.author.id;

        if(message.author.bot)return;

        if(!db.get("xp").find({user: msgauthor}).value()){
            db.get("xp").push({user: msgauthor, xp: 1}).write();
        }else{
            var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
            console.log(userxpdb);
            var userxp = Object.values(userxpdb)
            console.log(userxp);
            console.log(`Nombre d'xp : ${userxp[1]}`)

            db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();

        }

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

        if (message.content === prefix + "xpstat"){
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
            var xpfinal = Object.values(xp);
            var xp_embed = new Discord.RichEmbed()
                .setTitle('xp de ${message.author}')
                .setDescription("Voici tout tes xp")
                .addField("xp :", '${xpfinal[1]} xp')
            message.channel.send({embed: xp_embed});
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
