import { NextFunction, RouteParameters } from 'express-serve-static-core';
import { FormGoal, Goal } from '../../types/goal';
import { Request, Response, Router } from 'express';
import { addGoalToDB } from '../services/goalsService';

const router: Router = Router();

router.route('/').post((req: Request, res: Response, next: NextFunction): void => {
  try {
    const goalCandidate: FormGoal = req.body as FormGoal;
    const newGoal: Goal = addGoalToDB(goalCandidate);
    res.status(201).json(newGoal);
  } catch (err) {
    next(err);
  }
});

export default router;
