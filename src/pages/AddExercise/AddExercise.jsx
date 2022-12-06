import { useParams } from "react-router-dom"
import { useState } from "react"

export default function AddExercise({workout, setWorkout}) {
    let { exerciseName } = useParams()


    // const handleOnChange = function (event) {
    //     setExercise({ level: event.target.value, reps: event.target.value })
    // }

    // const handleAddSkill = function (event) {
    //     event.preventDefault()
    //     setExercise(exercise)
    //     console.log(exercise)
    // }

    return (
        <div className="AddExercise">
            <h1 class="w3-padding-30 w3-roundcode ">Select your {exerciseName} details </h1>
            <form>
                <label>Weight Level</label>
                <select>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="5">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                </select>
                <label>Number of Reps</label>
                <select>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                </select>
                <button type='submit'>Add Exercise To Your Workout</button>
            </form>
        </div>

    )
}