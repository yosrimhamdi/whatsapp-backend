import express from 'express';
import addMessage from '../controllers/addMessage';

const router = express.Router();

router.route('/').post(addMessage);

export default router;
