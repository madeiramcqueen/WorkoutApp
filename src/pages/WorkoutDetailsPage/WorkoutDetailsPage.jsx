import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { show } from "../../utilities/workouts-api";
import './WorkoutDetailsPage.css'

export default function WorkoutDetailPage() {
    let { workoutId } = useParams()
    const [workout, setWorkout] = useState()

    //useEffect to get workout object from server
    useEffect(() => {
        async function fetchWorkoutAndUpdateState() {
            const response = await show(workoutId)
            setWorkout(response)
            console.log('got workout info!', response)
        }
        fetchWorkoutAndUpdateState()
    }, [])


    return (
        <div className="workout-details">
            <h1> Workout Details Page</h1>
            {
                workout ?
                    <div>{workout.exercises.map(exercise =>
                        <ul key={exercise._id}>
                            {exercise.name}
                            {exercise.image}
                            {exercise.weight}
                            {exercise.reps}
                        </ul>)}
                    </div>
                    : <p>Waiting for server...</p>
            }

            <Link to={`/track/${workoutId}`}>Start Workout!</Link>
        </div>

    )
}