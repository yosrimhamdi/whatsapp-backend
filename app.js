import express from 'express';

import messages from './routes/messages';

const app = express();

app.use('/api/v1/messages', messages);

export default app;
