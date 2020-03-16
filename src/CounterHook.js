import React, { useState } from 'react'

function CounterHook() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <p><button onClick={() => setCount(count + 1)}>Increment Counter</button></p>
        </div>
    )
}


export default CounterHook

