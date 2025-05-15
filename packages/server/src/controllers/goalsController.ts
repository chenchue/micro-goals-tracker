import { Request, Response, NextFunction } from 'express';
import { FormGoal, formGoalSchema, Goal, goalSchema } from '@shared';
import { addGoalToDB } from '../services/goalsService';
import { SafeParseReturnType } from 'zod';

export async function createGoal(req: Request, res: Response, next: NextFunction) {
  try {
    const parsedGoal = formGoalSchema.safeParse(req.body);

    // Defensive validation

    if (!parsedGoal.success) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: parsedGoal.error.flatten().fieldErrors,
      });
    }

    const newGoal: Goal = addGoalToDB(parsedGoal.data);
    return res.status(201).json(newGoal);
  } catch (err) {
    return next(err); // Pass error to global error middleware
  }
}
