import  express  from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config()


const app = express()

const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`corriendo por el port ${port}`))