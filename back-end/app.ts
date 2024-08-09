import cookieParser from 'cookie-parser'
import express from 'express'
import logger from 'morgan'
import path from 'path'

import glossaryRouter from './routes/glossary'
import userRouter from './routes/user'
import assessmentRouter from './routes/assessment'
import questionGroupRouter from './routes/question_group'
import questionRouter from './routes/question'
import answerRouter from './routes/answer'
import mongoose from 'mongoose'
import cors from 'cors'
import warmup from './lib/warmup'

const app = express();
const port = process.env.PORT || 4000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

/********** ROTAS **********/

app.use('/glossary', glossaryRouter)
app.use('/user', userRouter)
app.use('/assessment', assessmentRouter)
app.use('/question-group', questionGroupRouter)
app.use('/question', questionRouter)
app.use('/answer', answerRouter)


mongoose.connect(process.env.DB_URI as string).then(async () => {
  console.log('** Mongoose! conectado ao servidor remoto')

  await warmup().then(() => {
    console.log('** Perguntas e Group de Perguntas carregadas no DB')
  })

  app.listen(port, () => {
    console.log(`** Servidor rodando na porta ${port}`)
  })

}).catch(erro => {
  console.error('** ERROR: Mongooose! Não conectado ao servidor remoto, Causa: ' + erro)
})

