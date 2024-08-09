import { ObjectId } from 'mongodb';
import { Schema, model } from 'mongoose'

const schema = new Schema({
    datetime: {
        type: Date,
        required: true,
        default: Date.now()
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false // atributo opcional
    },
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }

})

const Assessment = model('Assessment', schema, 'assessment')

export default Assessment