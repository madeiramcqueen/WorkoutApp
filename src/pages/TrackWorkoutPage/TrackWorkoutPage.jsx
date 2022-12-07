import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TrackWorkoutPage.css'
import { show } from '../../utilities/workouts-api'
import Timer from '../../components/Timer/Timer'

export default function TrackWorkoutPage() {
    let { workoutId } = useParams()
    const [workout, setWorkout] = useState()
    const [index, setIndex] = useState()

    //useEffect to load workout object from server
    useEffect(() => {
        async function fetchWorkoutAndUpdateState() {
            const response = await show(workoutId)
            setWorkout(response)
            console.log('got workout info!', response)
        }
        fetchWorkoutAndUpdateState()
    }, [])

    return (
        <div className="track-workout">
            <h1> Track Your Workout</h1>
            {(() => {
                if (workout) {
                    if (index >= workout.exercises.length) {
                        return (<p>Your workout is complete!</p>)
                    } else {
                        return (<Timer />)
                    }
                } else {
                    return (<p>Waiting for server...</p>)
                }
            })()}
        </div>

    )
}