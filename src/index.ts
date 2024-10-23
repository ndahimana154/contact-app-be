import express from "express"
import dotenv from "dotenv"
import router from "./routes"

import dbConnection from "./database/config/config"

dotenv.config()


const app = express()

app.use(express.json())
app.use("/api", router)

const port = process.env.PORT || 3000

dbConnection
app.listen(port, () => console.log("App listening on port " + port))