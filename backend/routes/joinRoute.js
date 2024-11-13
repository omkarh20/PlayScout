import express from 'express'
import { getRequest, respondRequest, sendRequest } from '../controller/joinController.js';

const joinRouter = express.Router();

joinRouter.post('/send-request', sendRequest);
joinRouter.get('/get-request', getRequest);
joinRouter.post('/respond-request', respondRequest);

export default joinRouter