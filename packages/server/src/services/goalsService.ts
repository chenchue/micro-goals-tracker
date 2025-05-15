import { FormGoal, Goal } from '@shared';

const goals: Goal[] = [];

export const addGoalToDB = (goalCandidate: FormGoal): Goal => {
  const goalId: number = Date.now();
  const goal: Goal = { ...goalCandidate, id: goalId };
  goals.push(goal);
  return goal;
};

export const getGoalsFromDB = (): Goal[] => {
  return goals;
};
