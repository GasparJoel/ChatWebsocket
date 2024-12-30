import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import './database.js'; // Asegúrate de que el archivo esté en el directorio correcto

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.ORIGIN,
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

// Configuración del puerto
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
