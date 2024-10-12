import { useState, useEffect } from 'react';
import Loading from './components/Loading';

const Statistics = ({ good, neutral, bad }) => {
    let avg, all, positive;
    all = good + neutral + bad;
    avg = (good - bad) / all;
    positive = (good / all) * 100;
    return (
        <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {avg}</p>
            <p>positive {positive} %</p>
        </>
    );
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => { setLoading(false); }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {loading ? <Loading /> : (
                <>
                    <h1>give feedback</h1>
                    <button onClick={() => setGood(good + 1)}>good</button>
                    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
                    <button onClick={() => setBad(bad + 1)}>bad</button>
                    <h1>statistics</h1>
                    {good === 0 && neutral === 0 && bad === 0 ? "No feedback given" : <Statistics good={good} neutral={neutral} bad={bad} />}
                </>
            )}
        </div>
    );
}

export default App;