import { ClientSession, ObjectId, Document } from 'mongoose'
import { Verification } from '@/models'
import { createDateNow } from '@/utils/dates'

// Mongoose typed document for Verification
export interface IVerification {
  user: ObjectId
  email: string
  accessToken: string
  expiresIn: Date
}

export type VerificationDoc = Document<unknown, any, IVerification> &
  IVerification

// Explicit service type
export type VerificationServiceType = {
  create: (
    params: {
      userId: ObjectId
      email: string
      accessToken: string
      expiresIn: Date
    },
    session?: ClientSession
  ) => Promise<VerificationDoc>
  findOneAndUpdateByUserIdAndEmail: (
    params: {
      userId: ObjectId
      email: string
      accessToken: string
      expiresIn: Date
    },
    session?: ClientSession
  ) => Promise<VerificationDoc | null>
  getByValidAccessToken: (
    accessToken: string
  ) => Promise<VerificationDoc | null>
  deleteManyByUserId: (
    userId: ObjectId,
    session?: ClientSession
  ) => Promise<{ deletedCount?: number }>
}

export const verificationService: VerificationServiceType = {
  create: ({ userId, email, accessToken, expiresIn }, session) =>
    new Verification({ user: userId, email, accessToken, expiresIn }).save({
      session
    }),

  findOneAndUpdateByUserIdAndEmail: (
    { userId, email, accessToken, expiresIn },
    session
  ) => {
    const filter = { user: userId, email }
    const update = { user: userId, email, accessToken, expiresIn }
    const options = session ? { session, new: true } : { new: true }

    return Verification.findOneAndUpdate(
      filter,
      update,
      options
    ) as Promise<VerificationDoc | null>
  },

  getByValidAccessToken: accessToken =>
    Verification.findOne({
      accessToken,
      expiresIn: { $gte: createDateNow() }
    }) as Promise<VerificationDoc | null>,

  deleteManyByUserId: (userId, session) =>
    Verification.deleteMany({ user: userId }, { session })
}
