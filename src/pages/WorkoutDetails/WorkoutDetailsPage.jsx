import { useParams } from "react-router-dom";

export default function WorkoutDetailPage() {
    const workoutId = useParams()

    return (
        <h1> Workout Details Page</h1>
    )
}