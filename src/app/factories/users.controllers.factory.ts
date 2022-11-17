import { UserController } from '../controllers/users.controllers';
import { UserModel } from '../models';
import { UserUseCases } from '../useCases/users.useCases';

export function makeUserController(): UserController {
  const model = new UserModel();
  const userCase = new UserUseCases(model);
  const controller = new UserController(userCase);
  return controller;
}