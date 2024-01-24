import React from 'react'
import CardBox from '../Common/CardBox'
import Tech from './Tech'

function Skill() {
  return (
<section className='flex flex-col items-center  justify-center' style={{ height: '100vh' }}>
<span className='font-bold text-[32px] pb-[40px] mobile:text-[24px] tablet:text-[28px]'>Skill 🧰</span>
      <CardBox flex='flex-col'>
      <Tech/>
      </CardBox>
      </section>
  )
}

export default Skill