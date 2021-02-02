import express from 'express';

import loaders from './loaders/index';

async function startServer() {

    const app = express();
    await loaders(app);


    app.listen(process.env.PORT || 3000, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Your server is ready !`);
    });
}

startServer();