import { RequestHandler } from 'express';

const corsMiddleware: RequestHandler = (_req, res, next) => {
  res.setHeader('access-control-allow-headers', '*');
  res.setHeader('access-control-allow-methods', '*');
  res.setHeader('access-control-allow-origin', '*');
  next();
};

export default corsMiddleware;
