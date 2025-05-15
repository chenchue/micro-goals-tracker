import { Router } from 'express';
import { createGoal } from '../controllers/goalsController';

const router: Router = Router();

// @route   POST /api/goals
// @desc    Create a new goal
// @access  Public (if no auth)
// @returns 201 + goal JSON, or 500 error
router.route('/').post(createGoal);

export default router;
