import React from 'react'
import CardBox from '../Common/CardBox'
import DownBottom from "@/components/Common/DownBottom";

function Me() {
  return (
    <section className='flex flex-col items-center justify-center' style={{ height: '100vh' }}>
    <span className='font-bold text-[2rem] pb-[2.5rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>저는 이런 사람 이에요!</span>
    <CardBox flex='flex-col'>
      <ul className='px-[3.75rem]'>
      <li className='text-[2.188rem] mobile:text-[1.125rem] tablet:text-[1.75rem]'><span className='font-bold text-[2.5rem] mobile:text-[1.563rem] tablet:text-[2.188rem]'>💬커뮤니케이션</span>을 중요시 여기는 사람</li>
      <br/>
        <li className='text-[2.188rem] mobile:text-[1.125rem] tablet:text-[1.75rem]'>1️⃣ 교육기관에서 회고 조장을 맡아 수행하며, 스프린트 회고를 주도해 왔어요.</li>
        <br/>
        <li className='text-[2.188rem] mobile:text-[1.125rem] tablet:text-[1.75rem]'>2️⃣ 프로젝트 팀장을 맡아 팀원들과의 갈등을 대화로 해결하고 긍정적인 방향을 제시하며 
        <span>문제</span>가 발생했을때, 유연하게 대처하여 좋은 결과를 이끌었어요.</li>
        <br/>
        <li className='text-[2.188rem] mobile:text-[1.125rem] tablet:text-[1.75rem]'>3️⃣ 스터디를 참여하고 관리하며 지속적인 커뮤니케이션과 교류를 통해 성장하고 있어요.</li>
      <br/>
        <p className='text-[2.188rem] mobile:text-[1.125rem] tablet:text-[1.75rem]'><span className='font-bold text-[2.5rem] mobile:text-[1.563rem] tablet:text-[2.188rem]'>🚨 문제상황</span> : 프로젝트는 4명이서 하는 분량인데 , 연락두절로 인한 인원이 3명으로 바뀌어 혼란스러운 상황 속에서 커뮤니케이션을 통해 분위기를 진정시키고, 힘들어 하는 팀원들을 대화를 통해 긍정적인 마인드로 바꾸고 결과적으로 프로젝트를 성공적으로 마무리했어요.</p>
      </ul>
    </CardBox>
    <DownBottom/>

    </section>
  )
}

export default Me