import { FormGoal, Goal } from '@shared';

const goals: Map<number, Goal> = new Map();

export const addGoalToDB = (goalCandidate: FormGoal): Goal => {
  const goalId: number = Date.now();
  const goal: Goal = { ...goalCandidate, id: goalId, isFavourite: false };
  goals.set(goalId, goal);
  return goal;
};

export const updateGoalInDb = (
  { id }: Pick<Goal, 'id'>,
  isFavorite: Pick<Goal, 'isFavourite'>,
): Goal => {
  const exiting = goals.get(id);
  if (!exiting) {
    throw new Error('Goal not found.');
  }
  const updatedGoal = { ...exiting, ...isFavorite };
  goals.set(id, updatedGoal);
  return updatedGoal;
};

export const getGoalsFromDB = (): Goal[] => {
  return Array.from(goals.values());
};
