import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/user', UserController.store);

routes.get('/user', UserController.index);

routes.get('/user/:id', UserController.show);

routes.put('/user', UserController.update);

routes.delete('/user/:id', UserController.delete);

export default routes;