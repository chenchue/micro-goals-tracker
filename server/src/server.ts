import express, { Request, Response } from 'express';

import { addGoalToDB } from './services/goalsService';
import { FormGoal, Goal } from '../types/goal';
import { RouteParameters, NextFunction } from 'express-serve-static-core';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors()); // <-- This allows cross-origin requests
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post<'/goals', RouteParameters<'/goals'>, Goal, FormGoal>(
  '/goals',
  (req: Request, res: Response, next: NextFunction): void => {
    const goalCandidate: FormGoal = req.body as FormGoal;
    const newGoal: Goal = addGoalToDB(goalCandidate);
    res.json(newGoal);
  },
);

// //RUN SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
