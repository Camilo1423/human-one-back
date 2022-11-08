import { Usuario } from "../models/models.js"
import bcrypt from 'bcryptjs'

// controlador de registro
const userRegister = async (req, res) => {
    const findUserAdmin = await Usuario.findOne({ username: req.body.usernameAdmin})
    if(findUserAdmin.role == "admin") {
        try {
            const { username, nombre, apellido, role, cedula, correo, direccion, password } = req.body
            const dataUser = { username, nombre, apellido, role, cedula, correo, direccion }
            await Usuario.create({...dataUser, password: await bcrypt.hash(password, 8)})
            return res.json({...dataUser})
        } catch {
            return res.json({ status: "fallo con el servidor"})
        }
    }else {
        res.json({status: "No eres administrador del sistema"})
    }
}

const userLogin = async (req, res) => {
    const findUser = await Usuario.findOne({ username: req.body.username })
    if (findUser) {
        const {_id, username, nombre, apellido, role, cedula, correo, direccion, password} = findUser
        const dataUser = {_id, username, nombre, apellido, role, cedula, correo, direccion }
        const comparer = await bcrypt.compare(req.body.password, password)
        comparer ? res.json({status: "done", ...dataUser}) : res.json({status: "fail"}) 
    } else {
        res.json({status: "Usuario no registrado"})
    }
}

const userUpdate = async (req, res) => {
    const findUserAdmin = await Usuario.findOne({ username: req.body.usernameAdmin})
    if(findUserAdmin.role == "admin") {
        const { username, nombre, apellido, role, cedula, correo, direccion } = req.body
        await Usuario.updateOne({_id: {
            $eq: req.params.id
        }},{ username, nombre, apellido, role, cedula, correo, direccion }, {runValidators: true})
        const data = { username, nombre, apellido, role, cedula, correo, direccion }
        return res.json({...data})
    } else {
        res.json({status: "No eres administrador del sistema"})
    }
}

const userDelete = async (req, res) => {
    const findUserAdmin = await Usuario.findOne({ username: req.body.usernameAdmin})
    if(findUserAdmin.role == "admin") {
        await Usuario.findOneAndDelete({_id: {
            $eq: req.params.id
        }})
        return res.json({res: "ok!"})
    }
}

const userGet = async (req, res) => {
    const findUserAdmin = await Usuario.findOne({ username: req.body.usernameAdmin})
    if(findUserAdmin.role == "admin") {
        const resultado = await Usuario.find()
        return res.json(resultado)
    }
}

export {
    userRegister,
    userLogin,
    userUpdate,
    userDelete,
    userGet
}