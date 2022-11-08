import { Router } from 'express'

// importacion de controlador
import { perfilRegister, perfilUpdate, perfilDelete, perfilGet } from '../controller/perfilReq.controller.js'

const router = Router()

router.post('/register', perfilRegister)
router.put('/update/:id', perfilUpdate)
router.delete('/delete/:id', perfilDelete)
router.get('/allperfil', perfilGet)

export default router