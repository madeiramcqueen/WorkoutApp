import ExerciseCard from "../ExerciseCard/ExerciseCard";
import './WorkoutPage.css'
import { exerciseTypes } from '../../data'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../utilities/workouts-api";

export default function WorkoutPage() {
  const [workout, setWorkout] = useState({ exercises: [] })

  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }

  const onClick = function (event) {
    event.preventDefault()
    create(workout).then(navigateHome) //TODO, not working and need to debug
  }

  return (
    <div className="workout-page">
      <h5>Add Exercises To Your Workout:</h5>
      <button type="submit" className="button button4" onClick={onClick}>Save My Workout</button>
      {workout.exercises.map((exercise, key) => (
        <div
          key={key} className="w3-panel w3-card-4">
          <p>Exercise Name: {exercise.name}</p>
          <p>Exercise Weight: {exercise.weight}</p>
          <p>Exercise Reps: {exercise.reps}</p>
        </div>
      ))}

      {exerciseTypes.map((exercise) => (
        <ExerciseCard
          key={exercise.name}
          name={exercise.name}
          image={exercise.image}
          workout={workout}
          setWorkout={setWorkout} />
      ))}
    </div>

  );
}