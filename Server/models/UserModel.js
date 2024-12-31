import  mongoose from "mongoose";
import {genSalt, hash} from "bcrypt";

const userSchema = new  mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required."],
        unique:true,

    },
    password:{
        type:String,
        required:[true,"Password is required."],
    },
    firstName:{
        type:String,
        required:false,

    },
    lastName:{
        type:String,
        required:false,
        
    },
    image:{
        type:String,
        required:false,
        
    },
    color:{
        type:Number,
        required:false,
        
    },
    profileSetup:{
        type:Boolean,
        default:false,
    }
})

//Middleware que se ejecuta antes de la accion del save 
userSchema.pre("save",async function (next) {
   // Vamos a incriptar la contraseña
   const salt = await genSalt(); // Genera un "salt" (valor aleatorio para hacer más segura la encriptación)
   this.password = await hash(this.password, salt); // Encripta la contraseña usando el salt
   next(); // Llama a `next` para continuar con el flujo de guardado
})

const User=mongoose.model("Users",userSchema);
export default User;