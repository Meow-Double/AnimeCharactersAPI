import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { URL } from '../../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, '..', '..', 'database', 'Genshin', 'data.json');

export const getGenshin = async (req, res) => {
  try {
    const characters = JSON.parse(await readFile(filePath, 'utf-8'));

    const newCharacters = characters.map((character) => ({
      ...character,
      urlPath: `${URL}/${character.urlPath}`,
    }));

    res.json(newCharacters);
  } catch (error) {
    res.status(500).json(error);
  }
};
