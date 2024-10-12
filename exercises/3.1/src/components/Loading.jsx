import { useState, useEffect } from 'react';

const Loading = () => {
    const [bool, setBool] = useState(false);
    const messageLoad = "Loading in progress";

    return (
        <div>
            {bool ? null : <p>{messageLoad}</p>}
        </div>
    );
}

export default Loading;