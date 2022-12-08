import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { show } from "../../utilities/workouts-api";
import './WorkoutDetailsPage.css'

export default function WorkoutDetailPage({ image }) {
    let { workoutId } = useParams()
    const [workout, setWorkout] = useState()

    //get workout object from server
    useEffect(() => {
        async function fetchWorkoutAndUpdateState() {
            const response = await show(workoutId)
            setWorkout(response)
        }
        fetchWorkoutAndUpdateState()
    }, [workoutId])


    return (
        <div className="workout-details">
            <h1>Your Workout Details</h1>
            <Link to={`/track/${workoutId}`}>Start Workout!</Link>
            {
                workout ?
                    <div>{workout.exercises.map(exercise =>
                        <ul key={exercise._id}>
                            <li>{exercise.name}</li>
                            <img src={exercise.image} width="250" className="image" alt={image} />
                            <li>Weight: {exercise.weight}</li>
                            <li>Reps: {exercise.reps}</li>
                        </ul>)}
                    </div>
                    : <p>Waiting for server...</p>
            }
        </div>

    )
}