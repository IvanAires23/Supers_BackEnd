import httpStatus from "http-status";
import usersService from "../services/users.service";
import { Request, Response } from "express";

async function create(req: Request, res: Response) {
    try {
        await usersService.create(req.body)
        return res.status(httpStatus.CREATED).send("User Created")
    } catch (err) {
        if (err.name === 'emailConflit' || err.name === 'heroNameConflit') {
            return res.status(httpStatus.CONFLICT).send(err.message)
        }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

async function login(req: Request, res: Response) {
    const { email, password } = req.body
    try {
        const token = await usersService.login(email, password)
        return res.status(httpStatus.OK).send({ token })
    } catch (err) {
        if (err.name === 'unauthorized') {
            return res.status(httpStatus.UNAUTHORIZED).send(err.message)
        }
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

const usersController = {
    create,
    login
}

export default usersController