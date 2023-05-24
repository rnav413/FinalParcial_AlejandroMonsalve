const express = require("express")
const { check } = require("express-validator")
const router = express.Router()
const {registrarPedido,listarPedidos } = require("../controllers/pedido")

router.post(
    "/registrar/pedido",[
        check("id", "El id es obligatorio").not().isEmpty(),
        check("fecha", "La fecha es obligatoria").notEmpty(),

        check("fecha", "La fecha ingresada es invalida").isDate(),

        check("id", "El id debe de tener 8 caracteres").isLength({ min: 8, max:8})
] ,
registrarPedido)

router.get("/listar/pedidos", listarPedidos)

module.exports = router