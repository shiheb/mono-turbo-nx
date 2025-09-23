import { ClientSession, ObjectId, Document } from 'mongoose'
import { ResetPassword } from '@/models'
import { createDateNow } from '@/utils/dates'

// Mongoose typed document for ResetPassword
export interface IResetPassword {
  user: ObjectId
  accessToken: string
  expiresIn: Date
}

export type ResetPasswordDoc = Document<unknown, any, IResetPassword> &
  IResetPassword

// Explicit service type
export type ResetPasswordServiceType = {
  create: (
    params: { userId: ObjectId; accessToken: string; expiresIn: Date },
    session?: ClientSession
  ) => Promise<ResetPasswordDoc>
  getByValidAccessToken: (
    accessToken: string
  ) => Promise<ResetPasswordDoc | null>
  deleteManyByUserId: (
    userId: ObjectId,
    session?: ClientSession
  ) => Promise<{ deletedCount?: number }>
}

export const resetPasswordService: ResetPasswordServiceType = {
  create: ({ userId, accessToken, expiresIn }, session) =>
    new ResetPassword({ user: userId, accessToken, expiresIn }).save({
      session
    }),

  getByValidAccessToken: accessToken =>
    ResetPassword.findOne({
      accessToken,
      expiresIn: { $gte: createDateNow() }
    }) as Promise<ResetPasswordDoc | null>,

  deleteManyByUserId: (userId, session) =>
    ResetPassword.deleteMany({ user: userId }, { session })
}
