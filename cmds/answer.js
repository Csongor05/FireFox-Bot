const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "291221132256870400" && Owner.id !== "213588167406649346") return message.reply("Only the bot owner can use this command!")
   
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Használd: `f.answer ID  <üzenet>`")
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("Válasz az üzenetedre!")
   .addField("Válasz::", sayMessage)
   .addField("Support Szerver", "[FireFox :fox:](https://discord.gg/GT2FF4P)")
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setDescription(`Üzenet elküldve <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
      module.exports.help = {
        name: "answer",
        description: 'csak az Owner',
        usage: 'f.answer <ID> <üzenet>'
      }
