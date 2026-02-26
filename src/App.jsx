import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import BothSides from './components/BothSides'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('eventbridge_theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('eventbridge_theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleDark = () => setDark((d) => !d)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C0C0E] text-[#0A0A18] dark:text-[#E8E8ED] transition-colors duration-300">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <BothSides />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
