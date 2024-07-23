import 'express-async-errors';
import "reflect-metadata";
import 'dotenv/config';
import express from "express";
import { json } from "body-parser";
import cors from 'cors';
import morgan from 'morgan';
import './utils/interval';

import { errorHandler } from './middleware/errorHandler';
import { cryptoRouter } from './routes/crypto';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(morgan('combined'))

app.use(cors({
  origin: "*",
  allowedHeaders: ["content-type"],
  credentials: true,
}));

app.use('/api/v1', cryptoRouter);

app.use('*', async (req, res) => {
  throw new Error('Not Found')
})

app.use(errorHandler);

export { app };
