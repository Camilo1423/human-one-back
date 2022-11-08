import { Router } from 'express'

// importacion de controlador
import { 
    requisicionRegister, 
    requisicionUpdate, 
    requisicionPublish, 
    requisicionDelete, 
    requisicionGet, 
    requisicionGetPublish,
    requisicionNoPublish
} from '../controller/requisicion.controller.js'

const router = Router()

router.post('/register', requisicionRegister)
router.put('/update/:id', requisicionUpdate)
router.put('/publish/:id', requisicionPublish)
router.put('/nopublish/:id', requisicionNoPublish)
router.delete('/delete/:id', requisicionDelete)
router.get('/allreq', requisicionGet)
router.get('/allreqpublish', requisicionGetPublish)

export default router