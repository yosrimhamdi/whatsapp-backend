import app from './app';
import connect from './database/connect';

const { PORT } = process.env;

connect();

app.listen(PORT, () => console.log('running on localhost:' + PORT));
