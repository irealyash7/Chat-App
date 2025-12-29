import express from "express"
import router from "./routes/auth.js"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
dotenv.config()
const app=express();

app.use(express.json())

app.use("/api/auth",router)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port `+ process.env.PORT)
    connectDB()
})