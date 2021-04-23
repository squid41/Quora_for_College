
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import commentsRouter from "./routes/comments.js";
import notifRouter from "./routes/notifs.js"
import questionRouter from "./routes/question.js"



const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/comment", commentsRouter);
app.use("/notifs", notifRouter);
app.use("/questions", questionRouter);




const CONNECTION_URL = 'mongodb://hellos:hellos@cluster0-shard-00-00.oz564.mongodb.net:27017,cluster0-shard-00-01.oz564.mongodb.net:27017,cluster0-shard-00-02.oz564.mongodb.net:27017/test?ssl=true&replicaSet=atlas-qwokc7-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);