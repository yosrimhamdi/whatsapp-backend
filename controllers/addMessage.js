import Message from '../models/Message';

export default async (req, res) => {
  const message = await Message.create({
    content: 'hi theres',
  });

  res.status(201).json({ status: 'success', data: { message } });
};
