// importa o model correspondente 
import { Request, Response } from 'express'
import Question from '../models/Question'

const questionController = {

    // Função que será chamada para criar entrada no Glossário
    create: async (req: Request, res: Response) => {
        try {
            await Question.create(req.body)
            // HTTP 201: Created
            res.status(201).end()
        }
        catch (error) {
            console.error(error)
            // HTTP 500: Internal Server Error
            res.status(500).send(error)
        }
    },

    // Função que devolve uma listagem das entradas de glossário já inseridas
    retrieve: async (req: Request, res: Response) => {
        try {
            const result = await Question.find().populate('group')
            // HTTP 200: OK é implícito aqui 
            res.send(result)
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    // Função que retorna uma unica entrada do glossário, com base no id fornecido
    retrieveOne: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const result = await Question.findById(id)

            // Se tivermos um resultado, retornamos status HTTP 200
            if (result) res.send(result)

            // Senão, retornamos HTTP 404: Not found
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    retrieveByGroup: async (req: Request, res: Response) => {
        try {
            const result = await Question.find({ group: req.params.groupId }).sort('number')

            res.send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    retrieveByGroupAndNumber: async (req: Request, res: Response) => {
        try {
            const result = await Question.findOne({ group: req.params.groupId, number: req.params.number })

            res.send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    update: async (req: Request, res: Response) => {
        try {
            const id = req.body._id
            const result = await Question.findByIdAndUpdate(id, req.body)

            // HTTP 204: No content
            if (result) res.status(204).end()
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    delete: async (req: Request, res: Response) => {
        try {
            const id = req.body._id
            const result = await Question.findByIdAndDelete(id)
            if (result) res.status(204).end()
            else res.status(404).end()
        }
        catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }

}

export default questionController