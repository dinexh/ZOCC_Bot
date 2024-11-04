import TelegramBot from 'node-telegram-bot-api';
import express from 'express';
import 'dotenv/config';

const BOT_TOKEN = process.env.BOT_TOKEN as string;
const app = express();
app.use(express.json());

// Create a bot instance
const bot = new TelegramBot(BOT_TOKEN);

// Set webhook endpoint
app.post(`/webhook/${BOT_TOKEN}`, (req, res) => {
  const update = req.body;

  // Handle updates from Telegram
  bot.processUpdate(update);
  
  // Send a 200 OK response to Telegram
  res.sendStatus(200);
});

// Command handlers
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your Helper from ZeroOne CodeClub. Type /help for commands.');
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Here are the commands you can use:\n/start - Start the bot\n/help - List of commands\n/what_is - What is ZeroOne Code Club?\n/activities - What activities do we have?');
});

bot.onText(/\/what_is/, (msg) => {
  bot.sendMessage(msg.chat.id, "ZeroOne Code Club is a community of tech enthusiasts who aim to enhance skills through collaborative projects, workshops, and coding competitions. We strive to promote coding literacy and foster innovation.");
});

bot.onText(/\/activities/, (msg) => {
  bot.sendMessage(msg.chat.id, "Here are some of our activities:\n1. **Workshops**: We regularly host workshops on various technologies.\n2. **Hackathons**: Participate in coding competitions with prizes!\n3. **Weekly Meetups**: Join us for discussions and networking.\n4. **Projects**: Collaborate on projects that make a difference.");
});

// Start the server (not required for Vercel, but kept for local testing)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
