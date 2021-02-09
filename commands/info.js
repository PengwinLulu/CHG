module.exports = {
    name: 'info' ,
    aliases: ['aide','commandes'] ,
    cooldown: 10,
    description: "command mostly for test" ,

    execute(message) {

        message.channel.send('Demande à Lulu, je suis juste un bot... <:clannadDango:672811999427690536>') ;

    }
}