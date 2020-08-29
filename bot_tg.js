const Slimbot = require('slimbot');
const slimbot = new Slimbot(process.env.TOKENTG);
const botconfig = require('./JSON/botconfig.json');
const os = require("os");
const { promptMessage } = require("./functions.js");
const randomPuppy = require("random-puppy");
const math = require('mathjs');
const strftime = require('strftime');

// Register listeners

slimbot.on('message', message => {
  if(message.is_bot === true || !message.text.startsWith("/")) return;
  slimbot.sendMessage(-1001480798804, `*Логи команд*\n${message.from.first_name} пишет \`${message.text}\` в чате ` + (message.chat.title || "(личное сообщение)") + `\nID пользователя: ${message.from.id}\nID чата: ${message.chat.id}`, {
        parse_mode: "Markdown"
    });
  if(message.text === "/help" || message.text === "/help@highflashbot") {
    slimbot.sendMessage(message.chat.id, botconfig.name + " теперь и в Telegram! Бот пока что сырой, но все же стараемся портировать часть кода из Discord.js и VK Bot API.\n\n/help - список команд\n/health - состояние бота\n/chat\_info - о беседе\n/user\_info - о пользователе\n/meme - мемы Reddit\n/photo - мир фото Reddit\n/calc - калькулятор\n/binary - преобразование текста в двоичный код\n/reverse - текст в обратном порядке.\n\nВерсия " + botconfig.tgversion + " от " + botconfig.tgdate + ".");
  }
  if(message.text === "/health" || message.text === "/health@highflashbot") {
    const plaform = os.platform();
    if (os.platform() === "win32") {
      platform = "Windows (" + os.release() + ")";
    } else {
      if (os.platform() === "android") {
        platform =
          "Android с Termux (" +
          os.release() +
          ")";
      } else {
        if (os.platform() === "linux") {
          platform = "Linux (" + os.release() + ")";
        }
      }
    }

    slimbot.sendMessage(message.chat.id, `💻 *Сведения о хосте, на котором запущен бот*\n\nИспользуемая память: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} МБ (${Math.round(process.memoryUsage().heapUsed / 1024)} кБ)\nПрограммная платформа: ${platform}\nПроцессор: ${os.cpus()[0].model}\nАптайм: ${Math.floor((process.uptime() * 1000) / 86400000) + strftime(":%H:%M:%S", new Date(process.uptime() * 1000))}\n\nБот Highflash использует Node.js версии ${process.version} и библиотеку Slimbot`, {
        parse_mode: "Markdown"
    });
  }

  if(message.text === "/user_info" || message.text === "/user_info@highflashbot") {
    console.log(message);
    let first_name = "";
    let last_name = "";
    let is_bot = "";

    if(!message.from.first_name) {
        first_name = "";
    } else {
        first_name = " " + message.from.first_name
    }
    if(!message.from.last_name) {
        last_name = "";
    } else {
        last_name = " " + message.from.first_name
    };

    if(message.from.is_bot === true) {
        is_bot = "Да";
    } else {
        is_bot = "Нет"
    };

    slimbot.sendMessage(message.chat.id, "*👤 О пользователе" + first_name + last_name + "*\nID: " + message.from.id + "\nБот: " + is_bot, {
        parse_mode: "Markdown"
    });
  }
  if(message.text === "/chat_info" || message.text === "/chat_info@highflashbot") {
    console.log(message);
    var membsCount = "";
    let type = "";
    let title = "";
    let description = "";
    let pinned_msg = "";

    const chat_info = slimbot.getChat(message.chat.id);
slimbot.getChatMembersCount(message.chat.id).then(mc => {
      console.log(mc.result)
    if(!mc.result){
      membsCount = "Н/Д"
    } else {
      membsCount = mc.result
    }
    if(!chat_info.pinned_message) {
      pinned_msg = "Отсутствует"
    } else {
      pinned_msg = "\"" + chat_info.pinned_message + "\""
    }

    if(message.chat.type === "private") {
        type = "Приватный чат"
    } else if(message.chat.type === "group") {
        type = "Группа"
    } else if(message.chat.type === "supergroup") {
        type = "Супергруппа"
    } else if(message.chat.type === "channel") {
        type = "Telegram-канал"
    }

    if(chat_info.description === "" || !chat_info.description) {
      description = "Отсутствует"
    } else {
      description = chat_info.description
    }

    if(!message.chat.title) {
        title = "";
    } else {
        title = " " + message.chat.title
    };

    slimbot.sendMessage(message.chat.id, "*💬 О беседе" + title + "*\nID: " + message.chat.id + "\nТип: " + type + "\nОписание: " + description + "\nКол-во участников: " + membsCount + "\nЗакрепленное сообщение: " + pinned_msg, {
        parse_mode: "Markdown"
    });
  });
  }

  if(message.text === "/meme" || message.text === "/meme@highflashbot") {
	const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const imgaddr = async function(a, b) {
      await randomPuppy(random).then(url => {
        slimbot.sendPhoto(message.chat.id, url);
		slimbot.sendMessage(message.chat.id, `Источник: r/${random}`);
      });
    };
    imgaddr();
  }


  if(message.text === "/photo" || message.text === "/photo@highflashbot") {
    const subReddits = ["pic", "analog"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    const imgaddr = async function(a, b) {
      await randomPuppy(random).then(url => {
        slimbot.sendPhoto(message.chat.id, url);
		slimbot.sendMessage(message.chat.id, `Источник: r/${random}`);
      });
    };
    imgaddr();
  }

  if(message.text.startsWith("/reverse") || message.text === "/reverse@highflashbot") {
        var msg_array = message.text.split(" ").slice(1).join(" ")
        var msg_string = message.text.split(" ").slice(1).join(" ")
        if(!msg_array || !msg_string) return slimbot.sendMessage(message.chat.id, "*🚫 Ошибка*\nПосле команды `reverse` следует ввести любой текст.", {
        parse_mode: "Markdown"
        });
        var reverse_string = "";
        var word;
        var split_word;
        for (var i = msg_string.length - 1; i >= 0; i -= 1) {

            reverse_string += msg_string[i];
        }
    slimbot.sendMessage(message.chat.id, `*Конвертация текста в обратный порядок*\n${reverse_string}`, {
        parse_mode: "Markdown"
    });
	    function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
  }

  if(message.text.startsWith("/binary") || message.text === "/binary@highflashbot") {
        var fmt_array = message.text.split(" ").slice(1).join(" ")
        var msg_string = message.text.split(" ").slice(1).join(" ")
        if(!fmt_array || !msg_string) return slimbot.sendMessage(message.chat.id, "*🚫 Ошибка*\nПосле команды `binary` следует ввести любой текст.", {
        parse_mode: "Markdown"
        });
        var colour_array = ["1211996", "3447003", "13089792", "16711858", "1088163", "16098851", "6150962"]
        var randomNumber = getRandomNumber(0, colour_array.length - 1);
        var randomColour = colour_array[randomNumber];
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                        "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С",
                        "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "?", ",", "!", ".", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    var binaryMessage = translateMessage(fmt_array, "binary", alphabet)

    slimbot.sendMessage(message.chat.id, `*💻 Конвертация текста в двоичный код*\n\`\`\`${binaryMessage}\`\`\``, {
        parse_mode: "Markdown"
    });


	    function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function translateMessage(fmt_array, fontList, alphabet) {
            var convertedFontMessage = "";
            var translatedLetter = "";
        
            // EXTRACTING THE APPROPRIATE CHARACTER LIST.
            var font_cmds_object = require('./JSON/font_lists.json');
            var characterList = font_cmds_object[fontList];
        
            for (var i = 0; i < fmt_array.length; i += 1) {
                var letter = fmt_array[i];
        
                if (alphabet.indexOf(letter) >= 0) {
                    translatedLetter = characterList[letter] // Need the list where the converted characters are.
                }
                else {
                    translatedLetter = letter
                }
                convertedFontMessage += translatedLetter;
            }
            console.log(`Before: ${fmt_array} After: ${convertedFontMessage}`);
            return convertedFontMessage;
        
        }
};

  if(message.text.startsWith("/calc") || message.text === "/calc@highflashbot") {
  var args = message.text.slice(5).replace(/,/gi, ' ');
  if(!args) return slimbot.sendMessage(message.chat.id, "*🚫 Ошибка*\nПосле команды `calc` следует ввести любое выражение.", {
        parse_mode: "Markdown"
        });
  try{
    let result = math.evaluate(args).toString();
    slimbot.sendMessage(message.chat.id, `*Калькулятор*\nВыражение:\n\`\`\`${args}\`\`\`\nРезультат:\n\`\`\`${result}\`\`\``,{
        parse_mode: "Markdown"
    });
    } catch(ex) {
    slimbot.sendMessage(message.chat.id, `*Калькулятор*\n🚫 Ошибка вычисления.`,{
        parse_mode: "Markdown"
    });
    console.log(ex)
    }
	}

});
// Call API

slimbot.startPolling();
console.log("Tinelix Highflash bot (Telegram) started!")