import React from 'react';
import './App.css'
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


// import Tester from './components/TESTER.jsx';
// import { useState, useEffect } from 'react';

// function tester() {
//   const [test, setTest] = useState(false)
//   const [pokeInfo, setPokeInfo] = useState(false)

//   useEffect(() => {
//     fetch(" https://pokeapi.co/api/v2/pokemon?limit=151").then(res => {
//       return res.json()
//     }).then(data => {
//       console.log(data.results)
//       setTest(data.results)
//     })


//   }, [])

//   return (
//     <div className="App">
//       
//       {pokeInfo ? <img src={pokeInfo} /> : ""}

//       {test ? test.map((element, i) => {
//         return <Tester mops={element.name} key={i} pokeInfo={() => {
//           fetch(element.url).then(res => {
//             return res.json()
//           }).then(data => {
//             console.log(data)
//             setPokeInfo(data.sprites.front_default)
//           })
//         }} />
//       }) : ""}
//     </div>
//   )
// }
