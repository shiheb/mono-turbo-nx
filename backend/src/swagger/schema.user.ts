import { schema as userSchema } from '@/models/user'
import mongooseToSwagger from 'mongoose-to-swagger'

const userSwagger = mongooseToSwagger(userSchema)

if (userSwagger.properties) {
  delete userSwagger.properties.password
  delete userSwagger.properties.verifications
  delete userSwagger.properties.resetPasswords
}

export const UserSchema = userSwagger
