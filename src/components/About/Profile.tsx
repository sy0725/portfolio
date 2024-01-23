import React from 'react'
import CardBox from '../Common/CardBox'
import Information from './Information'
import Sunyong from './Sunyong'
function Profile() {
  return (
    <div className='flex flex-col items-center'>
      <span className='font-bold text-[32px] pb-[40px] mobile:text-[24px] tablet:text-[28px]'>About Me</span>
      <CardBox>
      <Sunyong/>
      <Information/>
      </CardBox>
    </div>
  )
}

export default Profile