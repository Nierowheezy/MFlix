import React from 'react'
import hero_bg from '../assets/header_bg.png'
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero_bg})`,
        backgroundRepeat: 'no-repeat',
        height: '70vh',
        marginBottom: '4rem',
      }}
    >
      <h1
        className="hero__text"
        style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          width: '18rem',
          position: 'relative',
          top: '4rem',
          left: '5.5rem',
        }}
      >
        Watch Something incredible.
      </h1>
    </div>
  )
}

export default Hero
