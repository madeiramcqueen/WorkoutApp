const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/api/workouts');

//Create a workout
router.post('/', workoutCtrl.create);

//Update a specific workout
router.put('/:id', workoutCtrl.update);

//Show workouts
router.get('/', workoutCtrl.index);

// Show a specific workout
router.get('/:id', workoutCtrl.show);

//Delete a specific workout
router.delete('/:id', workoutCtrl.delete);

module.exports = router;
