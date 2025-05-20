import { z } from 'zod';

export const formGoalSchema = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    category: z.string().min(1),
    isDone:z.boolean()
});

export const goalSchema = formGoalSchema.extend({
    id: z.number().min(1),
    isFavourite: z.boolean()
});


export const favoriteOnlySchema = goalSchema.pick({isFavourite: true});
export const idOnlySchema = goalSchema.pick({id: true});

export type FormGoal = z.infer<typeof formGoalSchema>;
export type Goal = z.infer<typeof goalSchema>;
