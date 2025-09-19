import mongooseDefault from 'mongoose'
import winston from 'winston'

const { connect, disconnect } = mongooseDefault

export const mongoose = {
  run: async () => {
    try {
      const uri = process.env.MONGODB_URI
      if (!uri) {
        throw new Error('MONGODB_URI is not defined in environment variables')
      }
      await connect(uri)
      winston.info('✅ MongoDB connected successfully')
    } catch (error) {
      winston.error('❌ MongoDB connection failed:', error)
      process.exit(1)
    }
  },
  stop: async () => {
    try {
      await disconnect()
      winston.info('🛑 MongoDB disconnected')
    } catch (error) {
      winston.error('❌ MongoDB disconnection error:', error)
    }
  }
}
