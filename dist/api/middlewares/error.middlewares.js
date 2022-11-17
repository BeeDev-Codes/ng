"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res, _next) => {
    const { name, message } = err;
    switch (name) {
        case 'NotFoundError':
            res.status(404).json({ message });
            break;
        case 'ValidationError':
            res.status(400).json({ message });
            break;
        default:
            res.status(500).json(message);
            break;
    }
};
exports.default = errorHandler;
