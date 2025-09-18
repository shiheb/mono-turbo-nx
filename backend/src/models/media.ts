import { Schema, model } from 'mongoose'
import mongooseToSwagger from 'mongoose-to-swagger'
import { IMedia, MediaModel } from '@/contracts/media'

const schema = new Schema<IMedia, MediaModel>(
  {
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
    orderColumn: {
      type: Number,
      default: 0
    },
    refType: String,
    refId: { type: Schema.Types.ObjectId }
  },
  { timestamps: true }
)

export const Media = model<IMedia, MediaModel>('Media', schema)

export const swaggerMediaSchema = mongooseToSwagger(Media)
