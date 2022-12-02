export default function ExerciseCard({ name, image }) {
    return (
        <div className="exercise-card">
            <p> {name} </p>
            <img src={image} />
        </div>
    )
}