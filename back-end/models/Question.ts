const mongoose = require('mongoose')

module.exports = function() {
    const schema = mongoose.Schema({
        number: {
            type: Number,
            required: true
        },
        enunciation:{
            type: String,
            required: true
        },
        // chave estrangeira para QuestionGroup
        group: {
            type: mongoose.ObjectId,
            ref: 'QuestionGroup',
            require: true
        }
    })

    // Criando indice único para os campos group e number
    schema.index({group: 1 /* ASC */, number: 1 /* ASC */}, {unique:true})

    return mongoose.model('Question', schema, 'questions')
}