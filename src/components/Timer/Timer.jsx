import { useState } from "react"

export default function Timer() {
    const [seconds, setSeconds] = useState(0)

    const startTimer = () => {

    }

    const stopTimer = () => {

    }

    const Count = seconds

    return (
        <div className="timer">
            <button className="button">Start</button>
            <button className="button">Stop</button>
            <p id="count">{Count}</p>

        </div>
    )
}