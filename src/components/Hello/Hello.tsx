'use client'

import Animation from './Animation';

function Hello() {
 
  return (
    <div className='flex justify-around desktop:text-[64px] mobile:text-[44px] tablet:text-[50px] font-bold text-black leading-[1.5]'>
    <div className='flex items-center h-screen'>
    안녕하세요. <br/>
      프론트엔드 개발자 <br/>
      전선용 입니다.
    </div>
    <Animation/>
    </div>
  );
}

export default Hello;
