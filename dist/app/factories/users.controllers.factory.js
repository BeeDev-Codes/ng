"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserController = void 0;
const users_controllers_1 = require("../controllers/users.controllers");
const models_1 = require("../models");
const users_useCases_1 = require("../useCases/users.useCases");
function makeUserController() {
    const model = new models_1.UserModel();
    const userCase = new users_useCases_1.UserUseCases(model);
    const controller = new users_controllers_1.UserController(userCase);
    return controller;
}
exports.makeUserController = makeUserController;
