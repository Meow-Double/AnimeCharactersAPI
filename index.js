import express from 'express';
import cors from 'cors';
import { PORT, URL } from './config.js';
import {getGenshin} from "./controllers/Genshin/index.js";

const api = express();

api.use(express.json());
api.use(cors({ origin: '*' }));
api.use('/uploads', express.static('uploads'));

api.get("/genshin", getGenshin)

api.listen(PORT, () => {
  console.log(URL);
});
