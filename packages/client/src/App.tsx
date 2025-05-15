import { JSX } from 'react';
import AddGoalForm from './components/AddGoalForm/AddGoalForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GoalsList from "./components/GoalList/GoalsList";
// import GoalsList from "./components/GoalList/GoalList";

export default function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <h1>Hello Micro Goals Tracker!</h1>
        <AddGoalForm />
          <GoalsList />
      </QueryClientProvider>
    </div>
  );
}
