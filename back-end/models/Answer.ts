import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose'

const schema = new Schema({
    assessment: {
        type: ObjectId,
        required: true,
        ref: 'Assessment'
    },
    question: {
        type: ObjectId,
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
    comments: {
        type: String,
        required: false // opcional
    },
    datetime: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

schema.index({ assessment: 1, question: 1 }, { unique: true })

const Answer = model('Answer', schema, 'answer')

export default Answer
