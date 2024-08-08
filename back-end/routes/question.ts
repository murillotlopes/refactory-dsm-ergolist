import { Router } from "express"
import verifyToken from "../lib/verify_token"
import questionController from "../controllers/question"

const questionRouter = Router()

questionRouter.post('/', verifyToken, questionController.create)
questionRouter.get('/', verifyToken, questionController.retrieve)
questionRouter.get('/group/:groupId', verifyToken, questionController.retrieveByGroup)
questionRouter.get('//group-number/:groupId/:number', verifyToken, questionController.retrieveByGroupAndNumber)
questionRouter.get('/:id', verifyToken, questionController.retrieveOne)
questionRouter.put('/', verifyToken, questionController.update)
questionRouter.delete('/', verifyToken, questionController.delete)


export default questionRouter