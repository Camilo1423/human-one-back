import * as dotenv from "dotenv"
dotenv.config()
import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"

// instaciando express
const app = express()

// importacion de rutas
import { userRoute, perfilReqRoute, requisicionRoute } from './routes/routes.js'

// settings
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// conexion a base de datos
const DB_URI = process.env.MONGO_URI
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    err ? console.error(err) : ''
})


// inicializador de rutas
// endpoint user
app.use('/user', userRoute)
// endpoint perfil de requisicion
app.use('/perfil', perfilReqRoute )
// endpoint requisicion
app.use('/requisicion', requisicionRoute )

export {
    app
}