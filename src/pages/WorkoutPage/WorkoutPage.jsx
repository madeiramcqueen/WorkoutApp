import ExerciseCard from "../ExerciseCard/ExerciseCard";
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
      <h4>Select Exercises To Add To Your Workout:</h4>
      <button type="submit" className="w3-grey" onClick={onClick}>Save My Workout</button>
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