import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TrackWorkoutPage.css'
import { show } from '../../utilities/workouts-api'
import Timer from '../../components/Timer/Timer'

//Reference: https://dev.to/samba_code/nested-ternary-statements-in-react-jsx-35kp

export default function TrackWorkoutPage() {
    let { workoutId } = useParams()
    const [workout, setWorkout] = useState()
    const [index, setIndex] = useState(0)

    const nextCallBack = () => {
        setIndex(index + 1)
        console.log('got callback', index)
    }


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
                        return (<Timer
                            nextCallback={nextCallBack} />)
                    }
                } else {
                    return (<p>Waiting for server...</p>)
                }
            })()}
        </div>

    )
}