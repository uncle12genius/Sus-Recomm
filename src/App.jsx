import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Values from './pages/Values'
import OurTeam from './pages/OurTeam'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Values/>
      <OurTeam/>
    </div>
  )
}

export default App
