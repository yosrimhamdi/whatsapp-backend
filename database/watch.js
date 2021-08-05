import Message from '../models/Message';
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: '1245820',
  key: '8017a44ac3256ec6cd6d',
  secret: '3556767163f86cb0a579',
  cluster: 'eu',
  useTLS: true,
});

export default () => {
  const changeStream = Message.watch();

  changeStream.on('change', e => {
    if (e.operationType === 'insert') {
      pusher.trigger('messages', 'inserted', e.fullDocument);
    }
  });
};
