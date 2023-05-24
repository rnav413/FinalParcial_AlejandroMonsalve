const express = require("express")
const { check } = require("express-validator")
const router = express.Router()
const { registrarCoordenadas,listarCoordenadas } = require("../controllers/coordenadas")

router.post("/registrar/coordenadas", registrarCoordenadas)
router.get("/listar/coordenadas", listarCoordenadas)

module.exports = router