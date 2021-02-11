import ApiController from './apiController';

export default class AccountController extends ApiController{

    constructor(logger){
        super();
       this.logger = logger;
       
    }

    async getAllUsers(req,res){

        this.logger.info('I am an info log', {name: 'George', tutorial: 'Logging tutorial'});
        res.send("return all users");

    };

}

