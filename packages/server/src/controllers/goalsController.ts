// goalsController.ts
import { Request, Response, NextFunction } from 'express';
import { formGoalSchema, Goal } from '@shared';
import { addGoalToDB, getGoalsFromDB } from '../services/goalsService';

export async function createGoal(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const parsedGoal = formGoalSchema.safeParse(req.body);

    if (!parsedGoal.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: parsedGoal.error.flatten().fieldErrors,
      });
      return;
    }

    const newGoal: Goal = addGoalToDB(parsedGoal.data);
    res.status(201).json(newGoal);
    return;
  } catch (err) {
    return next(err);
  }
}

export async function getGoals(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const goals = getGoalsFromDB();
    res.status(200).json({ goals: goals });
    return;
  } catch (err) {
    return next(err);
  }
}
