// const mongoose = require('mongoose')

import mongoose from "mongoose"

export default function database() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERV}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        // Parâmetros da conexão
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: false
    })


    mongoose.connection.on('connected', () =>
        console.log('** Mongoose! conectado ao servidor remoto')
    )

    mongoose.connection.on('error', (erro: any) =>
        console.error('** ERROR: Mongooose! Não conectado ao servidor remoto, Causa: ' + erro)
    )
}