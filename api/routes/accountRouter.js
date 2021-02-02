import BaseRouter from './baseRouter';

export default class AccountRouter extends BaseRouter {

    constructor(){
        super();

        this.Router.get('/', (req,res) => {
            res.send('get all accounts!');
        });
    };
};

