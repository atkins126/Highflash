module.exports = {
	name: 'help',
	description: 'Справка бота',
	async execute(message, client, botconfig, usePrefix) { 
    let args = message.content.split(" ").slice(1);
    console.log("``" + args + "``")
    if (!args) return;
    var t_log = {
      embed: {
        color: 0x007700,
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
	let userPrefix = "";
	if (usePrefix === "forcustomprefixonly.") {
		userPrefix = "";
	} else { 
		userPrefix = " `" + usePrefix + "`";
	}
	
        var help_p1_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `" + botconfig.prefix + "` `" + botconfig.prefix_a + "` `" + botconfig.prefix_b + "` `" + botconfig.prefix_c + "`" + userPrefix + ". Для выполнения пишите после префикса любую команду. Например, `" + botconfig.prefix + "about`",
            fields: [
              {
                name: "❓ Справка",
                value:
                  "`about` - о боте Highflash\r\n`report <отчет об ошибке>` - пожаловаться или отправить отчет об ошибке\r\n`donate` - помочь проекту\r\n`links` - ссылки на наши ресурсы",
              },
              {
                name: ":tools: Опции",
                value:
                  "`health` - проверить состояние бота\r\n`srvlist` - список входящих серверов бота\r\n`goals` - цели сервера"
              },
              {
                name: ":hammer: Модерация",
                value:
                  "`prune <кол-во>` - удалить сообщения\r\n`ban` - забанить кого-то\r\n`kick` - выгнать кого-то"
              },
              {
                name: ":information_source: Информационные команды",
                value:
                  "`avatar` - мой аватар\r\n`user` - о пользователе\r\n`server` - о сервере\r\n`channel` - о текстовом канале"
              }
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                ") | Страница 1 из 2"
            }
          }
        };
        var help_p2_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `" + botconfig.prefix + "` `" + botconfig.prefix_a + "` `" + botconfig.prefix_b + "` `" + botconfig.prefix_c + "`" + userPrefix + ". Для выполнения пишите после префикса любую команду. Например, `" + botconfig.prefix + "about`",
            fields: [
              {
                name: "👬 Развлечения",
                value:
                  '`8ball <вопрос>` - игра "Шар судьбы"\n`meme` - случайные мемы\n`photo` - мир фотографий\n`cat` - случайные фото кота\n`dog` - случайные фото собаки\n`ascii` - форматирование в ASCII\r\n`say` - сказать что-нибудь от имени бота'
              },
              {
                name: "Другое",
                value:
                  "`reverse <текст>` - реверс\r\n`binary <текст>` - конвертация в двоичный код\r\n`calc <выражение>` - калькулятор\r\n`wiki <поиск>` - поиск в Википедии\n`weather <поиск>` - погода"
              },
              {
                name: "⚙️ Настройки (только для администраторов)",
                value:
                  '`settings -prefix <префикс>` - задать пользовательский префикс'
              },
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                " (" +
                botconfig.date +
                ") | Страница 2 из 2"
            }
          }
        };
        var help_p3_embed = {
          embed: {
            color: 0x008be9,

            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL()
            },
            description:
              "Префикс: `" + botconfig.prefix + "` `" + botconfig.prefix_a + "` `" + botconfig.prefix_b + "` `" + botconfig.prefix_c + "`" + userPrefix + ". Для выполнения пишите после префикса любую команду. Например, `" + botconfig.prefix + "about`",
            fields: [
              {
                name: "⚙️ Настройки (только для администраторов)",
                value:
                  '`settings -prefix <префикс>` - задать пользовательский префикс'
              },
            ],
            footer: {
              text:
                "Версия " +
                botconfig.version +
                "👈 (" +
                botconfig.date +
                ") | Страница 3 из 3"
            }
          }
        };
    client.channels.cache.get("564022728143929370").send(t_log);
    let hlp_m = await message.channel.send(help_p1_embed);
    await hlp_m.react("1️⃣");
    await hlp_m.react("2️⃣");
    const collector = hlp_m.createReactionCollector(
      (reaction, user) =>
        reaction.emoji.name === "1️⃣" ||
        (reaction.emoji.name === "2️⃣" && user.id == message.author.id),
      { time: 40000 }
    );
    collector.on("collect", async r => {
      switch (r.emoji.name) {
        case "1️⃣":
          await hlp_m.edit(help_p1_embed);
          break;
        case "2️⃣":
          await hlp_m.edit(help_p2_embed);
          break;
      }
    });
}};
