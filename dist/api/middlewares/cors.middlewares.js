"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const corsMiddleware = (_req, res, next) => {
    res.setHeader('access-control-allow-headers', '*');
    res.setHeader('access-control-allow-methods', '*');
    res.setHeader('access-control-allow-origin', '*');
    next();
};
exports.default = corsMiddleware;
