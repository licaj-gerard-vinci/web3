import { useState } from 'react';

const ClickCounter = ({ title, message, hovermsg}) => {
    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(false);

    return (
        <div>
            <h1>{title}</h1>
            {count >= 10 ? <p>{message}</p> : null}
            <p>Click count: {count}</p>
            <button 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)} 
                onClick={() => setCount(count + 1)}
            >
            {hover ? "Please click on me now !" : hovermsg}
                Click me
            </button>
        </div>
    );
}

export default ClickCounter;