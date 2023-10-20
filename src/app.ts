import express from "express";
import cors from "cors"
import { loadEnv } from "./configs/envs";

loadEnv();

import usersRouter from "./routers/users.routes";



const app = express()
app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => res.send("ok"))
    .use('/auth', usersRouter)

export default app