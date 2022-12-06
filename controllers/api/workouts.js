
const Workout = require('../../models/workout')

module.exports = {
    create: createWorkout,
    update: updateWorkout,
    index,
    show: showWorkout,
    delete: deleteWorkout
}

async function createWorkout(req, res) {
    try {
        const workout = await Workout.create(req.body);
        await workout.save()

    } catch (err) {
        res.status(400).json(err);
    }
}

async function updateWorkout(req, res) {
    try {
        await Workout.findByIdAndUpdate(req.params.id, req.body)
        console.log("updated user!")

    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {
        const workouts = await Workout.find({})
        res.json(workouts)
        console.log("got workouts!")

    } catch (err) {
        res.status(400).json(err);
    }
}

async function showWorkout(req, res) {
    try {
        const workout = await Workout.findById(req.params.id)
        console.log("getting workout!")
        res.json(workout)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteWorkout(req, res) {
    try {

    } catch (err) {

    }
}