import User from "../models/UserModel";
import  jwt  from "jsonwebtoken";

const maxAge = 3*24*60*60*60 ;

const createToken=(email,userId)=>{
    return  jwt.sign({email,userId},process.env.JWT_KEY,{expiresIn:maxAge})
}

export const signup= async (req,res,next)=>{
    try {

          
        const {email,password} = req.body;
         // Validar que email y password estén presentes
         if (!email || !password ) {
            return res.status(400).send('Email and password is required')
         }

          // Verificar si el usuario ya existe
            const existingUser = await User.findOne({ email });
            if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
            }

          // Crear el usuario en la base de datos
         const usernew = await User.create({email,password});

         const token  = createToken(email,usernew.id)

         // Establecer la cookie del token
        res.cookie("jwt",token,{
            maxAge:maxAge *1000,// Convertir segundos a milisegundos
            httpOnly:true, // Asegurar que la cookie no sea accesible desde el cliente
            secure:true,
            sameSite:"None" // Permitir cookies en distintos dominios
        })

        return res.status(201).json({
            user:{
                id:usernew.id,
                email:usernew.email,
            }
        })

         
    } catch (error) {
     console.log(error)   
     return res.status(500).send('Internal Server Error')
    }
}