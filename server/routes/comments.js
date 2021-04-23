import express from 'express';
import {getComments,createComment} from '../controllers/comment.js';
const router = express.Router();
 import auth from "../middleware/auth.js";

 router.get('/', getComments);
 router.post('/',auth,  createComment);

 export default router;
