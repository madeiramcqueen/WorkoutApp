import ExerciseCard from "../ExerciseCard/ExerciseCard";
import './WorkoutPage.css'
import { exerciseTypes } from '../../data'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../utilities/workouts-api";

export default function WorkoutPage() {
  const [workout, setWorkout] = useState({ exercises: [] })

  //navigate to WorkoutListPage (the Home page)
  const navigate = useNavigate()

  const onClick = function (event) {
    event.preventDefault()
    create(workout)
    navigate('/')
  }

  return (
    <div className="workout-page">
      <h5>Add Exercises To Your Workout:</h5>
      <button type="submit" onClick={onClick} className="btn btn-dark">Save My Workout</button>
      {workout.exercises.map((exercise, key) => (
        <div key={key} className="card border-primary mb-3">
          <div className="card-header">{exercise.name}</div>
          <div className="card-body">
            <p className="card-text">Exercise Weight: {exercise.weight}</p>
            <p className="card-text">Exercise Reps: {exercise.reps}</p>
          </div>
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