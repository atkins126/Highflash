module.exports = {
	name: 'links',
	description: 'Ссылки на наши ресурсы',
	execute(message, client) { 
    var t_log = {
      embed: {
        color: 0x2255ff,
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
      client.channels.cache.get("564022728143929370").send(t_log);
      var links_embed = {
        embed: {
          color: 0xaa88ff,
          author: {
            name: "Ссылки на наши ресурсы",
            icon_url: client.user.avatarURL()
          },
          description: "[Зайти на Discord-сервер поддержки](https://discord.gg/w9vBmCn)\n[Подписаться на YouTube-канал](https://www.youtube.com/channel/UCSPjn_Y0pLdPy6Ncb9NAdww)\n[Зайти в группу ВКонтакте](https://vk.com/tinelixgroup)\n[Twitter](https://twitter.com/tinelix)\n\n[Изучить исходные коды в репозитории Highflash](https://github.com/tinelix/highflash)\n[Пригласить бота на сервер](https://discordapp.com/oauth2/authorize?client_id=634271325057318943&permissions=8&scope=bot)",
        }
      };
      message.channel.send(links_embed);
	}
}