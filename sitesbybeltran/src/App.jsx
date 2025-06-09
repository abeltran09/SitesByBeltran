import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/nav';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import ServiceDetailsPage from './pages/details';
import RestaurantLanding from './portfolio/bellavista';
import BarbershopLanding from './portfolio/primecuts';
import NailSalonLanding from './portfolio/luxenails';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AppContent() {
  const location = useLocation()
  
  // Define routes where you don't want to show the main nav
  const portfolioRoutes = ['/bellavista', '/primecuts', '/luxenails']
  const showNav = !portfolioRoutes.includes(location.pathname)

  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<ServiceDetailsPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bellavista' element={<RestaurantLanding />} />
        <Route path='/primecuts' element={<BarbershopLanding />} />
        <Route path='/luxenails' element={<NailSalonLanding />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App