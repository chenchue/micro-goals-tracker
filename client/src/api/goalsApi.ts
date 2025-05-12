import { FormGoal, Goal } from '../types/goal';

export const postNewGoal = async (newGoal: FormGoal): Promise<Goal> => {
  console.log(newGoal);
  // const response = await fetch('http://localhost:3000/goals', {
  //   method: 'post',
  //   body: JSON.stringify(newGoal),
  //   headers: { 'Content-Type': 'application/json' },
  // });
  // const goal: Goal = await response.json();
  // return goal;
};
