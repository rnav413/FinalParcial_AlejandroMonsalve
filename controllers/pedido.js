const express = require("express")
const pedidos = require("../models/pedido")

const registrarPedido = (req, res = express.request) => {
    const ped = new pedidos(req.body)

    try{
        ped.id = req.id
        ped.fecha = req.fecha

        const saved = await ped.save()

        res.json({
            ok: true,
            ped: saved
        })
    } catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            ped: "Internal error"
        })
    }
}

const listarPedidos = (req, res = express.request) => {
    const ped = pedidos.find()

    try{
        res.status(200).json({
            ok: true,
            ped
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
    registrarPedido,
    listarPedidos
}