import { Router } from 'express'
import AccountRouter from './accountRouter'
import GroupRouter from './groupRouter'
import AccountController from '../controller/accountController'
import Logger from '../../common/logger'
import { logOption } from '../../config/index'
import morgan from 'morgan'
export default async function (app) {
  const logger = new Logger('app', logOption)
  const accountController = new AccountController(logger)
  const accountRouter = new AccountRouter(accountController)
  const groupRouter = new GroupRouter()
  app.use(morgan('dev'))
  app.use('/accounts', accountRouter.Router)
  app.use('/groups', groupRouter.Router)
  return app
}
