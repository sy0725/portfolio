'use client'

import Animation from './Animation';

function Hello() {
 
  return (
    <section className='flex justify-around desktop:text-[4rem] mobile:text-[2.75rem] tablet:text-[3.125rem] font-bold leading-[1.5]'>
    <div className='flex items-center h-screen'>
    안녕하세요. <br/>
      프론트엔드 개발자 <br/>
      전선용 입니다.
    </div>
    <Animation/>
    </section>
  );
}

export default Hello;
