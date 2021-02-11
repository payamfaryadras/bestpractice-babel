import dotenv from 'dotenv';

dotenv.config();

export default {

    logOptions:{
        level:process.env.LOG_LEVEL 
    },
        port:process.env.PORT,
        app_name:process.env.APP_NAME
    

}