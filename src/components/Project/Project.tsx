import React from 'react'
import CardBox from '../Common/CardBox'
import Image from 'next/image'
import { renderSkillList } from '../Skill/Tech';
import { JUNGLE_LIST } from '@/constants/SKILL_LIST';

interface Props {
  children? : React.ReactNode
}

// 이거 전체를 컴포넌트로 분리해서 사용해보기

function Project({children} : Props) {
  return (
    <section className='flex flex-col items-center justify-center' style={{ height: '100vh' }}>
      <span className='font-bold text-[2rem] pb-[2.5rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>Project 💻</span>
      <CardBox flex='flex-col'>
        <Image
        src={'/images/Common/test.png'}  // swiper로 만들어 분리예정 or 비디오 제작 예정
        alt='test'
        width={300}
        height={300}
        ></Image>

        <div className= "flex flex-col">   {/* 안에 이미지 , 텍스트들 분리해 컴포넌트 분리 예정 */}
        <div className="flex">
        <span className="text-[48px] font-bold">JUNGLE</span>  {/* 컴포넌트 만들어 분리예정 */}
        <Image
        src={'/images/About/Skill/github.png'}   // 두개 다 링크 걸어서 이동 예정 , 페이지 아이콘 변경
        alt='test'
        width={50}
        height={50}
        ></Image>
         <Image
        src={'/images/Common/page.png'} 
        alt='test'
        width={50}
        height={50}
        ></Image>
        </div>
        <p className="text-gray-500 text-[24px] font-regular">신입 프론트엔드 개발자만을 위한 취업 지원 플랫폼</p>
        </div>

        <div>
        <span className="text-[48px] font-bold">프로젝트 기술 스택 📚</span>
        {renderSkillList(JUNGLE_LIST)}
        </div>

        <div>
        <span className="text-[48px] font-bold">기능 구현 🧰</span> {/* PROJECT_LIST 가져올 예정 */}
        <ul>
          <li>반응형 UI 제작</li>
          <li>Framer-Motion을 활용한 애니메이션 구현</li>
          <li>Supabase를 이용한 데이터 구축</li>
          <li>Zustand를 이용한 애니메이션 상태 관리</li>
          <li>Supabase 와 Zustand를 활용한 "글 추가 , 삭제 기능" , "댓글 추가 , 삭제 기능"</li>
          <li>React-Scroll 라이브러리를 이용한 섹션 애니메이션 구현</li>
        </ul>
        </div>

        <div>
        <span className="text-[48px] font-bold">프로젝트를 통해 알게된점 🤗</span> {/* PROJECT_LIST 가져올 예정 */}
        <ul>
          <li>Styled - Component 라는 새로운 "CSS-in-JS" 라이브러리를 알게 되어 다양한 스타일링을 경험하고 학습했습니다.</li>
          <li>Framer-Motion의 애니메이션도 분리하여 관리가 가능하다는걸 경험했습니다.</li>
          <li>Supabase를 프로젝트에서 활용하기 위해 설정들을 공부하고 구축 할 수 있었습니다.</li>
          <li>TypeScript를 활용한 첫번째 장기 프로젝트 였습니다. ➡️ 많은 TypeError를 경험했고, 그 경험을 통해 해결 방법을 학습했습니다.</li>
          <li>Zustand 상태관리 라이브러리가 다른 라이브러리들의 사용법 보다 훨씬 더 쉽다는걸 경험했습니다.</li>
        </ul>
        </div>

        <div className="flex flex-col">
        <span className="text-[48px] font-bold">트러블 슈팅 🚨</span> {/* PROJECT_LIST 가져올 예정 */}
        <div>
        <span className="text-[32px] font-bold">문제점 👿</span>
        <ul>
          <li>Zustand로 LandingPage 애니메이션을 관리하기 위해 store를 정의 후 의도치 않은 상황이 발생하였습니다.</li>
          <li>React-scorll 라이브리러를 활용하여 버튼을 눌러 이동하는걸 의도하고자 하여 스크롤을 없앴는데, 스크롤이 내려가는 현상이였습니다.</li>
          <li>발생 원인은 React-Scroll 라이브러리는 스크롤이 없어도 동작이 가능하며, React-Scroll 자체는 스크롤이 없으면 작동을 하지 않는것 이였습니다.</li>
        </ul>
        </div>
        <div>
        <span className="text-[32px] font-bold">해결방법 ✨</span>
        <ul>
          <li>그때 그 코드보여주면서 스크롤을 내려도 해결을했다.</li>
        </ul>
        </div>
        </div>
      </CardBox>
    </section>
  )
}

export default Project
