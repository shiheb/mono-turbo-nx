import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { StatusCodes } from 'http-status-codes'

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

export const helmetMiddleware = helmet({
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
})

export const cookieParserMiddleware = cookieParser()

export const httpsMiddleware = (req, res, next) => {
  if (!req.secure && process.env.NODE_ENV === 'production') {
    return res.redirect(`https://${req.headers.host}${req.url}`)
  }
  next()
}
