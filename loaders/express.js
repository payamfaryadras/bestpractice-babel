import * as express from 'express';
import router from '../api/routes/index';

export default async (app) => {
    await router(app);
    return app;
}

