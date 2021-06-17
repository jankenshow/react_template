import { useState } from 'react'

export const ClickCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <p className="counter-count">{count}</p>
            <br></br>
            <button
                className="counter-button"
                onClick={() => setCount((c) => c + 1)}
            >
                Count Up
            </button>
            <button
                className="counter-button"
                onClick={() => setCount((c) => c - 1)}
            >
                Count down
            </button>
            <button className="counter-button" onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}
