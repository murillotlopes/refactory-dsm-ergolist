import { Router } from "express"
import verifyToken from "../lib/verify_token"
import assessmentController from "../controllers/assessment"

const assessmentRouter = Router()

assessmentRouter.post('/', assessmentController.create)
assessmentRouter.get('/', verifyToken, assessmentController.retrieve)
assessmentRouter.get('/:id', verifyToken, assessmentController.retrieveOne)
assessmentRouter.put('/', assessmentController.update)
assessmentRouter.delete('/', assessmentController.delete)

export default assessmentRouter