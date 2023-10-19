import express, { json } from "express";
import cors from "cors"

const app = express()
app.use(json())
app.use(cors())

app.get("/health", (req, res) => {
    return res.send("ok")
})

export default app