import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Values from './pages/Values'
import OurTeam from './pages/OurTeam'
import Story from './pages/Story'
import Footer from './components/Footer'
import Mission from './pages/Mission'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Mission/>
      <Values/>
      <Story/>
      <OurTeam/>
      <Footer/>

    </div>
  )
}

export default App
