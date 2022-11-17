import { knexApi } from "../../db"
import { User, UserBasic } from  "../../types";

export class UserModel {
  constructor() {}
  
  async getUser(username: UserBasic['username']): Promise<User | string> {
    const user = knexApi.raw('SELECT * FROM "Users" WHERE "username" = ?', [username])
    return user[0] as unknown as User
  }

  async register(user: UserBasic): Promise<void> {
    await knexApi('Users').insert(user)
  }
}