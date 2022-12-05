import App from "../../pages/App/App";
import { Link } from "react-router-dom";

export default function WorkoutList({ user, setUser }) {
    return (
        <div class="workout-list">
            <h2>Your current workouts:</h2>
            <Link to={`/workouts`}>Create Your Workout!</Link>
        </div>
    )
}