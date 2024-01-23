import React from 'react'
import CardBox from '../Common/CardBox'
import Image from 'next/image'
import Information from './Information'
function Profile() {
  return (
    <div>
      <CardBox>
        <span className='font-bold text-[36px] pt-[45px]'>About</span>
      <Image
      src={'/images/About/sunyong.png'}
      width={340}
      height={430}
      alt='증명사진'
      />

      <Information/>
      </CardBox>
    </div>
  )
}

export default Profile