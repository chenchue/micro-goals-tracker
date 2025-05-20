// goalsController.ts
import { Request, Response, NextFunction } from 'express';
import { favoriteOnlySchema, formGoalSchema, Goal, idOnlySchema } from '@shared';
import { addGoalToDB, getGoalsFromDB, updateGoalInDb } from '../services/goalsService';

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

export async function updateFavorite(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const parsedId = idOnlySchema.safeParse(req.params.id);
    const parsedIsFavorite = favoriteOnlySchema.safeParse(req.body);
    if (!parsedId.success || !parsedIsFavorite.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: `${parsedId?.error?.flatten()?.fieldErrors}/n ${parsedIsFavorite.error?.flatten()?.fieldErrors}`,
      });
      return;
    }
    const newGoal: Goal = updateGoalInDb(parsedId.data, parsedIsFavorite.data);
    res.status(200).json(newGoal);
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
