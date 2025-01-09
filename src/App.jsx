import { useState } from 'react'
import './index.css'
import'./App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Hero1 } from './components/hero1'
import { Hero2 } from './components/Hero2'
import { Team } from './components/Team'
import { Footer } from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Hero1/>
    <Hero2/>
    <Team/>
    <Footer/>
    </>
  )
}
 
export default App
