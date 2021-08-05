import express from 'express';
import addMessage from '../controllers/addMessage';
import getMessages from '../controllers/getMessages';

const router = express.Router();

router.route('/').post(addMessage).get(getMessages);

export default router;
