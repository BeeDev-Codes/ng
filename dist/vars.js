"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const { env } = process;
exports.default = {
    api: {
        port: Number(env.API_PORT || env.PORT || 3001)
    },
    postgres: {
        databaseUrl: env.databaseUrl || "postgresql://postgres:ng-test@localhost:5432",
    }
};
