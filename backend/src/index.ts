import 'dotenv/config'
import '@/infrastructure/logger'
import express, { Express } from 'express'
import { mongoose, redis } from '@/dataSources'
import { authMiddleware, notFoundMiddleware } from '@/middlewares'
import { router } from '@/routes'
import { i18next, i18nextHttpMiddleware } from '@/i18n'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import {
  cookieParserMiddleware,
  helmetMiddleware,
  httpsMiddleware,
  corsMiddleware
} from './middlewares/securityMiddleware'
import winston from 'winston'
import { swaggerSpec } from './swagger'
import swaggerUi from 'swagger-ui-express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

mongoose.run()
redis.run()

const app: Express = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(
  join('/', process.env.STORAGE_PATH),
  express.static(join(__dirname, process.env.STORAGE_PATH))
)

if (process.env.NODE_ENV === 'development') {
  app.get('/ping', (req, res) => {
    res.status(200).json({
      message: 'pong',
      env: process.env.NODE_ENV,
      time: new Date().toISOString()
    })
  })
}

app.use(
  helmetMiddleware,
  corsMiddleware,
  express.json({ limit: '10mb' }),
  express.urlencoded({ limit: '10mb', extended: true }),
  cookieParserMiddleware,
  httpsMiddleware,
  i18nextHttpMiddleware.handle(i18next),
  authMiddleware,
  router,
  notFoundMiddleware
)

app.listen(process.env.APP_PORT, () => {
  winston.info(`✅ Server is listening on port ${process.env.APP_PORT}`)
})
