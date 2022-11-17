import { Router } from 'express';
import { makeUserController } from '../../app/factories/users.controllers.factory';

const userRoute = Router();
const userController = makeUserController();

userRoute.post('/register', async (req, res) => {
  const lal = await userController.register(req.body);
 console.log(lal);
  res.status(201).json(lal);
});

export { userRoute };