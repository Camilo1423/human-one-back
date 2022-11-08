import mongoose from "mongoose"

// importacion del esquema
import { requisicionSchema } from '../schema/requisicion.schema.js'

const Requisicion = new mongoose.model('Solicitud', requisicionSchema)

export { Requisicion }