import { Request, Response, NextFunction } from 'express'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.headers.authorization) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }
  next()
}
