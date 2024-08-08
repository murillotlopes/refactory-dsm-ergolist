import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Lê o token passado no cabeçalho da requisição
    const token = req.headers['x-access-token'] as string

    // Se o token não existir, retorna 403: Forbidden
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided' })

    // Verifica se o token é válido e está no prazo de validade
    verify(token, process.env.SECRET as string, (err, decoded) => {
        // Token inválido/expirado
        if (err) return res.status(403).send({ auth: false, message: 'Failed to authenticate token' })

        // O token está OK!

        // Salva o id na request para uso posterior
        req.authenticatedId = decoded.id

        next()  // Chama a próxima função de middleware
    })
}

export default verifyToken