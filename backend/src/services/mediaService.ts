import { ClientSession, ObjectId } from 'mongoose'

import { Media } from '@/models'
import { CreateMediaPayload, UpdateMediaPayload } from '@/contracts/media'
import { MediaRefType } from '@/constants'

interface MediaService {
  getById: (mediaId: ObjectId) => any
  findOneByRef: (data: { refType: MediaRefType; refId: ObjectId }) => any
  findManyByRef: (data: { refType: MediaRefType; refId: ObjectId }) => any
  create: (data: CreateMediaPayload, session?: ClientSession) => any
  updateById: (
    mediaId: ObjectId,
    data: UpdateMediaPayload,
    session?: ClientSession
  ) => any
  deleteById: (mediaId: ObjectId, session?: ClientSession) => any
  deleteManyByRef: (
    data: { refType: MediaRefType; refId: ObjectId },
    session?: ClientSession
  ) => any
}

export const mediaService: MediaService = {
  getById: (mediaId: ObjectId) => Media.findById(mediaId),

  findOneByRef: ({
    refType,
    refId
  }: {
    refType: MediaRefType
    refId: ObjectId
  }) => Media.findOne({ refType, refId }),

  findManyByRef: ({
    refType,
    refId
  }: {
    refType: MediaRefType
    refId: ObjectId
  }) => Media.find({ refType, refId }),

  create: (
    {
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      path,
      size
    }: CreateMediaPayload,
    session?: ClientSession
  ) =>
    new Media({
      originalname,
      encoding,
      mimetype,
      destination,
      filename,
      path,
      size
    }).save({ session }),

  updateById: (
    mediaId: ObjectId,
    { refType, refId }: UpdateMediaPayload,
    session?: ClientSession
  ) => {
    const data = [{ _id: mediaId }, { refType, refId }]

    let params = null

    if (session) {
      params = [...data, { session }]
    } else {
      params = data
    }

    return Media.updateOne(params ?? data)
  },

  deleteById: (mediaId: ObjectId, session?: ClientSession) =>
    Media.deleteOne({ _id: mediaId }, { session }),

  deleteManyByRef: (
    {
      refType,
      refId
    }: {
      refType: MediaRefType
      refId: ObjectId
    },
    session?: ClientSession
  ) => Media.deleteMany({ refType, refId }, { session })
}
