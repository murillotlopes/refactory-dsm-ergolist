// Importa o model correspondente
const User = require('../models/User')()

import { compare, hash } from 'bcrypt'
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

const userController = {

    // Função que será chamada para criar uma nova
    // entrada do glossário
    create: async (req: Request, res: Response) => {
        try {
            // necessário agora ter um campo 'password'
            if (!req.body.password) return res.status(500).send({ error: 'Path "password" is required!' })

            // Encripta o valor de "password" em "password_hash"
            req.body.password_hash = await hash(req.body.password, 12)

            // Destrói o campo "password" para que ele não seja
            // passado para o model
            delete req.body.password

            //Destrói o campo "password" para que ele não seja passado para o model
            delete req.body.password

            await User.create(req.body)

            // HTTP 201: Created
            res.status(201).end()
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    // Função que devolve uma listagem das entradas de
    // glossário já inseridas
    retrieve: async (req: Request, res: Response) => {
        try {
            let result = await User.find({ _id: req.authenticatedId })

            // Apenas o usuário administrador estaria autorizado
            // a listar todos os usuários
            // if (req.authenticatedId === 'Id do usuário admin')
            //     result = await User.find()
            // else result = await User.find({ _id: req.authenticatedId })

            // HTTP 200: OK é implícito aqui
            res.send(result)
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    // Função que retorna uma única entrada do glossário
    // com base no id fornecido
    retrieveOne: async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            let result = await User.findById(id)

            // Retornamos os dados do usuário solicitado somente
            // se quem estiver logado for o admin ou próprio usuário
            // sendo consultado
            // if (req.authenticatedId === 'Id do usuário admin' ||
            //     req.authenticatedId === id)
            //     result = await User.findById(id)
            // else
            //     result = null

            // Se tivermos um resultado, retornamos com status HTTP 200
            if (result) res.send(result)
            // Senão, retornamos HTTP 404: Not found
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    update: async (req: Request, res: Response) => {
        try {
            if (req.body.password) { //Se o campo "password" existir
                // Encripta o valor de "password" em "password_hash"
                req.body.password_hash = await hash(req.body.password, 12)

                //Destrói o campo "password" para que ele não seja passado para o model
                delete req.body.password
            }
            const id = req.body._id
            const result = await User.findByIdAndUpdate(id, req.body)
            // HTTP 204: No content
            if (result) res.status(204).end()
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const id = req.body._id
            const result = await User.findByIdAndDelete(id)
            if (result) res.status(204).end()
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    login: async (req: Request, res: Response) => {

        try {
            const user = await User.findOne({ email: req.body.email }).select('+password_hash')

            if (!user) {
                res.status(401).end()
            }
            else {
                compare(req.body.password, user.password_hash, function (err, result) {
                    if (result) {
                        // expiresIn: prazo de validade do token,
                        // em segundos
                        const token = sign({ id: user._id }, process.env.SECRET as string, { expiresIn: 3600 })
                        // Resposta com HTTP 200 implícito
                        res.json({ auth: true, token })
                    }
                    else {
                        // HTTP 401: Unauthorized
                        res.status(401).end()
                    }
                })
            }
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    logout: async (req: Request, res: Response) => {
        res.send({ auth: false, token: null })
    },

}

export default userController