import { Router } from "express";
import validateBody from "../middlewares/validadeBody.middleware";
import { userSchema } from "../schemas/users.schema";
import usersController from "../controllers/users.controller";

const usersRouter = Router()

usersRouter.post('/sign-up', validateBody(userSchema), usersController.create)

export default usersRouter