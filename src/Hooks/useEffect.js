import React, {useState, useEffect} from "react";

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', event => mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', event => mouseMoveHandler)
        }
    }, [])

    return (
        <div>
            <h1>Source: {type}</h1>

            <button className='btn' onClick={() => setType('users')}>Users</button>
            <button className='btn' onClick={() => setType('todos')}>Todos</button>
            <button className='btn' onClick={() => setType('posts')}>Posts</button>

            {/*<pre>${JSON.stringify(data, null, 2)}</pre>*/}
            <pre>${JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App
