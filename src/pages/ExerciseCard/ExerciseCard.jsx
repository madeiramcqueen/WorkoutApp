import './ExerciseCard.css';
import { Link } from 'react-router-dom'

export default function ExerciseCard({ name, image }) {
    return (
        <div className="exercise-card">
            <Link to={`/workouts/${name}`}>{name}</Link>
            <div className="container">
                <img src={image} width="250" className="image" />
                <div className="middle">
                    <div className="text">{name}</div>
                </div>
            </div>
        </div>
    )
}