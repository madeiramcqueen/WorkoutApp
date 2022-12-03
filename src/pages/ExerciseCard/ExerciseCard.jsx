import './ExercisePage.css';

export default function ExerciseCard({ name, image }) {
    return (
        <div className="exercise-card">
            <p> {name} </p>
            <div className="container">
                <img src={image} width="250" className="image" />
                <div className="middle">
                    <div className="text">{name}</div>
                </div>
            </div>
        </div>
    )
}