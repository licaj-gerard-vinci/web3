import { useState } from 'react'

const ClickCounter = ({title,message}) => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
        <h1>{title}</h1>
        {count >= 10 ? <p>{message}</p> : null}
        <p>Click count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
    }

export default ClickCounter;