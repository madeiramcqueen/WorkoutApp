import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { index } from "../../utilities/workouts-api";
import { deleteWorkout } from "../../utilities/workouts-api";
import './WorkoutListPage.css'


export default function WorkoutListPage() {
    const [workouts, setWorkouts] = useState()

    useEffect(() => {
        async function fetchWorkoutsAndUpdateState() {
            const response = await index()
            setWorkouts(response)
        }
        fetchWorkoutsAndUpdateState()
    }, [])

    const removeWorkoutById = (id) => {
        setWorkouts(current =>
            current.filter(workout => {
                return workout._id !== id
            }))
    }


    const deleteButton = (event) => {
        console.log('going to delete', event.target.value)
        //delete on server
        deleteWorkout(event.target.value)
        //delete on client
        removeWorkoutById(event.target.value)
    }

    return (
        <div className="workout-list">
            <h4>Welcome to your Workouts Page! </h4>
            <h4>Take a look at your current workouts:</h4>
            {
                workouts ?
                    <div>{workouts.map(workout =>
                        <ul key={workout._id}>
                            <Link className="w3-card-4" to={`/workouts/${workout._id}`}>Workout : {workout._id}</Link>
                            <button className="delete-button" onClick={deleteButton}
                                value={workout._id}>X</button>
                        </ul>
                    )}

                    </div>
                    : <p>Waiting for server...</p>
            }
            <Link className="link" to={`/workouts`}>Create Your Workout!</Link>
        </div>
    )
}