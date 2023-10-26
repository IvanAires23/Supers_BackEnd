import { Router } from "express";
import { authenticateToken } from "../middlewares/authentication.middleware";
import postsController from "../controllers/posts.controller";
import validateBody from "../middlewares/validadeBody.middleware";
import { postSchema } from "../schemas/posts.schema";

const postsRouter = Router()

postsRouter
    .all('/*', authenticateToken)
    .get('/', postsController.findAllPosts)
    .post('/', validateBody(postSchema), postsController.create)

export default postsRouter