import { Router } from 'express'

// importacion de controlador
import { userRegister, userLogin, userUpdate, userDelete, userGet, userSingleGet, userRegisterFront} from '../controller/user.controller.js'

const router = Router()

router.post('/register', userRegister)
router.post('/register/front', userRegisterFront)
router.post('/login', userLogin)
router.put('/update/:id', userUpdate)
router.delete('/delete/:id', userDelete)

router.get('/allusers/:id', userSingleGet)
router.get('/allusers', userGet)

export default router