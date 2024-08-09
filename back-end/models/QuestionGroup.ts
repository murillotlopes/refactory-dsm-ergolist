import Question from "./Question"
import { Schema, model } from 'mongoose'

const schema = new Schema({
    group: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    }
}
)

const QuestionGroup = model('QuestionGroup', schema, 'question_groups')

export default QuestionGroup