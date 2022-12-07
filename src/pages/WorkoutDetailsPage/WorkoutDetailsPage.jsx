import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './WorkoutDetailsPage.css'

export default function WorkoutDetailPage({ }) {
    let { workoutId } = useParams()

    return (
        <div className="workout-details">
            <h1> Workout Details Page</h1>
            <Link to={`/timer`}>Start Workout!</Link>
        </div>

    )
}