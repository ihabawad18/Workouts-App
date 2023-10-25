const express=require("express");
const workoutController = require("../controllers/workoutController");
const requireAUth = require("../middlewares/requireAuth");

const router=express.Router();

router.use(requireAUth);

router.get('/',workoutController.getAllWorkouts);
router.post('/',workoutController.addWorkout);
router.get('/:id',workoutController.getWorkout);

router.patch('/:id',workoutController.updateWorkout);
router.delete('/:id',workoutController.deleteWorkut);

module.exports=router;