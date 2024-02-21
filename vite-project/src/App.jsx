import React from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Route, Routes } from 'react-router-dom';
import { AboutPage, ContactPage, PortfolioPage, ResumePage } from './pages';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/resume' element={<ResumePage />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App