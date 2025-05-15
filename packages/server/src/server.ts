import express, { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import cors from 'cors';
import goalsRouter from './routes/goalsRoutes';
const app = express();
const port = 3000;
app.use(cors()); // <-- This allows cross-origin requests
app.use(express.json());

// GENERAL API FOR SANITY
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// ROUTERS
app.use('/api/goals', goalsRouter);

// GLOBAL ERROR MIDDLEWARE
app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// //RUN SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
