exports.run = (bot, message) => {
  bot.sendText(message.from, "🙏 namaskar, camarada");
};

exports.help = {
  name: "Namastê",
  description:
    "Que todos os seres vivos da Terra possam se livrar dos sofrimentos e sentir apenas paz e tranquilidade",
  usage: "namaste",
  cooldown: 5,
};
