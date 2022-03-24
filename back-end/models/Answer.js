const mongoose = require('mongoose')

module.exports = function(){

    const schema = mongoose.Schema({ 
        assessment:{
            type: mongoose.ObjectId,
            required: true,
            ref: 'Assessment'
        },
        question: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'Question'
        },
        // Valores válido para objective_answer
        // Y: Sim (Yes)
        // N: Não (No)
        // X: Não aplicável (not applicable)
        // P: Resposta adiantada (Postponed)
        objective_answer: {
            type: String,
            enum: ['Y', 'N', 'X', 'P'],
            required: true
        },
        comments:{
            type: String,
            required: false // opcional
        },
        datetime: {
            type: Date,
            required: true,
            default: Date.now()
        }
    })

    return mongoose.model('Answer', schema, 'answer')
}