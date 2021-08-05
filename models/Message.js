import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  content: String,
  name: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Message', schema);
