"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const db_1 = require("../../db");
class UserModel {
    constructor() { }
    getUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = db_1.knexApi.raw('SELECT * FROM "Users" WHERE "username" = ?', [username]);
            return user[0];
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, db_1.knexApi)('Users').insert(user);
        });
    }
}
exports.UserModel = UserModel;
