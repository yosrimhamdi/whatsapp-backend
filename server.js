import app from './app';
import mongoose from 'mongoose';

const { PORT, DB_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('connected to db');
  } catch (e) {
    console.log(e);
  }
})();

app.listen(PORT, () => console.log('running on localhost:' + PORT));
