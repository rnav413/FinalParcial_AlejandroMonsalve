const express = require("express")
const coordenadas = require("../models/coordenada")

const registrarCoordenadas = (req, res = express.request) => {
    const coord = new coordenadas(req.body)

    try{
        coord.pedido_id = req.pedido_id
        const saved = await coord.save()
        res.json({
            ok: true,
            coord: saved
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            coord: "Internal error"
        })
    }
}

const listarCoordenadas = (req, res = express.request) => {
    const coord =  await coordenadas.find().populate("pedido_id", "id")

    try {
        res.status(200).json({
            ok: true,
            coord
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Error Interno"
        })
    }
}


module.exports = {
    registrarCoordenadas,
    listarCoordenadas
}