import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { index } from "../../utilities/workouts-api";
import './WorkoutList.css'

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
            <h2>Your current workouts:</h2>
            {
                workouts
                    ? <p>{workouts.map(workout =>
                        <ul className="w3-card-4" key={workout._id}> {workout._id} </ul>)}
                    </p>
                    : <p>Waiting for server...</p>
            }
            <Link className="link" to={`/workouts`}>Create Your Workout!</Link>
        </div>
    )
}