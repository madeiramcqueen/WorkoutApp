const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: { type: String },
    image: { type: String },
    weight: { type: Number },
    reps: { type: Number }
}, {
    timestamps: true
})

const workoutSchema = new Schema({
    exercises: [exerciseSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema);