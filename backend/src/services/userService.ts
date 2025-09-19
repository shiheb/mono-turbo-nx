import { ClientSession, ObjectId } from 'mongoose'

import { User } from '@/models'

interface UserService {
  create: (
    data: { email: string; password: string; verified?: boolean },
    session?: ClientSession
  ) => any
  getById: (userId: ObjectId) => any
  getByEmail: (email: string) => any
  isExistByEmail: (email: string) => any
  updatePasswordByUserId: (
    userId: ObjectId,
    password: string,
    session?: ClientSession
  ) => any
  updateVerificationAndEmailByUserId: (
    userId: ObjectId,
    email: string,
    session?: ClientSession
  ) => any
  updateProfileByUserId: (
    userId: ObjectId,
    data: { firstName: string; lastName: string },
    session?: ClientSession
  ) => any
  updateEmailByUserId: (
    userId: ObjectId,
    email: string,
    session?: ClientSession
  ) => any
  deleteById: (userId: ObjectId, session?: ClientSession) => any
  addResetPasswordToUser: (
    data: { userId: ObjectId; resetPasswordId: ObjectId },
    session?: ClientSession
  ) => Promise<void>
  addVerificationToUser: (
    data: { userId: ObjectId; verificationId: ObjectId },
    session?: ClientSession
  ) => Promise<void>
}

export const userService: UserService = {
  create: (
    {
      email,
      password,
      verified = false
    }: {
      email: string
      password: string
      verified?: boolean
    },
    session?: ClientSession
  ) =>
    new User({
      email,
      password,
      verified
    }).save({ session }),

  getById: (userId: ObjectId) => User.findById(userId),

  getByEmail: (email: string) => User.findOne({ email }),

  isExistByEmail: (email: string) => User.exists({ email }),

  updatePasswordByUserId: (
    userId: ObjectId,
    password: string,
    session?: ClientSession
  ) => {
    const data = [{ _id: userId }, { password, resetPasswords: [] }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return User.updateOne(params ?? data)
  },

  updateVerificationAndEmailByUserId: (
    userId: ObjectId,
    email: string,
    session?: ClientSession
  ) => {
    const data = [{ _id: userId }, { email, verified: true, verifications: [] }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return User.updateOne(params ?? data)
  },

  updateProfileByUserId: (
    userId: ObjectId,
    { firstName, lastName }: { firstName: string; lastName: string },
    session?: ClientSession
  ) => {
    const data = [{ _id: userId }, { firstName, lastName }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return User.updateOne(params ?? data)
  },

  updateEmailByUserId: (
    userId: ObjectId,
    email: string,
    session?: ClientSession
  ) => {
    const data = [{ _id: userId }, { email, verified: false }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return User.updateOne(params ?? data)
  },

  deleteById: (userId: ObjectId, session?: ClientSession) =>
    User.deleteOne({ user: userId }, { session }),

  addResetPasswordToUser: async (
    {
      userId,
      resetPasswordId
    }: {
      userId: ObjectId
      resetPasswordId: ObjectId
    },
    session?: ClientSession
  ) => {
    let options = {}

    if (session) {
      options = { session }
    }

    const user = await User.findOne({ _id: userId }, null, options)

    if (user) {
      if (!user.resetPasswords) {
        user.resetPasswords = []
      }
      user.resetPasswords.push(resetPasswordId)
      await user.save({ session })
    }
  },

  addVerificationToUser: async (
    {
      userId,
      verificationId
    }: {
      userId: ObjectId
      verificationId: ObjectId
    },
    session?: ClientSession
  ) => {
    let options = {}

    if (session) {
      options = { session }
    }

    const user = await User.findOne({ _id: userId }, null, options)

    if (user) {
      if (!user.verifications) {
        user.verifications = []
      }

      user.verifications.push(verificationId)

      await user.save({ session })
    }
  }
}
