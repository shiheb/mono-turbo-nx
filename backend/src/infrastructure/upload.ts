import type { RequestHandler } from 'express'
import multer, { FileFilterCallback } from 'multer'

import { ImageSizeInMb, Mimetype } from '@/constants'
import { mbToBytes } from '@/utils/maths'
import { joinRelativeToMainPath } from '@/utils/paths'

// Multer file filter
const fileFilter = (
  _: any,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const mimetypes: string[] = Object.values(Mimetype)

  if (!mimetypes.includes(file.mimetype)) {
    return cb(new Error(`Only ${mimetypes} files are allowed.`))
  }

  cb(null, true)
}

// Multer upload instance
const upload = multer({
  dest: joinRelativeToMainPath(process.env.STORAGE_PATH),
  limits: { fileSize: mbToBytes(ImageSizeInMb.Ten) },
  fileFilter
})

// Explicit type annotation fixes TS inferred type issue
export const uploadSingleImage: RequestHandler = upload.single('file')
