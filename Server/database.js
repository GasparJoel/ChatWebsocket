import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

const name_database = process.env.DATABASE_URL;

(async () => {
    try {
        const db = await mongoose.connect(name_database);
        console.log("Database is connected to", db.connection.name);
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1);
    }
})();
