export interface Goal {
    title: string;
    description: string;
    category: string;
    isDone: boolean;
    id: number;
}
export type FormGoal = Omit<Goal, 'id'>;
