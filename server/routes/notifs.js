import express from 'express';
import {getNotifications,createNotification,updateNotification} from '../controllers/notifs.js';
const router = express.Router();
 import auth from "../middleware/auth.js";

 router.get('/',auth, getNotifications);
 router.post('/',auth,  createNotification);
 router.patch('/:id', auth, updateNotification);


 export default router;
