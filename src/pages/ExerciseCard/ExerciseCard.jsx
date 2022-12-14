import { useState } from 'react';
import './ExerciseCard.css';

export default function ExerciseCard({ name, image, workout, setWorkout }) {
    const [exercise, setExercise] = useState({ name: name, image: image, weight: 10, reps: 10 })

    //set exercise weight
    const onWeightChange = function (event) {
        setExercise({ ...exercise, weight: event.target.value })

    }
    //set number of reps
    const onRepsChange = function (event) {
        setExercise({ ...exercise, reps: event.target.value })
    }

    //create new workout
    const onClick = function (event) {
        event.preventDefault()
        setWorkout({ ...workout, exercises: [exercise, ...workout.exercises] })
    }

    return (
        <div className="exercise-card">
            {name}
            <div className="container">
                <img src={image} className="image" alt={image} />
                <div className="middle">
                    <div className="text">{name}</div>
                </div>
            </div>
            <form onSubmit={onClick}>
                <label>Weight Level:</label>
                <select type="option" value={exercise.weight} onChange={onWeightChange}>
                    <option value="0">None</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                </select>
                <label>Reps:</label>
                <select type="option" value={exercise.reps} onChange={onRepsChange}>
                    <option value="5">5</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                </select>
                <button type="submit" className="btn btn-dark">Add Exercise</button>
            </form>
        </div>
    )
}