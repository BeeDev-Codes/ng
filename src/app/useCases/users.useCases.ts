import { User, UserBasic } from '../../types';
import { UserModel } from '../models';

export class UserUseCases {
  constructor(private userModel: UserModel) { }

  async register(user: UserBasic): Promise<void> {
    await this.userModel.register(user);
  }

  async getUser(username: UserBasic['username']): Promise<UserBasic | string> {
    return await this.userModel.getUser(username);
  }
};

