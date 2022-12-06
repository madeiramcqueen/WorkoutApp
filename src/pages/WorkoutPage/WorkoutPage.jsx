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
    create(workout).then(navigateHome)
  }

  return (
    <div className="workout-page">
      <h1>Here's Your Current Workout:</h1>
      <button type="submit" onClick={onClick}>Save My Workout</button>
      {workout.exercises.map((exercise, key) => (
        <div
          key={key}>
          <p>Exercise Name: {exercise.name}</p>
          <p>Exercise Weight: {exercise.weight}</p>
          <p>Exercise Reps: {exercise.reps}</p>
        </div>
      ))}
      <h1 className="w3-padding-30 w3-round ">Create Your Workout</h1>
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