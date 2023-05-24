const { Schema, model } = require("mongoose")

const CoordenadaSchema = Schema({
    x: {
        type: Number,
        require: true
    },

    y: {
        type: Number,
        require: true
    },

    pedido_id: {
        type: Schema.Types.ObjectId,
        Ref: "pedido"
    }
})

module.exports = model("coordenada", CoordenadaSchema)