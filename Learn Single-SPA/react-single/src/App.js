import React, { useState } from 'react'

function App({ name }) {
    const [number , setNumber] = useState(0)
  return (
    <div>
        <h1>
        {name}
        </h1>
        <div>
            <p style={{marginLeft : 25}}>{number}</p>
            <div style={{display : 'flex' , gap : 10}}>
                <button onClick={() => setNumber(number + 1)}>+</button>
                <button onClick={() => setNumber(number - 1)}>-</button>
            </div>
        </div>
    </div>
  )
}

export default App