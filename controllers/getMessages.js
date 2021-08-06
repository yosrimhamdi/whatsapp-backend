import Message from '../models/Message';

export default async (req, res) => {
  const messages = await Message.find();

  res.status(200).json({ status: 'success', messages });
};
