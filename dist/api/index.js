"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
const error_middlewares_1 = __importDefault(require("./middlewares/error.middlewares"));
const cors_middlewares_1 = __importDefault(require("./middlewares/cors.middlewares"));
const api = (0, express_1.default)();
//req middlewares
api.use(express_1.default.json());
api.use(express_1.default.urlencoded({ extended: true }));
api.use(cors_middlewares_1.default);
// routes
api.use('/', user_routes_1.userRoute);
// res middlewares
api.use(error_middlewares_1.default);
exports.default = api;
