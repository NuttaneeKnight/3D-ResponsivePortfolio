import React from "react"
import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

const Container = styled.div`
height: 100vh;
scroll-snap-type: mandatory;
`

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
