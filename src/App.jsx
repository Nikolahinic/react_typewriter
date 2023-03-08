import React from 'react'
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (
    <div>
        <h1 style={{padding: '3rem', margin: 'auto 0'}}>
          I'm a
          <span style={{color: 'red', fontWeight: 'bold', marginLeft: '10px'}}>
            <Typewriter 
              loop
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpedd={1000}
              words={['Developer', 'React', 'Redux']}
            />
          </span>
        </h1>
    </div>
  )
}

export default App;