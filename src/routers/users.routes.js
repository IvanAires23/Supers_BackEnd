import { Router } from "express";
import validateBody from "../middlewares/validadeBody.middleware.js";
import { userSchema } from "../schemas/users.schema.js";
import usersController from "../controllers/users.controller.js";

const usersRouter = Router()

usersRouter.post('/sign-up', validateBody(userSchema), usersController.create)

export default usersRouter