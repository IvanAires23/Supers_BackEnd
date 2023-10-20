import { Router } from "express";
import validateBody from "../middlewares/validadeBody.middleware";
import { loginSchema, userSchema } from "../schemas/users.schema";
import usersController from "../controllers/users.controller";

const usersRouter = Router()

usersRouter.post('/sign-up', validateBody(userSchema), usersController.create)
usersRouter.post('/sign-in', validateBody(loginSchema), usersController.login)

export default usersRouter