const express = require('express');
const router = express.Router();
const workoutCtrl = require('../../controllers/api/workouts');

router.post('/', workoutCtrl.create);
router.put('/:id', workoutCtrl.update);
router.get('/', workoutCtrl.index);
router.get('/:id', workoutCtrl.show);
router.get('/:id', workoutCtrl.delete);

module.exports = router;
