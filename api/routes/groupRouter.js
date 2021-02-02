import BaseRouter from './baseRouter'

export default class GroupRouter extends BaseRouter {
    constructor() {
        super();
        this.Router.get('/', (req,res) => {
            res.send('get all groups!');
        });
    }

}