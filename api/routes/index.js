import { Router } from 'express';
import AccountRouter from './accountRouter';
import GroupRouter from './groupRouter';

export default async function (app) {

    const accountRouter = new AccountRouter();
    const groupRouter = new GroupRouter();
    app.use('/accounts', accountRouter.Router);
    app.use('/groups', groupRouter.Router);
    return app;
}




