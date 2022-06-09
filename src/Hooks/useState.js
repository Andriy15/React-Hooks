import React, {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    function increment() {
        setCounter(counter + 1)
        // setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1 )
    }

    function updateState() {
        setState(prev => {
            return {
                ...prev,
                title: 'New title'
            }
        })
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>Add</button>
            <button onClick={decrement} className='btn btn-danger'>Low</button>
            <button onClick={updateState} className='btn btn-default'>Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App
