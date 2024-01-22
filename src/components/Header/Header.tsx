'use client'

import React, { useState } from 'react'
import Image  from 'next/image';
import Light from '@images/lightTheme.svg'
import Dark from '@images/darkTheme.svg'

function Header() {
  // 나중에 zustand 사용해서 바꿀 예정
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  const toggleButtonImage = () => {
    setIsButtonClicked(!isButtonClicked)
  }
  return (
    <div>
      <div className='flex justify-between px-[60px] pt-5'>
      <p className='mobile:text-[24px] tablet:text-[28px] desktop:text-[32px]'>JSY Portfolio</p>
      <button type='button' onClick={toggleButtonImage}>
      <Image
      src={isButtonClicked ? Light : Dark}
      width={30}
      height={30}
      alt='모드 변경 버튼'
      />
      </button>
      </div>
    </div>
  )
}

export default Header
