import { Router } from 'express';
import AccountRouter from './accountRouter';
import GroupRouter from './groupRouter';
import AccountController from '../controller/accountController';
import logConfig from '../../config/development/log.json';
import logger from '../../common/logger';

export default async function (app) {

   
    const accountController = new AccountController(logger);
    const accountRouter = new AccountRouter(accountController);
    const groupRouter = new GroupRouter();
    app.use('/accounts', accountRouter.Router);
    app.use('/groups', groupRouter.Router);
    return app;
}




