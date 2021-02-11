import { Router } from 'express'
import AccountRouter from './accountRouter'
import GroupRouter from './groupRouter'
import AccountController from '../controller/accountController'
import Logger from '../../common/logger'
import config from '../../config/index'
import morgan from 'morgan'
export default async function (app) {
 
  const logger = new Logger(config.app_name, config.logOptions)
  const accountController = new AccountController(logger)
  const accountRouter = new AccountRouter(accountController)
  const groupRouter = new GroupRouter()
  app.use(morgan('combined'))
  app.use('/accounts', accountRouter.Router)
  app.use('/groups', groupRouter.Router)
  return app
}
