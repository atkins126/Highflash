const Discord = require(`discord.js`);
const forEachTimeout = require('foreach-timeout');
const client = new Discord.Client();
const os = require('os');
const strftime = require('strftime')
const yt = require('ytdl-core')
const fs = require('fs');
const botconfig = require('./JSON/botconfig.json');
const data = require("./JSON/data.json");
const ProgressBar = require('progress');
const {promptMessage} = require('./functions.js');
const randomPuppy = require("random-puppy");
const snekfetch = require('snekfetch');
const requester = require('request');
const chooseArr = ["🗻", "📰", "✂"];
const http = require('http')
const express = require('express');
const app = express();
const intformat = require('./intformat.js');

  app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
}, 100000);

var messageId = "";


let prefix_a = botconfig.prefix_a
let prefix_b = botconfig.prefix_b
let prefix_c = botconfig.prefix_c

var servers = {};
var prefix = botconfig.prefix
var blockid = "396331064710135809"
client.login(botconfig.token)

function getHTTPResponce (url) {
	return new Promise((resolve, reject) => {
	var options = {
	method: "GET",
	url: url,
	headers: {
	'User-Agent': 'nodejs request',
	'X-Key': "9qpRc8M55pFb8qDN94jH"
	}
}
    
requester(options, (error, responce, body) => {
		resolve(body);
});		
	
});
};

client.on('ready', () => {	
			  try {
	process.stdout.write('\x1Bc');
    console.log(`Starting ${client.user.tag}...`);
    console.log("Loading JSON-modules...")
    console.log("Loading Voice Streamer...")
	console.log("Loading FS Component...")
	console.log("Loading Date/Time Format Component...")	
	console.log("Loading other components...")
	var timerId = setInterval(function() {
	process.stdout.write('\x1Bc');	
	  	  var str = 0;
	  var membc = '0';
	  var onlinecount = 0;
	  var ar = client.guilds.cache.array();
	  for (let i = 0; i < ar.length; i++){

		  str+=ar[i].presences.cache.size;
	  }
    console.log(`\n          ███████████   ██ ██████\n               ██   ██  ██   ██\n  ██████▓ ██   ██   ██  ██   ██\n ██       ██   ██   ██  ██   ██\n ██       ██   ██   ██  █    ██\n ██       ██ \n  █████████             computers\n\nXStep Bot ${botconfig.version} \(${botconfig.date}\)\n\(C\)opyright 2019-2020 DMIT Development. All rights reserved.\n\nThis script started successfully.`)
	console.log(`\nPing: ${client.ws.ping.toFixed(2)} ms | Memory usage: ${Math.round(process.memoryUsage().heapUsed / 1024)} kB\nServers: ${client.guilds.cache.size} | Users: ${client.users.cache.size} | Online: ${str}`)
    }, 2000);
} catch(e) {
     console.log(`\n          ███████████   ██ ██████\n               ██   ██  ██   ██\n  ██████▓ ██   ██   ██  ██   ██\n ██       ██   ██   ██  ██   ██\n ██       ██   ██   ██  █    ██\n ██       ██ \n  █████████             computers\n\nXStep Bot ${botconfig.version} \(${botconfig.date}\)\n\(C\)opyright 2019-2020 DMIT Development. All rights reserved.\n\nThis script started successfully.`)
	console.log("\nNo servers.")
	} 
});
function checkTime() {
	client.setTimeout(checkTime, (59 - new Date().getUTCMinutes) * 1000 * 60)	
	getHTTPResponce('https://google.com?any_else_api').then((body) => {
	var result = JSON.parse(body);
	var temp = 0;
	})
	.catch((error) => {

	})
}

  var timerId = setInterval(function users() {
	  	  var str = 0;
	  var membc = '0';
	  var onlinecount = 0;
	  var ar = client.guilds.cache.array();
	  for (let i = 0; i < ar.length; i++){

		  str+=ar[i].presences.cache.size;
	  }
	  	var moscow = new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow"})
		client.user.setActivity(`${strftime("%H:%M", new Date(moscow))} (UTC+3)`, {type: 'LISTENING'})
   timerId = setTimeout(function servers() {
   client.user.setActivity(`${client.guilds.cache.size} servers | ${botconfig.prefix}help`, {type: 'LISTENING'})
    timerId = setTimeout(function clock() {
	client.user.setActivity(`${client.users.cache.size} users | ${botconfig.prefix}help`, {type: 'LISTENING'})
	    timerId = setTimeout(function clock() {
	client.user.setActivity(`${str} online | ${botconfig.prefix}help`, {type: 'LISTENING'})
	}, 4000)
	}, 4000)
    }, 4000)
}, 32000)

function emoji (id) {
	return client.emojis.get(id).toString();
	}

	var blockmsg_embed = {
   embed: {
color: 0xff0000,
author: {
     name: "Команда недоступна"
	 },
    description: "Автор бота отключил Вам все команды по причине: *оскорбление в отзыве*"
	}};

    client.on('guildCreate', (guild) => {
			  	  	var t_log = {
   embed: {
color: 0x55ff55,
author: {
     name: "Servers Log"
},
	 thumbnail: {
		url: guild.iconURL(),
	 },
    description: "XStep Bot has joined the **" + guild.name + "** server! Now it has **" + client.guilds.cache.size + "** servers. \:clap\: \:clap\:\nThanks!",
	   fields: [
      {
           name: "Server ID",
           value: guild.id
    },
       {
           name: "Channels | Members | Roles | Online",
           value: guild.channels.cache.size + " ch. | " + guild.memberCount + " memb. | " + guild.roles.cache.size + " roles | " + guild.presences.cache.size + " online"
       },
    {
        name: "Onwer",
        value: guild.owner.user.tag + " \(" + guild.owner.user.id + "\)"
    },
	{
           name: "Created at",
           value: strftime('%d/%m/%Y %H:%M', new Date(guild.createdTimestamp))
    },
      ]
	}}
		var welcome_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Приветствие",
                icon_url: client.user.avatarURL()
            },
  description: ":wave: " + guild.owner + ", здравствуйте. Извините, что я Вас беспокоил, хорошо?\nЯ рад, что Вы или кто-то пригласил бота на Ваш сервер! Для справки пишите `dm~help`.\n\n**Это еще не все!** Чтобы воспользоваться полной версией <@507540368443834374>, поддержите автора бота с помощью команды `dm~donate`." 
					}
	}
		  client.channels.cache.get("564022728143929370").send(t_log);})
		  
		      client.on('guildDelete', (guild) => {
			  	  	var t_log = {
   embed: {
color: 0xff0000,
author: {
     name: "Servers Log"
},
	 thumbnail: {
		url: guild.iconURL(),
	 },
    description: "XStep Bot left, kicked out, banned from **" + guild.name + "** server! Now it has **" + client.guilds.cache.size + "** servers. \nCan you explain to the bot author what you didn't like? :worried:",
	}}
		  client.channels.cache.get("564022728143929370").send(t_log);})

client.on("ready", () => {
	process.stdout.write('\x1Bc'); 
	client.user.setActivity("Starting XStep Bot...", {type: 'LISTENING'});

});


client.on("message", message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + "health") || message.content.startsWith(prefix_a + "health") || message.content.startsWith(prefix_b + "health") || message.content.startsWith(prefix_c + "health")) {
	  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
      const plaform = os.platform()
      if(os.platform() === 'win32') {
          platform = "<:windows:670835960254169118> Windows (" + os.release() + ")" }
      else {
	         if(os.platform() === 'android') {
	         platform = "<:android:670837143467458560> Android с Termux (" + os.release() + ")"
             } else {
				      if(os.platform() === 'linux') {
						  platform = "<:linux:670836734447190016> Linux (" + os.release() + ")"
	  }}}

var bothealth = "";	  
	  if (client.ws.ping > 1500) {
		  bothealth = "Бот работает в онлайне, но ответит с большой задержкой."
	  } else { bothealth = "Бот работает в онлайне, оптимальная задержка." };
	var test_embed = {
   embed: {
color: 0xff9900, // цвет полоски слева в формате 0xRRGGBB, в данном случае указан оранжевый цвет
author: {
     name: "Проверка состояния бота", // заголовок встраиваемого (Embed) сообщения
     icon_url: client.user.avatarURL()
},
    description: bothealth, // описание встраиваемого сообщения
   fields: [
      {
           name: "💾 Используемая память в ОЗУ", // имя поля
           value: Math.round(process.memoryUsage().heapUsed / 1024) + " кБ" // значение
	  },
       {
           name: "🏓 Время отправки",
           value: client.ws.ping.toFixed(2) + " мсек"
       },
       {
         name: "🏘 Кол-во серверов | пользователей",
         value: client.guilds.cache.size + " | " + client.users.cache.size
       },
       {
           name: "⏱ Время работы",
           value: strftime('%H ч. %M мин. %S сек.', new Date(client.uptime - 86400000))
       },

		{
			name: "🛠 Платформа",
			value: platform
		},
         {
            name: "💡 Процессор",
            value: os.cpus()[0].model
         },
		 {
            name: "🗃️ Версия Node.js",
            value: process.version
         },
		 {
            name: "🗃️ Версия Discord.js",
            value: Discord.version
         },
      ]
   }
};
client.channels.cache.get("564022728143929370").send(t_log);
message.channel.send(test_embed); // message.channel.send(<имя переменного Embed>)
}});

  client.on('message', message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'about') || message.content.startsWith(prefix_a + "about") || message.content.startsWith(prefix_b + "about") || message.content.startsWith(prefix_c + "about")) {
			  	  	var t_log = {
   embed: {
color: 0x008800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
		var about_embed = {
   embed: {
color: 0x0088ff,
author: {
     name: "О боте XStep Bot",
     icon_url: client.user.avatarURL()
},
   fields: [
      {
           name: "Версия",
           value: botconfig.version + " (" + botconfig.date + ")"
    },
       {
           name: "Автор/Разработчик",
           value: "`DMIT Computers#7004`"
       },
	{
        name: "Исходные коды",
        value: "https://github.com/dmitryevdev/xstepbot"
    },
    {
        name: "Авторские права",
        value: "Copyright © DMIT Computers, 2019-2020. Все права защищены."
    },
      ]
   }
};
message.channel.send(about_embed);
    }
  }});
  

client.on('message', message => {
	if (!message.guild) return;
    if (message.content.startsWith(prefix + 'mass-say ')) {
		if(message.author.id !== "484921597015359488") return;
        client.guilds.forEach(guild => {
            let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.cache.get(client.user.id)).has('SEND_MESSAGES'));
            if (channels.size > 0) channels.first().send(message.content.split(" ").slice(1).join(" "));
        })
    }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban') || message.content.startsWith(prefix_a + "ban") || message.content.startsWith(prefix_b + "ban") || message.content.startsWith(prefix_c + "ban")) {
	  	   	  if(message.channel.type === 'dm') return;
			  
		    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
    const user1 = message.mentions.users.first();
    const member = message.guild.member(user1);
		  let args = message.content.split(" " + member + " ").slice(1).join(" ")
		  			  console.log(args);
		var banerr3_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Невозможно выполнить действия, поскольку бот/Вы не имеете права администратора.",

   }
};
		var banerr2_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.",

   }
};
		var banerr1_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Для того, чтобы забанить участника, напишите `xs.ban <упоминание> <причина>`",

   }
};
		var banerr4_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Произошла неизвестная ошибка. Повторите еще раз.",

   }
};
					var bansucc_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Модерация | " + user1.cache.tag,
                                         icon_url: client.user.avatarURL()
                                       },
                            fields: [
                                       {
                                           name: "Забанен пользователем",
                                           value: message.author.tag
                                       },
                                       {
                                           name: "Причина",
                                           value: args
                                       },
      ]
   }
};
    if (user1) {
		if(message.member.hasPermission('ADMINISTRATOR')) {		  		
      if (member) {
        member.ban({
          reason: message.author.tag + ': ' + args,
        }).then(() => {
			message.channel.send(bansucc_embed);
		  		var ban_log = {
   embed: {
color: 0xff8800,
author: {
     name: message.author.tag,
     icon_url: client.user.avatarURL()
},
    description: user1.tag + " banned by user " + message.author.tag,
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
    },
      ]
   }
};

	  client.channels.cache.get("564022728143929370").send(ban_log);
		})
        .catch(err => {
          message.channel.send(banerr4_embed);
          console.error(err);
        })
      } else { message.channel.send(banerr4_embed)  } } else {
        message.channel.send(banerr3_embed);
      }
    } else {
      message.channel.send(banerr1_embed);
    }
  }}
});


client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'audio play ')) {
		if(!servers[message.guild.id]) servers[message.guild.id] = {
			queue: []
		};
			var server = servers[message.guild.id]
	server.queue.push(message.content.split(" play ").slice(1).join(" "));
	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: message.author.tag,
     icon_url: client.user.avatarURL()
},
    description: message.author.tag + " listening to music from " + message.content.split(" play ").slice(1).join(" ") + " on **" + message.guild.name + "**",
	fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
   }
};
	var auderr1_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
  description: ":no_entry_sign: <@" + message.author + ">, прежде чем прослушать трек, обязательно войдите в любой голосовой канал!"
					}
	}
		var auderr2_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
  description: ":no_entry_sign: Ошибка открытия ссылки " + message.content.split(" play ").slice(1).join(" ") + ". \nПроверьте адрес ссылки и повторите попытку позднее.\nЕсли до сих пор не удается получить доступ к ссылке, введите другой адрес."
					}
	}

			var auderr4_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
  description: ":no_entry_sign: Видео (" + message.content.split(" play ").slice(1).join(" ") + ") не должно превышать 20 минут."
					}
	}
		var audload_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
  description: ":hourglass_flowing_sand: Загрузка..."
					}
	}
						  const streamOptions = { bitrate: 80000 };
						  client.channels.cache.get("564022728143929370").send(t_log);
   	 const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return message.channel.send(auderr1_embed);
    }
	    const valid = yt.validateURL(message.content.split(" play ").slice(1).join(" "));
    if (!valid) {
      return message.channel.send(auderr2_embed);	
    }
    voiceChannel.join()
      .then(connnection => {
		var server = servers[message.guild.id]
		message.channel.send(audload_embed).then(function (message) {
			var timerId = setInterval(function() {
				clearInterval(timerId);
                message.delete()
		}, 10000)}).catch(function() {
              //Something
             });
	    let stream = yt(server.queue[0], {
      format: "mp3", 
	  audioonly: true
        })
		server.queue.shift();
        const dispatcher = connnection.play(stream, streamOptions);
       dispatcher.on('end', () => {
			if(server.queue[0]) {
			server.dispatcher 
			return message.guild.voiceConnection.disconnect();
			};
       });
});
				yt.getInfo(message.content.split(" ").slice(1).join(" "), function(err, info) {
			var auderr2_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
  description: ":no_entry_sign: Ошибка открытия ссылки " + message.content.split(" play ").slice(1).join(" ") + ". \nПроверьте адрес ссылки и повторите попытку позднее.\nЕсли до сих пор не удается получить доступ к ссылке, введите другой адрес."
					}
	}
			let information = "(Нет информации)"
			let information_author = "(Нет информации)"
			let information_viewcount = "(Нет информации)"
			let information_published = "(Нет информации)"
				var timerId = setInterval(function() {
				clearInterval(timerId);
		if (err) { information = "(Нет информации)" 
		           information_author = "(Нет информации)"
				   information_viewcount = "(Нет информации)"
				   information_published = "(Нет информации)"
				   } 
			else {
				   var strftimeRU = strftime.localizeByIdentifier('ru_RU')
   				   information = info.player_response.videoDetails.title 
				   information_author = info.player_response.videoDetails.author
				   if (info.player_response.videoDetails.viewCount >= 1000000000) {
				   information_viewcount = (info.player_response.videoDetails.viewCount / 1000000000).toFixed(2) + " млрд." }
				   if (info.player_response.videoDetails.viewCount >= 1000000 && info.player_response.videoDetails.viewCount < 1000000000) {
				   information_viewcount = (info.player_response.videoDetails.viewCount / 1000000).toFixed(2) + " млн." }
				   if (info.player_response.videoDetails.viewCount >= 1000 && info.player_response.videoDetails.viewCount < 1000000) {
				   information_viewcount = (info.player_response.videoDetails.viewCount / 1000).toFixed(2) + " тысяч" }
				   if (info.player_response.videoDetails.viewCount < 1000) {
				   information_viewcount = info.player_response.videoDetails.viewCount }
				   information_published = strftimeRU('%d.%m.%Y', new Date(new Date(info.published).toLocaleString("en-US", { timeZone: "Europe/Moscow"})))
				   }
		var audplay_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
		description: '▶ <@' + message.author + ">: проигрывается **" + information + "** на " + streamOptions.bitrate / 1000 + " kbps",
 	   fields: [
    {
           name: "Автор",
           value: information_author
    },
	{
		   name: "Просмотров",
		   value: information_viewcount
	},
	{
		   name: "Опубликовано",
		   value: information_published
	},
      ]
						}	
	}
message.channel.send(audplay_embed);
		}, 11000)})
    if (!voiceChannel) {
      return message.channel.send(auderr3_embed);
				}}
var urlyt = { url : message.content.split(" play ").slice(1).join(" ")};

fs.writeFile("json/data.json", JSON.stringify(urlyt), function(err) {
    if(err) {
        return console.log(err);
    }
})}); 

client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'warn') || message.content.startsWith(prefix_a + "warn") || message.content.startsWith(prefix_b + "warn") || message.content.startsWith(prefix_c + "warn")) {
try {
let profile = require("./JSON/profile.json");
		var warnerr1_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Для того, чтобы выдать участнику предупреждение, напишите `xs.warn <упоминание> <канал для отправки варнов> <причина>`",

   }
};
		var warnerr2_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.",

   }
};
		var warnerr3_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Невозможно выполнить действия, поскольку бот/Вы не имеете права администратора.",

   }
};
		var warnerr4_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Произошла неизвестная ошибка. Повторите еще раз.",

   }
};
	  let member1 = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
          let gchannel = message.mentions.channels.first();
          let gchannel1 = message.guild.channels.find(t => t.id == gchannel.id);
          let args = message.content.split(" " + member1 + " " + gchannel1 + " ").slice(1).join(" ")
          const memberActions = message.guild.member(member1);          
          if(message.member.hasPermission("ADMINISTRATOR")) {
          if(args) {
          if(member1) {
          if(gchannel1) {
          if(!profile[member1.id]){
             profile[member1.id] = {
                   warns: 0,
                 }}
             fs.writeFile("./JSON/profile.json",JSON.stringify(profile),(err)=>{
             if(err) console.log(err);
          });

          profile[member1.id].warns++;
          fs.writeFile("./JSON/profile.json",JSON.stringify(profile),(err)=>{
                   if(err) console.log(err);
          });
					var bansucc_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Модерация | " + memberActions.user.tag,
                                         icon_url: client.user.avatarURL()
                                       },
                            fields: [
                                       {
                                           name: "Забанен пользователем",
                                           value: client.user.tag
                                       },
                                       {
                                           name: "Причина",
                                           value: "Предупреждений: " + profile[member1.id].warns + " из 3"
                                       },
      ]
   }
};
					var warnsucc_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Модерация | " + memberActions.user.tag,
                                         icon_url: client.user.avatarURL()
                                       },
                            fields: [
                                       {
                                           name: "Выдано предупреждение от",
                                           value: message.author.tag
                                       },
                                       {
                                           name: "Причина",
                                           value: args
                                       },
                                       {
                                           name: "Кол-во предупреждений",
                                           value: profile[member1.id].warns + " из 3"
                                       },
      ]
   }
};
          if(profile[member1.id].warns >=3) {
        memberActions.ban({
          reason: client.user.tag + ': выдано предупреждений ' + profile[member1.id].warns + ' из 3',
        }).then(() => {
			gchannel1.send(bansucc_embed);
          })} else {    gchannel1.send(warnsucc_embed); }
  var t_log = {
                embed: {
	        color: 0xff8800,
	        author: {
                             name: "Commands Log",
			},
   	        description: "Member " + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
} else {message.channel.send(warnerr1_embed);}
} else {message.channel.send(warnerr2_embed);}
} else {message.channel.send(warnerr1_embed);}
} else {message.channel.send(warnerr3_embed);}
} catch(e) {
if (e.name === "ReferenceError") {
console.error(e)};	
}};
});

client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'audio leave') || message.content.startsWith(prefix_a + "audio leave") || message.content.startsWith(prefix_b + "audio leave") || message.content.startsWith(prefix_c + "audio leave")) {
					  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	var audpause_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL()
            },
  description: "⏹️ Прослушивание трека остановлено.\nДля воспроизведения трека введите `xs.audio play`"
		}
					};
    message.channel.send(audpause_embed);	
	var server = servers[message.guild.id]
	if(message.guild.voice) message.guild.voice.channel.leave();		
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'goals') || message.content.startsWith(prefix_a + "goals") || message.content.startsWith(prefix_b + "goals") || message.content.startsWith(prefix_c + "goals")) {
	  	  	  	var t_log = {
   embed: {
color: 0x00aa00,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	var maxValue;
	var goalcompleted;
	var goalword;
	var goalcompletetedIcon
	var goaluncompletetedIcon
	var goalIcon
	var goalIcon2
	if(message.guild.memberCount <= 10) {
	  maxValue = 10;
	  goalcompleted = 0;
	  goalword = ' целей';
	  goalcompletetedIcon = "**:hourglass_flowing_sand: 10 участников**\n"
	  goaluncompletetedIcon = ":negative_squared_cross_mark: 50 участников\n:negative_squared_cross_mark: 100 участников\n:negative_squared_cross_mark: 200 участников\n:negative_squared_cross_mark: 500 участников\n:negative_squared_cross_mark: 1000 участников"
	  goalIcon = goaluncompletetedIcon	  
	};
	if(message.guild.memberCount <= 50 && message.guild.memberCount > 10) {
	  maxValue = 50;
	  goalcompleted = 1;
	  goalword = ' цель';
	  goalcompletetedIcon = ":white_check_mark: 10 участников\n**:hourglass_flowing_sand: 50 участников**\n"
	  goaluncompletetedIcon = ":negative_squared_cross_mark: 100 участников\n:negative_squared_cross_mark: 200 участников\n:negative_squared_cross_mark: 500 участников\n:negative_squared_cross_mark: 1000 участников"
	  goalIcon = goalcompletetedIcon 
	};	  
	if(message.guild.memberCount <= 100 && message.guild.memberCount > 50) {
	  maxValue = 100;
	  goalcompleted = 2;
	  goalword = ' цели';
	  goalcompletetedIcon = ":white_check_mark: 10 участников\n:white_check_mark: 50 участников\n**:hourglass_flowing_sand: 100 участников**"
	  goaluncompletetedIcon = "\n:negative_squared_cross_mark: 200 участников\n:negative_squared_cross_mark: 500 участников\n:negative_squared_cross_mark: 1000 участников"
	  goalIcon = goalcompletetedIcon 
	}	  
	if(message.guild.memberCount <= 200 && message.guild.memberCount > 100) {
	  maxValue = 200;
	  goalcompleted = 3;
	  goalword = ' цели';
	  goalcompletetedIcon = ":white_check_mark: 10 участников\n:white_check_mark: 50 участников\n:white_check_mark: 100 участников\n**:hourglass_flowing_sand: 200 участников**"
	  goaluncompletetedIcon = "\n:negative_squared_cross_mark: 500 участников\n:negative_squared_cross_mark: 1000 участников"
	  goalIcon = goalcompletetedIcon 
	};
	if(message.guild.memberCount <= 500 && message.guild.memberCount > 200) {
	  maxValue = 500;
	  goalcompleted = 4;
	  goalword = ' цели';
	  goalcompletetedIcon = ":white_check_mark: 10 участников\n:white_check_mark: 50 участников\n:white_check_mark: 100 участников\n**:hourglass_flowing_sand: 500 участников**"
	  goaluncompletetedIcon = "\n:negative_squared_cross_mark: 1000 участников"
	  goalIcon = goalcompletetedIcon 
	}
    if(message.guild.memberCount <= 1000 && message.guild.memberCount > 500) {
	  maxValue = 1000;
	  goalcompleted = 5;
	  goalword = ' целей';
	  goalcompletetedIcon = ":white_check_mark: 10 участников\n:white_check_mark: 50 участников\n:white_check_mark: 100 участников\n**:hourglass_flowing_sand: 500 участников**"
	  goaluncompletetedIcon = "\n:negative_squared_cross_mark: 1000 участников"
	  goalIcon = goalcompletetedIcon 
	}
 var bar = new ProgressBar('```Процесс: \n:bar│ :percent (:current из :total)```',{ 
	incomplete: ' ',
	complete: '█',
	total: maxValue,
	curr: message.guild.memberCount - 1,
	width: 20,
});
bar.tick(1);
 var bar2 = new ProgressBar('```Интенсивность: \n:bar│ :percent (:current из :total)```',{ 
	incomplete: ' ',
	complete: '█',
	total: message.guild.memberCount,
	curr: message.guild.presences.cache.size,
	width: 20,
});
bar2.tick(1);
	  var goal_embed = {
		  embed: {
		color: 0x4422ff,
        author: {
			name: 'Цели сервера',
			icon_url: message.author.avatarURL(),
		},	
	  description: bar.lastDraw + bar2.lastDraw +'\n**Текущая цель:** набрать ' + maxValue + ' участников (пройдено ' + goalcompleted + goalword + ' из ' + '5' + ').' ,		
	   fields: [
      {
           name: "Цели",
           value: goalcompletetedIcon + goaluncompletetedIcon		   
    },
      ],
	  },
	  }
message.channel.send(goal_embed);

  }}});


   client.on("message", message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "report") || message.content.startsWith(prefix_a + "report") || message.content.startsWith(prefix_b + "report") || message.content.startsWith(prefix_c + "report")) {
			var reportmsg_embed = {
        embed: {
            color: 0xff0055,

            author: {
                name: "Служба безопасности XStep",
                icon_url: client.user.avatarURL()
            },
  description: message.author.tag + " отправил жалобу: \"" + message.content.split(" ").slice(1) + "\"",
  	   fields: [
      {
           name: "Имя и ID сервера",
           value: message.guild.name + " | " + message.guild.id,
    },
       {
           name: "Имя и ID канала",
           value: message.channel.name + " | " + message.channel.id
       },
    {
        name: "ID пользователя",
        value: message.author.id
    },
      ]
		}};

			  	  	var t_log = {
   embed: {
color: 0x2255ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
			var supportbug_embed = {
        embed: {
            color: 0xff0055,

            author: {
                name: "Служба безопасности XStep",
                icon_url: client.user.avatarURL()
            },
  description: "❓ Автор бота ответит через некоторое время, дождитесь ответа."
		}
					};
    message.channel.send(supportbug_embed);
							  client.channels.cache.get("564022728143929370").send(t_log);

						      let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send(reportmsg_embed)})
   }}});


   client.on("message", async message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content === prefix + "help"  || message.content === prefix_a + "help" || message.content === prefix_b + "help" || message.content.startsWith === prefix_c + "help") {
var t_log = {
   embed: {
color: 0x007700,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	if (message.author.id === '484921597015359488') {
			var help_p1_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
  description: "Префикс: `xs.` `xs!` `хс.` `хс!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
                {
                    name: "❓ Справка",
                    value: "`about` - о боте XStep\r\n`report <описание жалобы>` - пожаловаться\r\n`donate` - помочь проекту\r\n`links` - ссылки на наши ресурсы"
                },
                {
                    name: ":tools: Опции",
                    value: "`health` - проверить состояние бота\r\n`srvlist` - список входящий серверов бота\r\n`goals` - цели сервера"
                },
                {
                    name: ":hammer: Модератор",
                    value: "`prune <кол-во>` - удалить сообщения\r\n`ban` - забанить кого-то\r\n`kick` - выгнать кого-то\r\n`warn` - выдать кому-то предупреждение\r\n`avatar` - мой аватар\r\n`user` - о пользователе\r\n`server` - о сервере"
                },
            ],
		 image: {
	       url: "https://cdn.discordapp.com/attachments/634674458770276371/714492674681602068/cover_1.png"
         },
		        footer: {
                          text: "Версия " + botconfig.version + " (" + botconfig.date + ") | Страница 1 из 2",
				},
        }
    };
			var help_p2_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
  description: "Префикс: `xs.` `xs!` `хс.` `хс!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
                {
                    name: "👬 Развлечения",
                    value: "`8ball <вопрос>` - игра \"Шар судьбы\"\n`goldenfh` - золотой фонд юмора\n`yearprogress` - годовая протяженность\n`meme` - рандомные мемы\n`photograph` - фотографический мир\n`randemoji` - рандомные эмоджи\r\n`say` - сказать что-нибудь от имени бота"
                },
                {
                    name: "🎵 Аудиоплеер",
                    value: "`audio play <ссылка>` - воспроизведение трека\r\n`audio stop` - остановка трека и выход из голосового канала"
                }
            ],
		 image: {
	       url: "https://cdn.discordapp.com/attachments/634674458770276371/714492674681602068/cover_1.png"
         },
		        footer: {
                          text: "Версия " + botconfig.version + " (" + botconfig.date + ") | Страница 2 из 2",
				},
        }
    };  
  } else {
			var help_p1_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
  description: "Префикс: `xs.` `xs!` `хс.` `хс!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
                {
                    name: "❓ Справка",
                    value: "`about` - о боте XStep\r\n`report <описание жалобы>` - пожаловаться\r\n`donate` - помочь проекту\r\n`links` - ссылки на наши ресурсы"
                },
                {
                    name: ":tools: Опции",
                    value: "`health` - проверить состояние бота\r\n`srvlist` - список входящий серверов бота\r\n`goals` - цели сервера"
                },
                {
                    name: ":hammer: Модератор",
                    value: "`prune <кол-во>` - удалить сообщения\r\n`ban` - забанить кого-то\r\n`kick` - выгнать кого-то\r\n`warn` - выдать кому-то предупреждение\r\n`avatar` - мой аватар\r\n`user` - о пользователе\r\n`server` - о сервере"
                },
            ],
		 image: {
	       url: "https://cdn.discordapp.com/attachments/634674458770276371/714492674681602068/cover_1.png"
         },
		        footer: {
                          text: "Версия " + botconfig.version + " (" + botconfig.date + ") | Страница 1 из 2",
				},
        }
    };
			var help_p2_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
  description: "Префикс: `xs.` `xs!` `хс.` `хс!`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
                {
                    name: "👬 Развлечения",
                    value: "`8ball <вопрос>` - игра \"Шар судьбы\"\n`ghf` - золотой фонд юмора\n`yearprogress` - годовая протяженность\n`meme` - рандомные мемы\n`photograph` - фотографический мир\n`randemoji` - рандомные эмоджи\r\n`say` - сказать что-нибудь от имени бота"
                },
                {
                    name: "🎵 Аудиоплеер",
                    value: "`audio play <ссылка>` - воспроизведение трека\r\n`audio stop` - остановка трека и выход из голосового канала"
                }
            ],
		 image: {
	       url: "https://cdn.discordapp.com/attachments/634674458770276371/714492674681602068/cover_1.png"
         },
		        footer: {
                          text: "Версия " + botconfig.version + " (" + botconfig.date + ") | Страница 2 из 2",
				},
        }
    };  
  }}
	client.channels.cache.get("564022728143929370").send(t_log);
  let hlp_m = await message.channel.send(help_p1_embed)
  await hlp_m.react('1️⃣');
  await hlp_m.react('2️⃣');
  const collector = hlp_m.createReactionCollector((reaction, user) => reaction.emoji.name === '1️⃣' || reaction.emoji.name === '2️⃣' && user.id == message.author.id, {time: 40000})
  collector.on('collect', async r => {
               switch(r.emoji.name) {
                 case '1️⃣':
                   await hlp_m.edit(help_p1_embed)
                 break
                 case '2️⃣':
                   await hlp_m.edit(help_p2_embed)
                  break
               }
            })
  }})

  
client.on('message', function(message) { 
    if (message.content.startsWith(prefix + "prune") || message.content.startsWith(prefix_a + "prune") || message.content.startsWith(prefix_b + "prune") || message.content.startsWith(prefix_c + "prune")) { 
    if(message.channel.type === 'dm') return;
		  	  	var t_log = {
   embed: {
color: 0xff0000,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
						  client.channels.cache.get("564022728143929370").send(t_log);
  let args = message.content.split(" ").slice(1);
		var deletemsg_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Пожалуйста, подождите...",
                icon_url: client.user.avatarURL()
            },
  description: ":hourglass_flowing_sand: Удаление сообщений..."
		}
					};
					
			var delmsgerr_o_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Внимание!",
                icon_url: client.user.avatarURL()
            },
  description: "⚠ Пожалуйста, укажите после этой команды любое число от 2 до 100 для удаления."
		}
					};
					
			var delmsgerr_t_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Ошибка",
                icon_url: client.user.avatarURL()
            },
  description: "🚫 Невозможно удалить сообщения, поскольку Вы или бот не имеет прав на управление сообщениями."
		}
					};

    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(delmsgerr_o_embed);
    
    // So we get our messages, and delete them. Simple enough, right?
	message.channel.send(deletemsg_embed)
    const fetched = message.channel.messages.fetch({limit: deleteCount}).then(function(fetched){ 
        message.channel.bulkDelete(fetched); 
       }, function(err){message.channel.send(delmsgerr_t_embed)})       
}}}); 


client.on('message', message => {
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "avatar") || message.content.startsWith(prefix_a + "avatar") || message.content.startsWith(prefix_b + "avatar") || message.content.startsWith(prefix_c + "avatar")) {
var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}

		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  						  client.channels.cache.get("564022728143929370").send(t_log);
	var myavatar_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аватар пользователя " + message.author.tag,
                icon_url: client.user.avatarURL()
            },
  image: {
	       url: message.author.avatarURL()
         },
		}
					};
    message.channel.send(myavatar_embed);
    let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send("*Показывает аватар " + message.author.tag + " \(" + message.author.id + "\)*")})
	}}});


  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(prefix + 'kick') || message.content.startsWith(prefix_a + "kick") || message.content.startsWith(prefix_b + "kick") || message.content.startsWith(prefix_c + "kick")) {
	  if(message.channel.type === 'dm') return;
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	      const user1 = message.mentions.users.first();
          const member = message.guild.member(user1);
		  		var kickerr1_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Невозможно выполнить действие, поскольку бот/Вы не имеете права администратора.",

   }
};
		var kickerr2_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.",

   }
};
		var kickerr3_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Для того, чтобы кикнуть участника, напишите `xs.kick <упоминание>`",

   }
};
		var kickerr4_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL()
                                       },
			                   description: "🚫 Произошла неизвестная ошибка. Повторите еще раз.",

   }
};
      if (user1) {
		  if(message.member.hasPermission('ADMINISTRATOR')) {
        if (member) {
var kick_log = {
   embed: {
color: 0xff8800,
author: {
     name: message.author.tag,
     icon_url: client.user.avatarURL()
},
    description: user1.tag + " kicked by user " + message.author.tag + " on **" + message.guild.name + "**",
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
    },
      ]
   }
};
					  		var kicksucc_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Модерация | " + user1.tag,
                                         icon_url: client.user.avatarURL()
                                       },
                            fields: [
                                       {
                                           name: "🚪 Кикнут пользователем",
                                           value: message.author.tag
                                       },
      ]
   }
};
	  						  client.channels.cache.get("564022728143929370").send(kick_log);
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.channel.send(kicksucc_embed);
          }).catch(err => {
            message.channel.send(kickerr4_embed);
            console.error(err);
          });
        } else {
          message.channel.send(kickerr2_embed);
		  }} else { message.channel.send(kickerr1_embed)}
      } else {
        message.channel.send(kickerr3_embed);
      }
    }
  }});

client.on('message', message => {
    if(message.author === client.user) return;
	  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'reset')) {
     message.channel.send('Перезагрузка...')
     .then(msg => client.destroy())
     .then(() => client.login(botconfig.token));
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]

}
  
    client.on('message', message => {
    if(message.author === client.user) return;
	if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'links') || message.content.startsWith(prefix_a + "links") || message.content.startsWith(prefix_b + "links") || message.content.startsWith(prefix_c + "links")) {
			  	  	var t_log = {
   embed: {
color: 0x2255ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  						  client.channels.cache.get("564022728143929370").send(t_log);
		     var links_embed = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Ссылки на наши ресурсы",
     icon_url: client.user.avatarURL()
},
   fields: [
   	  {
		   name: "Discord-сервер",
           value: "https://discord.gg/77JxMq3"
      },
      {
		   name: "YouTube",
           value: "https://youtube.com/DMITPlus"
      },
      {
		   name: "ВКонтакте",
           value: "https://vk.com/dmitcompgroup"
      },
	  {
		   name: "Twitter",
           value: "https://twitter.com/dmitcomputers"
      },
      {
		   name: "Telegram",
           value: "https://t.me/dmitcomp"
      },
	  {
		   name: "Исходный код бота",
		   value: "https://github.com/dmitryevdev/xstepbot"
	  },
	  {
		   name: "Приглашение бота",
		   value: "https://discordapp.com/oauth2/authorize?client_id=634271325057318943&permissions=8&scope=bot"
	  },
           ]
   }
}
        message.channel.send(links_embed);
	}
	}});
        function getResultRps(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Вы выиграли!";
            } else if (me === clientChosen) {
                return "Ничья!";
            } else {
                return "Вы проиграли.";
            }
        }
		
client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + 'photograph') || message.content.startsWith(prefix_a + "photograph") || message.content.startsWith(prefix_b + "photograph") || message.content.startsWith(prefix_c + "photograph")) {
var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}

client.channels.cache.get("564022728143929370").send(t_log); 
 // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["pic", "analog"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
		const imgaddr = async function(a, b) {
           await randomPuppy(random).then(url => {
			   		var meme_embed = {
			embed: {
				color: 0x3399cc,
				author: {
							name: "Фотографический мир",
							icon_url: client.user.avatarURL(),
						},
				image: {
					url: url,
				},
				footer: {
					text: "Источник: https://reddit.com/r/" + random,
				},
		}}
		message.channel.send(meme_embed);
		   });
		}
		imgaddr();

	  						  client.channels.cache.get("564022728143929370").send(t_log);
		
  }});	

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + 'meme') || message.content.startsWith(prefix_a + "meme") || message.content.startsWith(prefix_b + "meme") || message.content.startsWith(prefix_c + "meme")) {
var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}

client.channels.cache.get("564022728143929370").send(t_log); 
 // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["dankmeme", "meme", "me_irl"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
		const imgaddr = async function(a, b) {
           await randomPuppy(random).then(url => {
			   		var meme_embed = {
			embed: {
				color: 0x3399cc,
				author: {
							name: "Рандомные мемы",
							icon_url: client.user.avatarURL(),
						},
				image: {
					url: url,
				},
				footer: {
					text: "Источник: https://reddit.com/r/" + random,
				},
		}}
		message.channel.send(meme_embed);
		   });
		}
		imgaddr();

	  						  client.channels.cache.get("564022728143929370").send(t_log);
		
  }});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'eval')) {
		   let args = message.content.split(" ").slice(1);
		   if(message.author.id !== "484921597015359488" && message.author.id !== "708682885342691428") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
	
			     var evalresult_embed = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Отладчик",
     icon_url: client.user.avatarURL()
},
   fields: [
         {
		   name: "Листинг",
           value: "```" + message.content.split(" ").slice(1) + "```",
      },
      {
		   name: "Результат",
           value: "```js\n" + clean(evaled) + "```"
      },
           ],
   		   footer: {
                text: "Команда \"eval\" не доступна обычным пользователям и используется исключительно для разработчиков.",
			},
   }
}

      message.channel.send(evalresult_embed);
    } catch(err) {
					     var evalerr_embed = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Отладчик",
     icon_url: client.user.avatarURL()
},
   fields: [
         {
		   name: "Листинг",
           value: "```" + message.content.split(" ").slice(1) + "```",
      },
      {
		   name: "Описание ошибки",
           value: "```js\n" + clean(err) + "```"
      },
           ],
		footer: {
          text: "Команда \"eval\" не доступна обычным пользователям и используется исключительно для разработчиков.",
    },
   }
   
}
      message.channel.send(evalerr_embed);
    }
	}

});

function clean(text) {


  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on('message', message => {
	if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'ads +') || message.content.startsWith(prefix_a + "ads +") || message.content.startsWith(prefix_b + "ads +") || message.content.startsWith(prefix_c + "ads +")) {
	  	  	  	var t_log = {
   embed: {
color: 0xffff00,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	  if (message.author.id === '484921597015359488') {
		      let args = message.content.split(" + ").slice(1);
		      client.channels.cache.get('543748248012193792').send(args.join(" ")).catch(console.error);
	  } else {
		  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
     var ads_err_embed = {
   embed: {
color: 0xff0000,
author: {
     name: "Ошибка",
     icon_url: client.user.avatarURL(),
},
description: "🚫 Команда будет доступна только, если Вы сделаете пожертвование.\n\nПодробнее: `xs.donate` + ввод."
   }
};
message.channel.send(ads_err_embed);
	  }
		 }
});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + '8ball') || message.content.startsWith(prefix_a + "8ball") || message.content.startsWith(prefix_b + "8ball") || message.content.startsWith(prefix_c + "8ball")) {
	  	  	  	var t_log = {
   embed: {
color: 0x2200ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
 let answers = ["Да.", "Нет.", "Естественно.", "Безусловно.", "Согласен.", "Возможно.", "Конечно.", "Не могу ответить на этот вопрос", "Похоже\, Вы задаете слишком много вопросов. Пожалуйста, повторите попытку позже.", "Cомневаюсь.", "Это маловероятно.", "Не знаю, как вы, но я скажу, что нет.", "Да или нет? То, что вы задаете, это сложный вопрос."]; //массив ответов
      let rand = Math.floor(Math.random()*answers.length);
      var eightball_embed = {
         embed: {
            color: 0x0088ff,
            author: {
                      name: "Шар судьбы",
                      icon_url: client.user.avatarURL()
                    },
            fields: [
                       {
                         name: "💬 Ответ",
                         value: answers[rand]
                       },
                    ]
                }
                        };
message.channel.send(eightball_embed);
let str = "<@461516811855200256>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " спрашивает у \"Шара судьбы\" такой вопрос: " + message.content)}) 
  }
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'yearprogress') || message.content.startsWith(prefix_a + "yearprogress") || message.content.startsWith(prefix_b + "yearprogress") || message.content.startsWith(prefix_c + "yearprogress")) {
	  	  	  	var t_log = {
   embed: {
color: 0x2200ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {

	  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
var moscow = new Date()
moscow.getDate()
var d0 = new Date(('January 1, ' + moscow.getFullYear()));
var d1 = moscow
var d2 = new Date(moscow.getFullYear(), moscow.getMonth(), 32);
var d3 = (32 - d2.getDate())
var d4 = ((((d1.getDate() - 1) + (d1.getHours() / 24)) / ( d3 / 100))).toFixed(1);
var d5 = ((d1.getDay() + (d1.getHours() / 24)) / 0.07).toFixed(1)
var d6 = ((d1.getHours() + (d1.getMinutes() / 60)) / 0.24).toFixed(1);
var d1 = moscow
var daysCount = String(Math.round((d1.getTime() - d0.getTime() ) / (1000*60*60*24)));
var yearPercents = String((Math.round(Math.round((d1.getTime() - d0.getTime() ) / (1000*60*60*24))) / 3.65).toFixed(1));
		var yearprogress_embed = {
         embed: {
            color: 0x0088ff,
            author: {
                      name: "📅 Годовая протяженность",
                      icon_url: client.user.avatarURL()
                    },
            fields: [
                       {
                         name: "Год",
                         value: 'Прошло ' + daysCount + ' дн. / ' + yearPercents  + '%'
                       },
					   {
                         name: "Месяц",
                         value: 'Прошло ' + moscow.getDate() + ' дн. / ' + String(d4)  + '%'
                       },
					   {
                         name: "Неделя",
                         value: 'Прошло ' + String(moscow.getDay()) + ' дн. / ' + String(d5)  + '%'
                       },
					   {
                         name: "День",
                         value: strftime("%H:%M", new Date(moscow)) + " (UTC+7) / " + String(d6)  + '%'
                       },
                    ],
					footer: {
                       text: "Сегодня " + strftime('%d.%m.%Y', new Date()),
				    },
                }
                        };
message.channel.send(yearprogress_embed);
  }}});
  
client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'channel') || message.content.startsWith(prefix_a + "channel") || message.content.startsWith(prefix_b + "channel") || message.content.startsWith(prefix_c + "channel")) {
	  	  	  	var t_log = {
   embed: {
color: 0x2200ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  client.channels.cache.get("564022728143929370").send(t_log);
var parentes = "";	
var topic = "";	  
var nsfwwarn = "";	
	  if(!message.channel.topic) {
		 topic = "Отсутствует"
	  } else {
		 topic = message.channel.topic
	  };  
	  if(!message.channel.parent) {
		 parentes = "Без категории"
	  } else {
		 parentes = message.channel.parent
	  };
	  if(message.channel.nsfw ==! true) {
		 nsfwwarn = ""
	  } else {
		 nsfwwarn = "🔞 **На этом канале содержится контент 18+.**"
	  };	  
	  
      var ci_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: "О текстовом канале \"" + message.channel.name + "\"",
              icon_url: client.user.avatarURL()
                   },
			  description: nsfwwarn,
          fields: [
		    {
                 name: "ID",
                 value: message.channel.id
            },
            {
                 name: "📄 Описание",
                 value: topic
            },
            {
                 name: "🌳 Категория",
                 value: parentes
            },
           ],
		   	   	footer: {
                          text: "Текстовой канал создан " + strftime('%d.%m.%Y в %H:%M МСК', new Date(new Date(message.channel.createdTimestamp).toLocaleString("en-US", { timeZone: "Europe/Moscow"}))),
				},
       }
   };
   message.channel.send(ci_info);
  }}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + 'server') || message.content.startsWith(prefix_a + "server") || message.content.startsWith(prefix_b + "server") || message.content.startsWith(prefix_c + "server")) {
	  	  	  	var t_log = {
   embed: {
color: 0x3333ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	  if(message.channel.type === 'dm') return;
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  let afkCh = "Отсутствует"
	  if(message.guild.afkChannel && message.guild.afkChannel.name) {
	   afkCh = message.guild.afkChannel.name + " (" + message.guild.afkTimeout + ")"
	  } else { 
       afkCh = "Отсутствует" 
      }
	  	client.channels.cache.get("564022728143929370").send(t_log);
      let verifLvl = ['Отсутствует', '1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
	  message.guild.region = message.guild.region[0].toUpperCase() + message.guild.region.slice(1);
      var si_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: "О сервере \"" + message.guild.name + "\"",
              icon_url: client.user.avatarURL()
                   },
			  thumbnail: {
	        	url: message.guild.iconURL(),
	          },
          fields: [
		    {
                 name: "ID",
                 value: message.guild.id
            },
            {
                 name: "👑 Владелец",
                 value: message.guild.owner.user.tag + " (" + message.guild.owner.id + ")"
            },
            {
                 name: "🏡 Кол-во элементов сервера",
                 value: message.guild.channels.cache.size + " каналов | " + message.guild.roles.cache.size + " ролей | " + message.guild.memberCount + " участников | " + message.guild.presences.cache.size + " онлайн | " + message.guild.emojis.cache.size + " эмоджи"
            },
            {
                 name: "🔕 AFK-канал",
                 value: afkCh
            },
            {
                   name: "🏙 Регион/Страна",
                   value: message.guild.region
            },
            {
                 name: "🛠 Степень модерации",
                 value: message.guild.verificationLevel
            },
           ],
		   	   	footer: {
                          text: "Сервер создан " + strftime('%d.%m.%Y в %H:%M МСК', new Date(new Date(message.guild.createdTimestamp).toLocaleString("en-US", { timeZone: "Europe/Moscow"}))),
				},
       }
   };
message.channel.send(si_info)
let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " хочет узнать инфу о сервере, в которой он сидит. Нормально, а че?")}) 
   }
}});


client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + 'user') || message.content.startsWith(prefix_a + "user") || message.content.startsWith(prefix_b + "user") || message.content.startsWith(prefix_c + "user")) {
	  	  	  	var t_log = {
   embed: {
color: 0x3333ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
     },
      ]
		}}
	  if(message.channel.type === 'dm') return;
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
      let args = message.content.split(" ").slice(1);
	  let search_un = client.users.cache.find(user => user.username == args)
	  let member = message.guild.member(search_un || message.mentions.users.first() || message.guild.members.cache.get(args[0]))
	  let argsUser = message.guild.member.user || message.author
	  if(message.guild.member(args[0])) {
	  argsUser = message.guild.member(args[0]).user
	  } else {

	  if (member) {
			  argsUser = member.user
	  }
	  else {argsUser = message.author} }	
	  let statuses = {
		  online: "Онлайн",
		  idle: "Не активен",
		  dnd: "Не беспокоить",
		  offline: "Оффлайн"
	  }
	  let game
	  if (!argsUser.presence.activities.type) game = `${statuses[argsUser.presence.status]}`
	  else if (argsUser.presence.activities.type == 0) game = `Играет/Работает в **${argsUser.presence.activities.name}**`
	  else if (argsUser.presence.activities.type == 1) game = `Ведет стрим **${argsUser.presence.activities.name}**\n${argsUser.presence.activities.url}`
      else if (argsUser.presence.activities.type == 2) game = `Слушает в Spotify ${argsUser.presence.activities.name}`
      else if (argsUser.presence.activities.type == 3) game = `Смотрит **${argsUser.presence.activities.name}**`
        if (!argsUser.nickname) {
            var nickname = 'Отсутствует'
        } else {
            var nickname = argsUser.nickname
        }
      let day = 1000 * 60 * 60 * 24
	  let month = 30
	  let date1 = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow"}))
	  let date2 = new Date(new Date(argsUser.createdTimestamp).toLocaleString("en-US", { timeZone: "Europe/Moscow"}))
	  let date3 = new Date(new Date(message.guild.member(argsUser).joinedTimestamp).toLocaleString("en-US", { timeZone: "Europe/Moscow"}) )
	  if (Math.round(Math.abs((date1.getTime() - date3.getTime()) / day)) > 30 && Math.round(Math.abs((date1.getTime() - date2.getTime()) / day)) > 30) {
		  let diff1 = ((date1.getTime() - date2.getTime()) / day / month).toFixed(1)
		  let diff2 = ((date1.getTime() - date3.getTime()) / day / month).toFixed(1)
		  var ui_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: argsUser.bot ? "[Bot] О пользователе \"" + argsUser.tag + "\"" : "О пользователе \"" + argsUser.tag + "\" " ,
              icon_url: client.user.avatarURL()
                   },
			  thumbnail: {
	        	url: argsUser.avatarURL(),
	          },
          fields: [
		    {
                 name: "О себе",
                 value: "**ID:** " + argsUser.id + "\n**Никнейм:** " + nickname + "\n**Статус:** " + (game || 'Пользовательский статус') + "\n**Дата регистрации:** " + strftime('%d.%m.%Y в %H:%M МСК', new Date(new Date(argsUser.createdTimestamp).toLocaleString("en-US", { timeZone: "Europe/Moscow"}))) + " \(~" + diff1.toFixed(1) + " мес. назад\)"
            },
            {
                 name: "🔑 Дата входа в сервер",
                 value: strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp)) + " \(~" + diff2.toFixed(1) + " мес. назад\)"
            },
            {
                 name: "🗒 Роли (" + message.guild.member(argsUser).roles.cache.size + ")",
                 value: message.guild.member(argsUser).roles.cache.filter(r => r.id != message.guild.id).map(role => role.name).join(', ') || "Отсутствуют"
            },
           ]
       }
	  }
	  message.channel.send(ui_info);
	  } else {
	  let diff1 = (Math.abs((date1.getTime() - date2.getTime()) / day)).toFixed(1)
	  let diff2 = (Math.abs((date1.getTime() - date3.getTime()) / day)).toFixed(1)
	  
	  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
		  var ui_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: argsUser.bot ? "[Bot] О пользователе \"" + argsUser.tag + "\"" : "О пользователе \"" + argsUser.tag + "\" " ,
              icon_url: client.user.avatarURL()
                   },
			  thumbnail: {
	        	url: argsUser.avatarURL(),
	          },
          fields: [
		    {
                 name: "О себе",
                 value: "**ID:** " + argsUser.id + "\n**Никнейм:** " + nickname + "\n**Статус:** " + (game || 'Пользовательский статус') + "\n**Дата регистрации:** " + strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp)) + " \(" + diff1 + " дн. назад\)"
            },
            {
                 name: "🔑 Дата входа в сервер",
                 value: strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp)) + " \(" + diff2 + " дн. назад\)"
            },
            {
                 name: "🗒 Роли (" + message.guild.member(argsUser).roles.cache.size +")",
                 value: message.guild.member(argsUser).roles.cache.filter(r => r.id != message.guild.id).map(role => role.name).join(', ') || "Отсутствуют"
            },
           ]
       }
      }
message.channel.send(ui_info);
let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " хочет узнать инфу о сервере, в которой он сидит. Нормально, а че?")}) 
   }
}}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "say_private")) {
	if(message.author.id !== "484921597015359488") return;
	let args = message.content.split(" ").slice(1);
    const sayMessage = args.join(" ");
    message.delete().catch(console.log("\n\nError! I can not manage messages.\n\nReason\n" + message.author.tag + ": " + message.content)); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
}});
								  
								  
client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "rules")) {
	if(message.author.id !== "484921597015359488") return;
	var rules_embed = {
   embed: {
color: 0x87FF32,
author: {
     name: "Правила сервера DMIT Computers Team"
	 },
    description: "**⚠️ Незнание правил не освобождает Вас от ответственности. Поэтому, чтобы избежать предупреждений (варнов) или банов, изучите правила. Не забывайте также прочитать Условии использования Discord - https://discord.com/terms, так как вход разрешен только лицам старше 13 лет.**\n\n1. Материться можно, но не использовать его в качестве оскорблений участников\n2. Оскорблять, рейдерить, унижать, флудить, троллить, публично хейтить кого-либо запрещается.\n3. Попрошайничество роли администратора, младшего администратора и выпрашивание разбана также запрещено\n4. Строго запрещается публиковать NSFW-контент (к таким относятся порнография, треш-реклама, оружия, ЛГБТ), кроме <#716944492661571623>\n5. Использовать каналы **только по назначению!**\n6. Сервер не является рекламной площадкой. Соответственно, самопиар или пиар других ресурсов (инвайт Discord-серверов, ссылки на YouTube-каналы, паблики ВКонтакте, Telegram-чаты и пр.) запрещается. Исключения из 6-го правила: реклама в кастомном статусе и реклама в ЛС.\n7. Компьютерные игры и игры на смартфонах или планшетах лучше обсуждать в <#716944624610050128>, т. к. часть сервера незаинтересована играми (хотя кого я обманываю, интересует), а для ботов - <#716944560785457183>!\n8. Срачи устрайвате в только <#705792778243670057>, но учтите, что администрация сервера DMIT Computers не будет банить/кикать, дабы не участвовать в подобных срачах. (Иначе вы получите роль с ограниченныым режимом, там присутствует только мут).\n9. Нельзя использовать селфбота (даже с альтов)\n\nЕдинственная ссылка на сервер: https://discord.gg/FrnYyJW (лимит до 5 человек)\n\nПравила сервера исключены в <#716944492661571623>, кроме правила №6. С вопросами насчет правил нашего сервера свяжитесь в личку Дискорда (<@484921597015359488>). Администрация сервера DMIT Computers может забанить или кикнуть Вас без объяснения причины, так что меня сильно не ругайте.",
					footer: {
                          text: "Последние изменения: 3 июня 2020 г., 11:22 МСК",
				},
	}};
	var punishment_embed = {
   embed: {
color: 0x87FF32,
author: {
     name: "Как наказываем или предупреждаем участников?"
	 },
    description: "За нарушения правил сервера администрация (не только, но и боты) может выдать предупрежение, после трех предупрждений - получаете бан на неделю.\n\n**😐 Первое предупреждение**. На него ограничения не действуют. Может быть, кто-то случайно что-то не так делал.\n**😠 Второе предупреждение** - глобальный мут на 4 часа и запрет к чтению <#716944492661571623> (неограниченного чата) и ряда текстовых каналов, и запрет к прослушиванию голосовых каналов\n**😡 Третье предупреждение** - недельный бан\n**🤬 Третье после недельного бана нарушение** - пожизненный бан.\n\nСтрайки отслеживаются на канале <#716944103559921685>.",
					footer: {
                          text: "Последние изменения: 1 июня 2020 г., 14:45 МСК",
				},
	}};
	  message.channel.send(rules_embed);
    message.channel.send(punishment_embed);
        }
});

client.on('message', message => {
  if(message.author === client.user) return;
  try {
  if(message.member.hasPermission('ADMINISTRATOR')) return;
  } catch(e) { };
  if(message.content.startsWith("@everyone")) {
	  message.channel.send("<@" + message.author + ">, ну может хватит, а?")
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "say ") || message.content.startsWith(prefix_a + "say ") || message.content.startsWith(prefix_b + "say ") || message.content.startsWith(prefix_c + "say ")) {
	  	  	  	var t_log = {
   embed: {
color: 0x008800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
	let args = message.content.split(" ").slice(1);
    const sayMessage = args.join(" ");
    message.delete().catch(console.log("\n\nError! I can not manage messages.\n\nReason\n" + message.author.tag + ": " + message.content)); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage + "\n\n*Отправлено пользователем " + message.author.tag + ".*");
                                  }
});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "currency") || message.content.startsWith(prefix_a + "currency") || message.content.startsWith(prefix_b + "currency") || message.content.startsWith(prefix_c + "currency")) {
	  	  	  	var t_log = {
   embed: {
color: 0x008800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	  	client.channels.cache.get("564022728143929370").send(t_log);
	let args = message.content.split(" ").slice(1);

 }
});

   const QUERY_STRING_SETTINGS = [
    'client=chrome',
    'rls=en',
    'ie=UTF-8',
    'oe=UTF-8'
].join('&');

function getText(children) {
    if (children.children) return getText(children.children);
    return children.map(c => {
        return c.children ? getText(c.children) : c.data;
    }).join('');
}

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'randemoji') || message.content.startsWith(prefix_a + "randemoji") || message.content.startsWith(prefix_b + "randemoji") || message.content.startsWith(prefix_c + "randemoji")) {
	  	  	  	var t_log = {
   embed: {
color: 0x558800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
 let emoji = [":joy:", ":thinking:", ":grin:", ":slight_smile:", ":grimacing:", ":wink:", ":slight_smile:", ":worried:", ":angry:", ":rage:", ":hushed:", ":scream:", ":cry:", ":sob:", ":zipper_mouth:", ":raised_hands:", ":thumbsup:", ":thumbsdown:", ":frowning2:", ":ok_hand:"]; //массив ответов
      let rand = Math.floor(Math.random()*emoji.length);
      var emoji_embed = {
         embed: {
            color: 0x0088ff,
            author: {
                      name: "Рандомные эмоджи",
                      icon_url: client.user.avatarURL()
                    },
				description: emoji[rand],
                }
                        };
message.channel.send(emoji_embed);
let str = "<@461516811855200256>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " сдедал фокус-покус со словами: " + message.content)}) 
  }
}});

client.on("message", message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + "srvlist") || message.content.startsWith(prefix_a + "srvlist") || message.content.startsWith(prefix_b + "srvlist") || message.content.startsWith(prefix_c + "srvlist")) {
	  var str = "";
	  var membc = '0';
	  var onlinecount = '0';
	  var ar = client.guilds.cache.array();
	  for (let i = 0; i < ar.length; i++){
		  if  (ar[i].memberCount > 100) membc = ar[i].memberCount;
		  if  (ar[i].memberCount < 100 && ar[i].memberCount > 10) membc = ' ' + ar[i].memberCount;
		  if  (ar[i].memberCount < 10) membc = '  ' + ar[i].memberCount;
		  if  (ar[i].presences.cache.size > 100) onlinecount = ar[i].presences.cache.size;
		  if  (ar[i].presences.cache.size < 100 && ar[i].presences.size > 10) onlinecount = ' ' + ar[i].presences.cache.size;
		  if  (ar[i].presences.cache.size < 10) onlinecount = '  ' + ar[i].presences.cache.size;
		  str+=(i + 1) + '. ' + ar[i].name+'\n    Участников: ' + intformat.sprf("%3d", ar[i].memberCount) + ' | Онлайн: ' + intformat.sprf("%3d", ar[i].presences.cache.size) + ' | Регион: ' + ar[i].region[0].toUpperCase() + ar[i].region.slice(1) + '\r\n';
	  }
	  var srvlist_embed = {
		  embed: {
		color: 0x4422ff,
        author: {
			name: 'Список входящих серверов \(всего ' + client.guilds.cache.size + '\)',
			icon_url: message.author.avatarURL(),
		},	
	  description: '```' + str + '```',		
	  },
	  }
	 message.channel.send(srvlist_embed);
}});

client.on("message", async message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + "ghf") || message.content.startsWith(prefix_a + "ghf") || message.content.startsWith(prefix_b + "ghf") || message.content.startsWith(prefix_c + "ghf")) {
  	let items = ['Падает комп с виндой с 16-го этажа и думает: Вот сейчас бы зависнуть',
        'Вчера отвёл душу... Сегодня не могу вспомнить куда!?..',
        'Если училка Вас сильно задрала, попросите ее нажать на Alt+F4\nЯ: _попросил, училка ушла в оффлайн_\n_смех испанца_',
        'У кошки четыpе ноги: вход, выход, земля и питание',
        'Что же вы так убиваетесь? Вы же так никогда не убьётесь!',
        'Я добрый, просто я людей ненавижу',
        'Сшил дырки — получилась сетка',
        'Лечу от коронавируса по фотографии вашего компьютера',
        'Засолим огурцы по самые помидоры!',
        'Реестр запрещённых сайтов попал в реестр запрещённых сайтов, поскольку содержит информацию о запрещённых сайтах.',
        '— Вам понятно как работает фрезер или объяснить на пальцах?',
        'Чтобы выделятся из серой массы необязательно красить волосы в красный цвет и носить кольцо в носу. Достаточно просто не быть говном.',
        'По мнению Госдепа и ЕС, эти русские совсем обнаглели: плюнешь в морду — драться лезут.',
        'Когда поёт Тимати замолкают даже соловьи, потому что даже они не могут петь и блевать одновременно.',
        'Меня мучает один вопрос: в связи с чем эти ледяные штуки называются «сосульки», а карамельные конфетки — «леденцы»? Почему не наоборот?',
        'Приняли хорошо. Выгнали не сразу, били без злости, да и догоняли лениво.',
        'Бесит, когда люди идут на[цензура] недостаточно быстро.',
        '— А ты давно кактус на холодильнике поливала?\n— Это хлеб.',
        'Медведь проживший с цыганами 10 лет, не впадал в спячу, чтобы у него ничего не с[цензура]или.',
		'Microsoft Surface — самые лучшие планшеты среди планшетов от Майкрософт!',
		'Жопа велосипедиста, въехавшего в рекламный щит, 17 минут была лицом компании AVON.',
		'Санитария! Это санитария, не просто какой-то санитар из дурки!',
		'Здравствуйте, Вы из компании Орифлэйм?',
		'**Бизин:** "Давид, сука! Иди сюда!" _в его рекомендашки попал 55x55 - СОЛОВЬ[цензура]_\n**Давид:** "Мент, чего тебе надо, б[цензура]?! Пшел вон отсюдова, иначе я тебя возьму за нос! Встал и вышел. Ты зачем в помет нырнул?! Я тебя мыть не буду!',
		'> Что у тебя за избыточные сборки?\n\n**YTAdmin (он же Win102018TV)** ответил: \n"Любой ПК мощнее Celeron G4900 + UHD 610."\n"Как повысить быстродействие вашего ПК на 10000%? Главный секрет - оптимальная версия Windows, и это не десятка, а Windows 7"']
	  var humour_embed = {
		  embed: {
		color: 0x4422ff,
        author: {
			name: 'Золотой фонд юмора',
			icon_url: message.author.avatarURL(),
		},	
	  description: items[Math.floor(Math.random()*items.length)],		
	  },
	  }
	  var humour2_embed = {
		  embed: {
		color: 0x4422ff,
        author: {
			name: 'Золотой фонд юмора',
			icon_url: message.author.avatarURL(),
		},	
	  description: items[Math.floor(Math.random()*items.length)],		
	  },
	  }
	let humour_m = await message.channel.send(humour_embed);
  await humour_m.react('🔃');
  const collector = humour_m.createReactionCollector((reaction, user) => reaction.emoji.name === '🔃' && user.id == message.author.id, {time: 40000})
  collector.on('collect', async r => {
               switch(r.emoji.name) {
                 case '🔃':
                   await humour_m.edit(humour2_embed)
                 break
               }
            }) 
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'donate') || message.content.startsWith(prefix_a + "donate") || message.content.startsWith(prefix_b + "donate") || message.content.startsWith(prefix_c + "donate")) {
	  	  	  	var t_log = {
   embed: {
color: 0x00aa00,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.cache.get("564022728143929370").send(t_log);
	       var donate_embed = {
   embed: {
color: 0x44aa44,
author: {
     name: "Пожертвование",
     icon_url: client.user.avatarURL(),
},
description: "💵 За донат вы получите:\n1. Команду `xs.ads +` для рекламы Вашего сервера!\n\nhttps://donationalerts.com/r/dmitryevpc\n\nМин. - 15 RUB \(р.\)/6 UAH \(укр. гр.\)/0.15 USD \(долл. США\)"
   }
};
      message.channel.send(donate_embed)
let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.users.fetch(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " хочет узнать о пожертвовании или просто задонатить. ;\)")}) 
  }
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'rps') || message.content.startsWith(prefix_a + "rps") || message.content.startsWith(prefix_b + "rps") || message.content.startsWith(prefix_c + "rps")) {
	  	  	  	var t_log = {
				embed: {
					color: 0x00aa00,
					author: {
						name: "Commands Log",
					},
					description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
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
						},
						]
						}};
var resultg = "";
					var rpserr_embed = {
				embed: {
					color: 0x9933ff,
					author: {
							name: "Камень, ножницы, бумага",
							icon_url: client.user.avatarURL(),
					},
					description: 'Допустимые значения - `камень` `ножницы` `бумага`',
					fields: [
						{
						name: "Пример",
						value: "`xs.rps ножницы`"
						},
						]
					}};
	let args = message.content.split(" ").slice(1);
   let choice = args.join(' ').toLowerCase();
   	if (choice === '' || choice === ' ') message.channel.send(rpserr_embed);
      const choices = ['камень', 'бумага', 'ножницы', choice, 'камень', 'бумага', 'ножницы'];
        const response = choices[Math.floor(Math.random() * choices.length)];                                            
         if (choice === 'rock' || choice === 'камень') {
            if (response === 'rock' || response ===  'камень') resultg = 'Я выбрал камень, и ты выбрал камень.\nУ нас ничья!';
            else if (response === 'paper' || response === 'бумага') resultg = 'Я выбрал бумагу, и ты выбрал камень.\nВы проиграли.';
            else resultg = 'Я выбрал ножницы и ты выбрал камень.\nВы выиграли!';
        } else if (choice === 'paper' || choice === 'бумага') {
            if (response === 'rock' || response === 'камень') resultg = 'Я выбрал камень, и ты выбрал бумагу.\nВы выиграли!';
            else if (response === 'paper' || response === 'бумага') resultg = 'Я выбрал бумагу, и ты выбрал бумагу.\nУ нас ничья!';
            else resultg = 'Я выбрал ножницы и ты выбрал бумагу.\nВы проиграли.';
        } else if (choice === 'scissors' || choice === 'ножницы') {
            if (response === 'rock' || response === 'камень') resultg = 'Я выбрал камень, и ты выбрал ножницы.\nВы проиграли.';
            else if (response === 'paper' || response === 'бумага') resultg = 'Я выбрал бумагу, и ты выбрал ножницы.\nВы выиграли!';
            else resultg = 'Я выбрал ножницы, и ты выбрал ножницы.\nУ нас ничья!';
        } else {  
			if (choice !== '' || choice !== ' ') {		
            if (response === 'rock' || response === 'камень') resultg = 'Я выбрал камень, и ты выбрал ' + choice + '\nВы проиграли.';
            else if (response === 'paper' || response === 'бумага') resultg = 'Я выбрал бумагу, и ты выбрал ' + choice + '\nВы проиграли.';
            else if (response === 'scissors' || choice === 'ножницы') resultg = 'Я выбрал ножницы, и ты выбрал ' + choice + 'Вы проиграли.';
            else if (response === choice) resultg = 'Я выбрал ' + choice + ' и ты выбрал ' + choice + '\nУ нас ничья!'
		}};
				var rps_embed = {
				embed: {
					color: 0x9933ff,
					author: {
							name: "Камень, ножницы, бумага",
							icon_url: client.user.avatarURL(),
					},
					description: resultg || "Нет результата",
					}};
							message.channel.send(rps_embed);
  
}});
  
client.on(`message`, async message => {
	    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + "off")) {
		if(message.author.id !== "484921597015359488") return;
        message.channel.send("Завершение работы...");
      await client.destroy()	    
      timerId = setTimeout(function shutdown() {
      process.exit(-1)
      }, 4000)
    }});
