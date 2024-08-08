import { Router } from "express"
import glossaryController from "../controllers/glossary"

const glossaryRouter = Router()

glossaryRouter.post('/', glossaryController.create)
glossaryRouter.get('/', glossaryController.retrieve)
glossaryRouter.get('/:id', glossaryController.retrieveOne)
glossaryRouter.put('/', glossaryController.update)
glossaryRouter.delete('/', glossaryController.delete)

export default glossaryRouter