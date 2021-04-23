import express from 'express';
import {getQuestions,createQuestion} from '../controllers/question.js';
const router = express.Router();
 import auth from "../middleware/auth.js";

 router.get('/', getQuestions);
 router.post('/',auth,  createQuestion);

 export default router;
