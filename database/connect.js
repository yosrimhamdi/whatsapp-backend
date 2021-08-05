import mongoose from 'mongoose';

import watch from './watch';

export default async () => {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('connected to db');
  watch();
};
