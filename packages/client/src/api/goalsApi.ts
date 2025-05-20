import { FormGoal, Goal } from '@shared';

export const postNewGoal = async (newGoal: FormGoal): Promise<Goal> => {
  console.log(newGoal);
  const response = await fetch('api/goals', {
    method: 'post',
    body: JSON.stringify(newGoal),
    headers: { 'Content-Type': 'application/json' },
  });
  const goal: Goal = await response.json();
  return goal;
};

export const getGoals = async (): Promise<Goal[]> => {
  const response = await fetch('api/goals', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });
  const { goals }: { goals: Goal[] } = await response.json();
  return goals;
};

export const updateGoalFavorite = async (
  { id }: Pick<Goal, 'id'>,
  { isFavourite }: Pick<Goal, 'isFavourite'>,
): Promise<Goal[]> => {
  const response = await fetch(`api/goals/${id}/favorite`, {
    method: 'patch',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isFavourite: isFavourite }),
  });
  const { goals }: { goals: Goal[] } = await response.json();
  return goals;
};
