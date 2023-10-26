import express from "express";
import cors from "cors"
import { loadEnv } from "./configs/envs";
import router from "./routers/index.routes";

loadEnv();

const app = express()
app.use(express.json())
app.use(cors())

app.get("/health", (req, res) => res.send("ok"))
    .use(router)


export default app