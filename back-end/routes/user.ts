import { Router } from "express"
import verifyToken from "../lib/verify_token"
import userController from "../controllers/user"

const userRouter = Router()

userRouter.post('/', userController.create)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
userRouter.get('/', verifyToken, userController.retrieve)
userRouter.get('/:id', verifyToken, userController.retrieveOne)
userRouter.put('/', verifyToken, userController.update)
userRouter.delete('/', verifyToken, userController.delete)

export default userRouter