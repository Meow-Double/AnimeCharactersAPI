import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';

const api = express();

api.use(express.json());
api.use(cors({ origin: '*' }));

api.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
