import { dirname, join } from 'path'

const mainFilePath = process.argv[1]
const mainDir = mainFilePath ? dirname(mainFilePath) : ''

export const joinRelativeToMainPath = (path = '') => {
  if (!mainDir) return path
  return join(mainDir, path)
}

export const appUrl = (path = '') =>
  `${process.env.APP_URL?.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
