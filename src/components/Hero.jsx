import React from 'react'
import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-align: center;
`

const Hero = () => {
  return (
    <Section>The Hero Component</Section>
  )
}

export default Hero
