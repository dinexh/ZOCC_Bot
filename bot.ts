import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const BOT_TOKEN = process.env.BOT_TOKEN as string;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Command handler for '/start'
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your Helper from ZeroOne CodeClub. Type /help for commands.');
});

// Command handler for '/help'
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Here are the commands you can use:\n/start - Start the bot\n/help - List of commands\n/what_is - What is ZeroOne Code Club?\n/activities - What activities do we have?');
});

// Command handler for '/what_is'
bot.onText(/\/what_is/, (msg) => {
  bot.sendMessage(msg.chat.id, "ZeroOne Code Club is a community of tech enthusiasts who aim to enhance skills through collaborative projects, workshops, and coding competitions. We strive to promote coding literacy and foster innovation.");
});

// Command handler for '/activities'
bot.onText(/\/activities/, (msg) => {
  bot.sendMessage(msg.chat.id, "Here are some of our activities:\n1. **Workshops**: We regularly host workshops on various technologies.\n2. **Hackathons**: Participate in coding competitions with prizes!\n3. **Weekly Meetups**: Join us for discussions and networking.\n4. **Projects**: Collaborate on projects that make a difference.");
});

// Command handler for '/What is ZeroOne Code Club'
bot.onText(/\/What is ZeroOne Code Club/, (msg) => {
  bot.sendMessage(msg.chat.id, "It's a club focused on coding, collaboration, and innovation in technology.");
});

// Echo any text message sent to the bot
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // If the message is not a command, echo it back
  if (!msg.text?.startsWith('/')) {
    bot.sendMessage(chatId, `You said: ${msg.text}`);
  }
});
