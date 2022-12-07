import { useState } from "react"
import { useRef } from "react"

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval

export default function Timer() {
    const [seconds, setSeconds] = useState(0)
    //useRef will not re-render, using this instead of useState
    const intervalId = useRef()
    //seconds will move up by 1 second intervals
    const intervalCallback = () => {
        setSeconds(seconds => seconds + 1)
    }
    //timer will start at 0 and go up by one second each call
    const startTimer = () => {
        setSeconds(0)
        intervalId.current = setInterval(intervalCallback, 1000)
        document.querySelector('.start-button').setAttribute('disabled', true)
        document.querySelector('.stop-button').removeAttribute('disabled')
    }

    const stopTimer = () => {
        //delete the timer interval
        clearInterval(intervalId.current)
        document.querySelector('.stop-button').setAttribute('disabled', true)
        document.querySelector('.stop-button').removeAttribute('disabled')
    }

    return (
        <div className="timer">
            <button className="start-button" onClick={startTimer}>Start</button>
            <button className="stop-button" onClick={stopTimer}>Stop</button>
            <p id="counter">{seconds}</p>

        </div>
    )
}