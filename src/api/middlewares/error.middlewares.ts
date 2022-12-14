import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next): void => {
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
export default errorHandler;