import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './TrackWorkoutPage.css'
import { show } from '../../utilities/workouts-api'
import Timer from '../../components/Timer/Timer'

//Reference: https://dev.to/samba_code/nested-ternary-statements-in-react-jsx-35kp

export default function TrackWorkoutPage({ image }) {
    let { workoutId } = useParams()
    const [workout, setWorkout] = useState()
    const [index, setIndex] = useState(0)

    const nextCallBack = () => {
        setIndex(index + 1)
    }

    //useEffect to load workout object from server
    useEffect(() => {
        async function fetchWorkoutAndUpdateState() {
            const response = await show(workoutId)
            setWorkout(response)
        }
        fetchWorkoutAndUpdateState()
    }, [workoutId])

    return (
        <div className="track-workout">
            <h1>Track Your Workout</h1>
            {(() => {
                if (workout) {
                    //workout is loaded
                    if (index >= workout.exercises.length) {
                        //all exercises in array have been completed
                        return (<p>Your workout is complete!</p>)
                    } else {
                        //timer is displayed with active workout showing
                        const exercise = workout.exercises[index]
                        return (
                            <>
                                <div
                                    key={exercise._id}>
                                    <p>Exercise Name: {exercise.name}</p>
                                    <img src={exercise.image} width="250" className="image" alt={image} />
                                    <p>Exercise Weight: {exercise.weight}</p>
                                    <p>Exercise Reps: {exercise.reps}</p>
                                </div>
                                <Timer
                                    nextCallback={nextCallBack} />
                            </>)
                    }
                } else {
                    return (<p>Waiting for server...</p>)
                }
            })()}
            {/* {workout.exercises.map((exercise, key) => (
                
            ))} */}
        </div>
    )
}