import express from 'express';
import cors from 'cors';

import messages from './routes/messages';

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api/v1/messages', messages);

export default app;
