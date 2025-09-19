import cors from 'cors'

import cookieParser from 'cookie-parser'
import { StatusCodes } from 'http-status-codes'
import express, { Request, Response, NextFunction } from 'express'

const allowedOrigins = ['*']
// const allowedOrigins = [process.env.CLIENT_URL]

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: StatusCodes.OK
})

export const cookieParserMiddleware: express.RequestHandler = cookieParser()

export const httpsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.secure && process.env.NODE_ENV === 'production') {
    return res.redirect(`https://${req.headers.host}${req.url}`)
  }
  next()
}
