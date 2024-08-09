import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose'

const schema = new Schema({
    number: {
        type: Number,
        required: true
    },
    enunciation: {
        type: String,
        required: true
    },
    group: {
        type: ObjectId,
        ref: 'QuestionGroup',
        required: true
    },
    glossaryItem: {
        type: [],
        required: false
    },

})

schema.index({ group: 1, number: 1 }, { unique: true })

const Question = model('Question', schema, 'questions')

export default Question
