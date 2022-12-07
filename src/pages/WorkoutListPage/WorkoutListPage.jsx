import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { index } from "../../utilities/workouts-api";
import './WorkoutListPage.css'

export default function WorkoutList() {
    const [workouts, setWorkouts] = useState()
    console.log('Workouts list/home page is rendering!')

    useEffect(() => {
        async function fetchWorkoutsAndUpdateState() {
            const response = await index()
            setWorkouts(response)
        }
        fetchWorkoutsAndUpdateState()
    }, [])


    return (
        <div className="workout-list">
            <h4>Welcome to your Workouts Page! </h4>
            <h4>Take a look at your current workouts:</h4>
            {
                workouts ?
                    <div>{workouts.map(workout =>
                        <ul>
                            <Link className="w3-card-4" to={`/workouts/${workout._id}`}>Workout : {workout._id}</Link>
                        </ul>)}
                    </div>
                    : <p>Waiting for server...</p>
            }
            <Link className="link" to={`/workouts`}>Create Your Workout!</Link>
        </div>
    )
}