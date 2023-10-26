import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authentication.middleware";
import postsService from "../services/posts.service";
import httpStatus from "http-status";

async function findAllPosts(req: AuthenticatedRequest, res: Response) {
    try {
        const posts = await postsService.findAllPosts()
        return res.status(httpStatus.OK).send(posts)
    } catch (err) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function create(req: AuthenticatedRequest, res: Response) {
    const { userId } = req

    try {
        const post = await postsService.create(req.body, userId)
        return res.status(httpStatus.CREATED).send(post)
    } catch (err) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const postsController = {
    findAllPosts,
    create
}

export default postsController