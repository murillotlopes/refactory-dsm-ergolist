import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import path from 'path'

import dbConnection from './config/database'
import glossaryRouter from './routes/glossary'
import userRouter from './routes/user'
import assessmentRouter from './routes/assessment'
import questionGroupRouter from './routes/question_group'
import questionRouter from './routes/question'
import answerRouter from './routes/answer'

const app = express();
app.listen(4000)

dbConnection();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/********** ROTAS **********/

app.use('/glossary', glossaryRouter)
app.use('/user', userRouter)
app.use('/assessment', assessmentRouter)
app.use('/question-group', questionGroupRouter)
app.use('/question', questionRouter)
app.use('/answer', answerRouter)

