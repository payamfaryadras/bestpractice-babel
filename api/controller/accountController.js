import ApiController from './apiController';

export default class AccountController extends ApiController{

    constructor(logger){
        super();
       this.logger = logger;
       
    }

    async getAllUsers(req,res){

        this.logger.info('dfsadf');
        res.send("return all users");

    };

}

