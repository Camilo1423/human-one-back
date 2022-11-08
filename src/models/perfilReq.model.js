import mongoose from "mongoose"

// importacion del esquema
import { perfilReqSchema } from '../schema/perfilReq.schema.js'

const PerfilReq = new mongoose.model('PerfilRequisicion', perfilReqSchema)

export { PerfilReq }