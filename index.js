const TelegramApi = require('node-telegram-bot-api')

const token = '5983051327:AAHDMJrZSZAVrO_CHRHxWvMHTKxherF0Gtg'

const bot = new TelegramApi(token, {polling: true})

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/options', description: 'Опции'},
        {command: '/creator', description: 'Содатель бота'},
    ])
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
     if (text === '/start') {
   await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/animefanf/png/1.png')
    return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот`);
    }
     if (text === '/info') {
     return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
     }
     if (text === '/options') {
        return bot.sendMessage(chatId, `Пока что настройки не сделаны!`);
        }
      if (text === '/creator') {
        return bot.sendMessage(chatId, `@CreatorNiki`);
        }
     return bot.sendMessage(chatId, `Я тебя не понимаю, попробуйте ещё раз`)
})

}

start ()