import { Router } from 'express';
import { createGoal, getGoals, updateFavorite } from '../controllers/goalsController';

const router: Router = Router();

// @route   POST /api/goals
// @desc    Create a new goal
// @access  Public (if no auth)
// @returns 201 + goal JSON, or 500 error
router.route('/').post(createGoal).get(getGoals);

router.route('/:id/favorite').patch(updateFavorite);

export default router;
