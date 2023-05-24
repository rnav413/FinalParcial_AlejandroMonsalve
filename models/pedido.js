const { Schema, model } = require("mongoose")

const PedidoSchema = Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },

    fecha: {
        type: Date,
        required: true
    }
})

module.exports = model("pedido", PedidoSchema)