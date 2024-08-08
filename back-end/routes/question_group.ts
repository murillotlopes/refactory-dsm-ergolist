import { Router } from "express"
import questionGroupController from "../controllers/question_group"

const questionGroupRouter = Router()

questionGroupRouter.post('/', questionGroupController.create)
questionGroupRouter.get('/', questionGroupController.retrieve)
questionGroupRouter.get('/:id', questionGroupController.retrieveOne)
questionGroupRouter.put('/', questionGroupController.update)
questionGroupRouter.delete('/', questionGroupController.delete)

export default questionGroupRouter