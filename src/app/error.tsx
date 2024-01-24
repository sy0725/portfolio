'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieError from 'public/animation/error.json'

function error() {
  return (
    <Lottie
      loop
      animationData={lottieError}
      play
    />
  )
}

export default error
