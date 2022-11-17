"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("./api"));
const vars_1 = __importDefault(require("./vars"));
api_1.default.listen(vars_1.default.api.port, () => {
    console.log(`on in ${vars_1.default.api.port}`);
});
