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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosValidator = void 0;
Skip;
to;
content;
Search;
or;
jump;
to;
Pull;
requests;
Issues;
Codespaces;
Marketplace;
Explore;
leandroluk
    /
        t14 - revisao - from - zero - to - hero - todo - app - backend;
Public;
Code;
Issues;
Pull;
requests;
Actions;
Projects;
Security;
Insights;
t14 - revisao - from - zero - to - hero - todo - app - backend / src / app / validators / todos.validator.ts /
;
leandroluk;
finalizando;
ajuste;
para;
funcionar;
Latest;
commit;
892;
d25d;
on;
Apr;
20;
History;
1;
contributor;
34;
lines(28, sloc);
878;
Bytes;
const joi_1 = __importDefault(require("joi"));
const _validators_1 = require("./_validators");
class TodosValidator {
    paramsId(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                id: joi_1.default.string().required().length(36),
            });
            const result = yield (0, _validators_1.runSchema)(schema, value);
            return result;
        });
    }
    bodyAdd(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                description: joi_1.default.string().required(),
                isDone: joi_1.default.boolean().default(false)
            });
            const result = yield (0, _validators_1.runSchema)(schema, value);
            return result;
        });
    }
    bodyEdit(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = joi_1.default.object({
                description: joi_1.default.string(),
                isDone: joi_1.default.boolean()
            });
            const result = yield (0, _validators_1.runSchema)(schema, value);
            return result;
        });
    }
}
exports.TodosValidator = TodosValidator;
Footer;
2022;
GitHub, Inc.
;
Footer;
navigation;
Terms;
Privacy;
Security;
Status;
Docs;
Contact;
GitHub;
Pricing;
API;
Training;
Blog;
About;
t14 - revisao - from - zero - to - hero - todo - app - backend / todos.validator.ts;
at;
corrigido;
leandroluk / t14 - revisao - from - zero - to - hero - todo - app - backend;
