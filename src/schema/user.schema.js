import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true
        },
        nombre: {
            type: String,
            require: true
        },
        apellido: {
            type: String,
            require: true
        }, 
        role: {
            type: String,
            require: true
        },
        cedula: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true
        },
        direccion: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export { userSchema }