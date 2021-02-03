import ApiController from './apiController';


export default class AccountController extends ApiController{

    constructor(){
        super();
    }

    async getAllUsers(req,res){
        
        res.send("return all users");

    };

}

