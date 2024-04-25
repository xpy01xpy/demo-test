import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <div>
                <button style={{ border:'1px solid red' }} onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
