import { Requisicion } from "../models/models.js"

const requisicionRegister = async (req, res) => {
    const { nombre, fecha, nVacantes, fechaPublicacion, fechaFinalizacion } = req.body
    await Requisicion.create({ nombre, fecha, nVacantes, fechaPublicacion, fechaFinalizacion })
    return res.json({status: 'done'})
}

const requisicionUpdate = async (req, res) => {
    const { nombre, fecha, nVacantes, fechaPublicacion, fechaFinalizacion } = req.body
    await Requisicion.updateOne({_id: {
        $eq: req.params.id
    }},{ nombre, fecha, nVacantes, fechaPublicacion, fechaFinalizacion }, {runValidators: true})
    return res.json({status: 'actualizado'})
}

const requisicionPublish= async (req, res) => {
    await Requisicion.updateOne({_id: {
        $eq: req.params.id
    }},{ estado: true }, {runValidators: true})
    return res.json({status: 'publicado'})
}

const requisicionNoPublish= async (req, res) => {
    await Requisicion.updateOne({_id: {
        $eq: req.params.id
    }},{ estado: false }, {runValidators: true})
    return res.json({status: 'no publicado'})
}

const requisicionDelete = async (req, res) => {
    await Requisicion.findOneAndDelete({_id: {
        $eq: req.params.id
    }})
    return res.json({status: 'eliminado'})
}

const requisicionGet = async (req, res) => {
    const requisicion = await Requisicion.find()
    return res.json({...requisicion})
}

const requisicionGetPublish = async (req, res) => {
    const requisicion = await Requisicion.find({estado: {
        $eq: true
    }})
    if (Object.keys(requisicion).length > 0) {
        return res.json({...requisicion})
    } else {
        return res.json({estado: "no hay registros"})
    }
}

export {
    requisicionRegister,
    requisicionUpdate,
    requisicionPublish,
    requisicionDelete,
    requisicionGet,
    requisicionGetPublish,
    requisicionNoPublish
}