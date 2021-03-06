exports.run = (bot, message) => {
  bot.sendText(message.from, "Teste").then((m) => {
    console.log(message);
    bot.deleteMessage(message.from, m);
  });
};

exports.help = {
  name: "Registro",
  description:
    "Comando só pro porto, que definitivamente não é desenvolvedor, mas vamo fingir que é, sim.",
  usage: "log",
  cooldown: 1,
};
