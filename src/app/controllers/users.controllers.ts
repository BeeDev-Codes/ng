import { UserBasic } from '../../types';
import { UserModel } from '../models/users.models';
import { UserUseCases } from '../useCases/users.useCases';

export class UserController {
  constructor(
    private userUseCases: UserUseCases,
  ) {}
  async register(body: UserBasic): Promise<void | string> {
   //const user = await this.userValidator.RegisterValidator(body);
    const client = await this.userUseCases.getUser(body.username);
    if (client) return 'User already exists';
    return await this.userUseCases.register(body);
  }
};