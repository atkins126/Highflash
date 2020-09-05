module.exports = {
	name: 'about',
	description: 'Информация о боте',
	execute(message, client, botconfig) { 
   let args = message.content.split(" ").slice(1);
    console.log("``" + args + "``")
    if (!args) return;
    var t_log = {
      embed: {
        color: 0x008800,
        author: {
          name: "Commands Log"
        },
        description:
          message.author.tag +
          " typing `" +
          message.content +
          "` on " +
          message.guild.name +
          "/" +
          message.channel.name,
        fields: [
          {
            name: "Server ID",
            value: message.guild.id
          },
          {
            name: "Channel ID",
            value: message.channel.id
          },
          {
            name: "User ID",
            value: message.author.id
          }
        ]
      }
    };
      client.channels.cache.get(botconfig.logs_channel).send(t_log);
      let botowner = client.users.cache.find(user => user.id === "484921597015359488");
      var about_embed = {
        embed: {
          color: 0x0088ff,
          author: {
            name: "О боте " + botconfig.name,
            icon_url: client.user.avatarURL()
          },
          fields: [
            {
              name: "Версия",
              value: botconfig.version + " (" + botconfig.date + ")"
            },
            {
              name: "Разработчик",
              value: botowner.tag
            },
            {
              name: "Исходные коды",
              value: "https://github.com/tinelix/highflash"
            },
          ],
            footer: {
              text: "Copyright © Tinelix, 2019-2020. Все права защищены."
            }
        }
      };
      message.channel.send(about_embed);
    }
}
