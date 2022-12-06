const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String },
    image: { type: String },
    weight: { type: Number },
    reps: { type: Number }
})

const workoutSchema = new Schema({
    date: { type: String },
    duration: { type: Number },
    exercises: [exerciseSchema]
})

module.exports = mongoose.model('Workout', workoutSchema);