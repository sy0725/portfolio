import React from 'react';

// 추가할 부분
// 텍스트 애니메이션


function Hello() {
  return (
    <div className='desktop:text-[64px] mobile:text-[44px] tablet:text-[54px] font-bold text-black leading-[1.5] pl-[60px] flex items-center  h-screen'>
      안녕하세요. <br/>
      프론트엔드 개발자 <br/>
      전선용 입니다.
    </div>
    
  );
}

export default Hello;
