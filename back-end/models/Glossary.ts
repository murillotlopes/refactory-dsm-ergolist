import { Schema, model } from 'mongoose'

const schema = new Schema({
    entry: {
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
const Glossary = model('Glossary', schema, 'glossaries')

export default Glossary


