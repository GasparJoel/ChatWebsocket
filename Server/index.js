import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import './database.js'; // Asegúrate de que el archivo esté en el directorio correcto
import authRoutes from "./routes/Authroutes.js";
import morgan from "morgan";


dotenv.config();

const app = express();

// Middlewares
app.use(morgan('dev'))
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:5173', 'http://otro-origen.com'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
//Para las rutas 
app.use('/api/auth',authRoutes)


// Configuración del puerto
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));
