import React from 'react'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contact from './components/Contact'

const Container = styled.div`

`

function App() {
  return (
    <div>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div>
  )
}

export default App
