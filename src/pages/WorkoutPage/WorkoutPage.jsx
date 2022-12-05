import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { exerciseTypes } from '../../data'

export default function WorkoutPage({ user, setUser }) {

  return (
    <div className="workout-page">
      <h1 class="w3-padding-30 w3-round ">Create Your Workout</h1>
      {exerciseTypes.map((exercise) => (
        <ExerciseCard
          key={exercise.name}
          name={exercise.name}
          image={exercise.image} />
      ))}
    </div>

  );
}