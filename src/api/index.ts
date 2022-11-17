import express from 'express';
import { userRoute } from './routes/user.routes';
import errorHandler from './middlewares/error.middlewares';
import corsMiddleware from './middlewares/cors.middlewares';

const api = express();

//req middlewares
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(corsMiddleware)

// routes
api.use('/', userRoute);

// res middlewares
api.use(errorHandler)

export default api
