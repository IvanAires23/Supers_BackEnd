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
    try {

    } catch (err) {

    }
}

const usersController = {
    create
}

export default usersController