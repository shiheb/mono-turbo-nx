import { IUser } from '../contracts/user'

export declare global {
  namespace Express {
    interface Request {
      context: Context
      user?: IUser
    }
  }

  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number
      APP_URL: string
      CLIENT_URL: string
      MONGODB_URI: string
      REDIS_URI: string
      REDIS_TOKEN_EXPIRATION: number
      JWT_PRIVATE_KEY: string
      JWT_PUBLIC_KEY: string
      JWT_EXPIRATION: string
      MAIL_HOST: string
      MAIL_PORT: number
      MAIL_USER: string
      MAIL_PASSWORD: string
      MAIL_TPL_PATH: string
      STORAGE_PATH: string
    }
  }
}
