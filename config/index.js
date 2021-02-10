import dotenv from 'dotenv';

dotenv.config();

export default {
    logOptions:{
        level:'info'
    },
  
        port:process.env.PORT
    

}