
import React from 'react'
import Lottie from 'react-lottie-player'
import lottieSY from 'public/animation/animation.json'


function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieSY}
      play
    />
  )
}

export default Animation