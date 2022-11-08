import mongoose from "mongoose"

// importacion del esquema
import { userSchema } from '../schema/user.schema.js'

const Usuario = new mongoose.model('Usuarios', userSchema)

export { Usuario }