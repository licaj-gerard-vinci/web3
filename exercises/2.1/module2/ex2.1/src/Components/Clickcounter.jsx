import { useState } from 'react'


const Clickcounter = ({titre,message,messageSousCounter}) => {
    
    

    const storedCount = JSON.parse(localStorage.getItem("count"));
    const [count, setCount] = useState(storedCount ?? 0);
   
   

    const [changement, setChangement] = useState(false);

    const OnMouseEnter = () => {
        setChangement(!changement) 
        
       
    }
     const OnMouseLeave = () => {
        setChangement(!changement) 
    }

    

    return (
        <div>
             <h1>{titre}</h1>
             
            <button onMouseEnter={OnMouseEnter} onMouseLeave={OnMouseLeave} onClick={() => {
                 const newCount = count + 1;
                 setCount(newCount);
                 localStorage.setItem("count", JSON.stringify(newCount));
             }}>
            <p>{count}</p>
            {changement? <p>{messageSousCounter}</p> : null}
            </button>
            {count > 9 ? <p>{message}</p> : null}

        </div>
    )

    
}

export default Clickcounter;