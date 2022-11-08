import { PerfilReq } from "../models/models.js"

const perfilRegister = async (req, res) => {
    const { nombre, competencias, salario, experiencia, areaTrabajo, locacion, tipoContrato } = req.body
    await PerfilReq.create({ nombre, competencias, salario, experiencia, areaTrabajo, locacion, tipoContrato })
    return res.json({status: 'done'})
}

const perfilUpdate = async (req, res) => {
    const { nombre, competencias, salario, experiencia, areaTrabajo, locacion, tipoContrato } = req.body
    await PerfilReq.updateOne({_id: {
        $eq: req.params.id
    }},{ nombre, competencias, salario, experiencia, areaTrabajo, locacion, tipoContrato }, {runValidators: true})
    return res.json({status: 'done'})
}

const perfilDelete = async (req, res) => {
    await PerfilReq.findOneAndDelete({_id: {
        $eq: req.params.id
    }})
    return res.json({status: 'done'})
}

const perfilGet = async (req, res) => {
    const perfiles = await PerfilReq.find()
    return res.json(perfiles)
}

const perfilSingleGet = async (req, res) => {
    const perfiles = await PerfilReq.findOne({_id: {
        $eq: req.params.id
    }})
    return res.json(perfiles)
}

export {
    perfilRegister,
    perfilUpdate,
    perfilDelete,
    perfilGet,
    perfilSingleGet
}