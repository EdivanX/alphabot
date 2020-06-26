const Discord = require("discord.js");
exports.run = (client, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.reply('não estou tocando nada.');

    let fila = fetched.fila;
    let tocandoAgora = fila[0];

    let resp = `Tocando agora: ${tocandoAgora.title}`

    for (i = 1; i < fila.length; i++) {
        resp += `\n${i} ${fila[i].title}`
    }
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Informações da fila.`, client.user.avatarURL())
    .setDescription(`Tocando agora: ${resp}`)
    .setColor("#36393F");
    message.channel.send(embed)
}