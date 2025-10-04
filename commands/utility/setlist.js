import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SlashCommandBuilder } from 'discord.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//command pulls setlist from data.json in project root
export default {
	data: new SlashCommandBuilder()
		.setName('setlist')
		.setDescription('Provides the bands current setlist.'),
	async execute(interaction) {
    try {
      const filePath = path.join(__dirname, '../../data.json');
      const jsonData = await fs.readFile(filePath, 'utf8');
      const data = JSON.parse(jsonData);

      const formatted = data.map((song, i) => `${i + 1}. ${song}`).join('\n');
      await interaction.reply(`Current Setlist: \n${formatted}`);
    } catch (err) {
      console.error(err);
      await interaction.reply('There was an error reading the setlist file.');
    }
  },
};

