import { useState } from 'react'

export const ClickCounter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(c => c + 1)}>Count Up</button>
            <button onClick={() => setCount(c => c -1)}>Count down</button>
            <button onClick={() => setCount(c => 0)}>Reset</button>
        </div>
    )
}