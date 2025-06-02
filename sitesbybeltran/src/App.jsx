import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Nav from './components/nav'
import Sevice from './pages/services'
import About from './pages/about'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Sevice />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
