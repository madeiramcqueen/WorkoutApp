import ExerciseCard from "../ExerciseCard/ExerciseCard";
import { exerciseTypes } from '../../data'

export default function WorkoutPage() {
  return (
    <div className="workout-page">
      <h1>Workout Page</h1>
      {exerciseTypes.map((exercise) => (
        <ExerciseCard
          key={exercise.name}
          name={exercise.name}
          image={exercise.image}/>
      ))}
    </div>

  );
}