"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const BOT_TOKEN = '8183087849:AAFBDJqX_uxbpH0QwOeReXHQ6Es90zBljjA';
// Create a bot that uses 'polling' to fetch new updates
const bot = new node_telegram_bot_api_1.default(BOT_TOKEN, { polling: true });
// Command handler for '/start'
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hello! I am your TypeScript bot. Type /help for commands.');
});
// Command handler for '/help'
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Here are the commands you can use:\n/start - Start the bot\n/help - List of commands');
});
// Echo any text message sent to the bot
bot.on('message', (msg) => {
    var _a;
    const chatId = msg.chat.id;
    // If the message is not a command, echo it back
    if (!((_a = msg.text) === null || _a === void 0 ? void 0 : _a.startsWith('/'))) {
        bot.sendMessage(chatId, `You said: ${msg.text}`);
    }
});
