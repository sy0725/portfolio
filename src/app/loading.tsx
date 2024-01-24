'use client'

import React from 'react'
import Lottie from 'react-lottie-player'
import lottieLoading from 'public/animation/loading.json'


function loading() {
  return (
    <Lottie
    loop
    animationData={lottieLoading}
    play
    style={{ width: '18.75rem', height: '18.75rem' }}

  />
  )
}

export default loading
