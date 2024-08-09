import { Request, Response } from 'express'
import Answer from '../models/Answer'

const answerController = {

    // Função que será chamada para criar uma nova
    // entrada do glossário
    create: async (req: Request, res: Response) => {
        try {
            await Answer.create(req.body)
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
            const assessmentId = req.params.id

            const result = await Answer.find({ assessment: assessmentId }).populate('assessment').populate('question')
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
            const result = await Answer.findById(id)
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
            const id = req.body._id
            const result = await Answer.findByIdAndUpdate(id, req.body)
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
            const result = await Answer.findByIdAndDelete(id)
            if (result) res.status(204).end()
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    }

}

export default answerController