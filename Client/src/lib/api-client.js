import { HOST } from "@/utils/constants";
import axios from "axios";

//Axios Crea una instancia personalizada de Axios con configuraciones predefinidas.
//Esto es útil cuando todas las solicitudes de tu aplicación comparten una configuración común.
export const apiClient = axios.create({
    baseURL:HOST,
})

