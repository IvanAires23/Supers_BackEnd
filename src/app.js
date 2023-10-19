import express from "express";
import cors from "cors"
import { loadEnv } from "./configs/envs.js";

loadEnv();

import usersRouter from "./routers/users.routes.js";



const app = express()
app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => res.send("ok"))
    .use('/auth', usersRouter)

export default app