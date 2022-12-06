import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInsertionEffect } from "react";

async function index() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ key: 'Workout 1: ', exercises: [] }])
        }, 1000)
    })
}

export default function WorkoutList() {
    const [workouts, setWorkouts] = useState([])
    console.log('Workouts list/home page is rendering!')

    useEffect(() => {
        async function fetchWorkoutsAndUpdateState() {
            const response = await index()
            setWorkouts(response)
        }
        fetchWorkoutsAndUpdateState()
    }, [])


    return (
        <div class="workout-list">
            <h2>Your current workouts:</h2>
            {
                workouts
                    ? <p>{workouts.map(workout => <span key={workout.key}> {workout.key} </span>)}</p>
                    : <p>Waiting for server...</p>
            }
            <Link to={`/workouts`}>Create Your Workout!</Link>
        </div>
    )
}