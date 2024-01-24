import React from 'react'
import CardBox from '../Common/CardBox'
import Tech from './Tech'

function Skill() {
  return (
<div className='flex flex-col items-center pt-[50px]'>
<span className='font-bold text-[32px] pb-[40px] mobile:text-[24px] tablet:text-[28px]'>Skill 🧰</span>
      <CardBox flex='flex-col'>
      <Tech/>
      </CardBox>
      </div>
  )
}

export default Skill