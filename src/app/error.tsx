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
      style={{ width: '31.25rem', height: '31.25rem' }}
    />
  )
}

export default error
