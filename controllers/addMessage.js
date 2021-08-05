import Message from '../models/Message';

export default async (req, res) => {
  const message = await Message.create(req.body);

  res.status(201).json({ status: 'success', data: { message } });
};
