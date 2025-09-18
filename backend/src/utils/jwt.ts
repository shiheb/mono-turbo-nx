import jwt, { SignOptions } from 'jsonwebtoken'
import { ObjectId } from 'mongoose'
import winston from 'winston'
import ms from 'ms'
import { IAccessToken, IJwtUser } from '@/contracts/jwt'

if (!process.env.JWT_PRIVATE_KEY || !process.env.JWT_PUBLIC_KEY) {
  throw new Error('JWT_PRIVATE_KEY and JWT_PUBLIC_KEY must be defined')
}

const privateKey = process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n')
const publicKey = process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n')
const expiresInMs = ms(process.env.JWT_EXPIRATION || '30m')
const expiresIn = Math.floor(expiresInMs / 1000)

export const jwtSign = (id: ObjectId): IAccessToken => {
  const signOptions: SignOptions = {
    algorithm: 'RS256',
    expiresIn
  }
  try {
    const accessToken = jwt.sign({ id }, privateKey, signOptions)
    return { accessToken }
  } catch (error) {
    winston.error('JWT signing failed:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    })
    throw error // rethrow to let caller handle it
  }
}

export const jwtVerify = ({ accessToken }: { accessToken: string }) => {
  return jwt.verify(accessToken, publicKey, {
    algorithms: ['RS256']
  }) as IJwtUser
}
