import { useState } from 'react'

const ClickCounter = ({title,message,hover}) => {
    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(false);
    
    return (
        <div>
        <h1>{title}</h1>
        {count >= 10 ? <p>{message}</p> : null}
        <p>Click count: {count}</p>
        <button onMouseEnter={setHover(!hover)} onMouseLeave={setHover(!hover)} onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
    }

export default ClickCounter;