import { Router } from 'express';
import { sendLoop, sendToList, sendToPhone } from '../controllers/message.controllers.js';

//Initialization
const router = Router();

//Endpoint for send a messsage to a contact
router.post('/api/message', sendToPhone);

//Endpoint for send a message to group peoples
router.post('/api/listmessage', sendToList);

//Endpoint for send a loop of message
router.post('/api/loopmessage', sendLoop);

export default router;