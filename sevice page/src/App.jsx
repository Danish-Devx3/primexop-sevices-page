import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Footer from './components/Footer'



function App() {
  

  return (
    <div className="overflow-x-hidden">
      <Header/>
      <Navbar/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
