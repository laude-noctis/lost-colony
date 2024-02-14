import React from 'react';
import './App.css'
import NavBar from './components/Navabr.jsx'
import { Route, Routes } from 'react-router-dom';
import { AboutPage, ContactPage, PortfolioPage, ResumePage } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />
      </Routes>
    </div>
  )
}

export default App
