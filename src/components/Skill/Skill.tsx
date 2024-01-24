import React from 'react'
import CardBox from '../Common/CardBox'
import Tech from './Tech'

function Skill() {
  return (
<section className='flex flex-col items-center justify-center'style={{ height: '100vh' }}>
<span className='font-bold text-[2rem] pb-[2.5rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>Skill 🧰</span>
      <CardBox flex='flex-col'>
      <Tech/>
      </CardBox>
    
      </section>
  )
}
export default Skill