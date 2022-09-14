import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import JokerArrayMap from './components/JokerArrayMap'
import data from './components/data'

function App() {
  // Hero here
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })
  return (

    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>


      {/* <JokerArrayMap/>     */}
    </div>

  )
}

export default App
