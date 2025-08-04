import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <main className='text-sm text-neutral-300 antialiased'>
        <Navbar/>
        <HeroSection/>
    </main>
  )
}

export default App