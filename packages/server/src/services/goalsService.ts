import { FormGoal, Goal } from '../types/goal';

const goals: Goal[] = [];

export const addGoalToDB = (goalCandidate: FormGoal): Goal => {
  const goalId: number = Date.now();
  const goal: Goal = { ...goalCandidate, id: goalId };
  goals.push(goal);
  return goal;
};
