import { useState, useRef } from "react"

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
//Reference: https://dev.to/am20dipi/how-to-start-stop-counter-in-react-3hf1

export default function Timer({ nextCallback }) {
    const [seconds, setSeconds] = useState(0)
    //useRef will not re-render, using this instead of useState
    const intervalId = useRef()
    //seconds will move up by 1
    const intervalCallback = () => {
        setSeconds(seconds => seconds + 1)
    }
    //timer will start at 0 and go up by one second each call
    const startTimer = () => {
        setSeconds(0)
        intervalId.current = setInterval(intervalCallback, 1000)
        document.querySelector('.start-button').setAttribute('disabled', true)
        document.querySelector('.stop-button').removeAttribute('disabled')

        //add pause button
        const pauseButton = document.createElement('button')
        pauseButton.innerText = 'pause'
        pauseButton.className = 'pause-button'
        document.querySelector('.timer').appendChild(pauseButton)
        pauseButton.addEventListener('click', pauseTimer)
    }

    const pauseTimer = () => {
        //when pause button is clicked, change innerText to resume
        if (document.querySelector('.pause-button').innerText === 'pause') {
            document.querySelector('.pause-button').innerText = ('resume')

            //delete the timer interval
            clearInterval(intervalId.current)

        } else {
            document.querySelector('.pause-button').innerText = ('pause')
            //continue timer (start a new timer)
            intervalId.current = setInterval(intervalCallback, 1000)
        }
    }

    const stopTimer = () => {
        //delete the timer interval
        clearInterval(intervalId.current)
        document.querySelector('.stop-button').setAttribute('disabled', true)
        document.querySelector('.start-button').removeAttribute('disabled')

        //delete pause button
        document.querySelector('.pause-button').remove()

        //invoke next callback
        nextCallback()
        console.log('got nextCallback!', nextCallback)
    }

    return (
        <div className="timer">
            <button className="start-button" onClick={startTimer}>Start</button>
            <button className="stop-button" onClick={stopTimer}>Stop</button>
            <p id="counter">{seconds}</p>

        </div>
    )
}