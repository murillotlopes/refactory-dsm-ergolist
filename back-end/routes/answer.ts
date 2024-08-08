import { Router } from "express"
import verifyToken from "../lib/verify_token"
import answerController from "../controllers/answer"

const answerRouter = Router()

answerRouter.post('/', verifyToken, answerController.create)
answerRouter.get('/assessment/:id', verifyToken, answerController.retrieve)
answerRouter.get('/:id', verifyToken, answerController.retrieveOne)
answerRouter.put('/', verifyToken, answerController.update)
answerRouter.delete('/', verifyToken, answerController.delete)

export default answerRouter