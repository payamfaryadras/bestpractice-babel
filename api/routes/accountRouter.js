import BaseRouter from './baseRouter';
import AccountController from '../controller/accountController';

export default class AccountRouter extends BaseRouter {

    constructor(accountController){

        super(accountController);

        this.Router.route('/')
        .get(async (req, res) => this.Controller.getAllUsers(req, res));
    };
};

