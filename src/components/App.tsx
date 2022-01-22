import * as React from 'react'
import Tilt from 'react-vanilla-tilt'
import my_photo from '/src/images/my_photo.jpg'
import './app.module.css'

const App = () => {
  return (
    <main>
      <Tilt className='img-container'>
        <img src={my_photo} alt="A handsome developer" />
      </Tilt>
      <h1>Hi, my name is Max and I am a Frontend Developer</h1>
    </main>
  )
}

export default App
