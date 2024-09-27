import { useState } from 'react'

const ChangeColor = () =>{
    const couleur = ["red","green", "blue", "yellow", "purple"];
    
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % couleur.length);
    };
    return (
        <div   style={{ backgroundColor: couleur[index] }}>
            <button onClick={handleClick}>
                <p>{couleur[(index+1)% couleur.length]}</p>
            </button>
        </div>
    )
}

export default ChangeColor;