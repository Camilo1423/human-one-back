import mongoose from "mongoose"

const perfilReqSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            require: true,
        },
        competencias: {
            type: String,
            require: true
        },
        salario: {
            type: String,
            require: true
        }, 
        experiencia: {
            type: String,
            require: true
        },
        areaTrabajo: {
            type: String,
            require: true
        },
        locacion: {
            type: String,
            require: true
        },
        tipoContrato: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export { perfilReqSchema }