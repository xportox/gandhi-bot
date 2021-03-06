const { readdir } = require("fs");

exports.run = (bot, message, args) => {
  const tmpFile = {};
  readdir("./commands/", (e, files) => {
    if (e) console.error(e);
    files.forEach((jsFile) => {
      const cmdFile = require(`./${jsFile}`);
      tmpFile[jsFile.replace(".js", "")] = {};
      tmpFile[jsFile.replace(".js", "")].name = cmdFile.help.name;
      tmpFile[jsFile.replace(".js", "")].description = cmdFile.help.description;
      tmpFile[jsFile.replace(".js", "")].usage = cmdFile.help.usage;
    });

    // eslint-disable-next-line no-negated-condition
    if (!args[0]) {
      bot.sendText(
        message.from,
        `*Comandos disponíveis:* ${Object.keys(tmpFile).join(
          ", "
        )}\n\n_Você pode teclar *help <nome do comando>* para mostrar ajuda avançada._`
      );
    } else {
      const commandName = args[0];
      const { name, description, usage } = require(`./${commandName}.js`).help;
      bot.sendText(
        message.from,
        `*${name}*\n\nDescrição: ${description}\nUso: \`\`\`${usage}\`\`\``
      );
    }
  });
};

exports.help = {
  name: "Ajuda",
  description: "Exibe a lista de comandos",
  usage: "help",
  cooldown: 5,
};
