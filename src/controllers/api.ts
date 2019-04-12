import { NextFunction, Request, Response } from 'express'
import { ApplicationType } from '../models/applicationType'
import { formatOutput } from '../utils/orderApiUtility'

export const getApi = (req: Request, res: Response, next: NextFunction) => {
  return formatOutput(res, { title: 'Order API' }, 200, ApplicationType.JSON)
}
