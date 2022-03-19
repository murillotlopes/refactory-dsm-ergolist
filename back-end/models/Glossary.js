const mongoose = require('mongoose')

module.exports = function() {

    const schema = mongoose.Schema({
        entry:{
            type: String,
            required: true
        },
        definition: {
            type: String,
            require: true
        }
    })

    // geração do model
    // 1º parâmetro: nome do Model(inicial maiusculo)
    // 2º parâmetro: atributos do Model (definidos na variavel schema)
    // 3º parâmetro: nome da collections
    return mongoose.model('Glossary', schema, 'glossaries')
}