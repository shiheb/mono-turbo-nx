import { Request, Response } from 'express'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import winston from 'winston'

export const notFoundMiddleware = (req: Request, res: Response) => {
  winston.warn(`Route not found: ${req.method} ${req.originalUrl}`)
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ message: ReasonPhrases.NOT_FOUND, status: StatusCodes.NOT_FOUND })
}
