import mongoose from "mongoose"

const requisicionSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            require: true,
            unique: true
        },
        fecha: {
            type: String,
            require: true
        },
        nVacantes: {
            type: String,
            require: true
        }, 
        fechaPublicacion: {
            type: String,
            require: true
        },
        fechaFinalizacion: {
            type: String,
            require: true
        },
        estado: {
            type: Boolean,
            require: true,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export { requisicionSchema }