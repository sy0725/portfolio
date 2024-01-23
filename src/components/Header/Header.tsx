'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Light from '@images/theme/lightTheme.svg';
import Dark from '@images/theme/darkTheme.svg';

// 헤더 부분 앞으로 추가할 부분
// 다크모드 , 라이트모드
// 버튼 클릭시 페이지 이동 - About : About , Project : Project Link로 연결하여 이동하기

function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleButtonImage = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
      <div className='fixed w-full'>
        <div className='flex justify-between px-[60px] pt-5'>
          <p className='mobile:text-[24px] tablet:text-[28px] desktop:text-[32px]'>JSY Portfolio</p>
          <div className='flex gap-[60px] mobile:text-[24px] tablet:text-[28px] desktop:text-[32px]'>
            <button type='button'>About</button>
            <button type='button'>Project</button>
            <button className='pb-[5px]' type='button' onClick={toggleButtonImage}>
              <Image
                src={isButtonClicked ? Light : Dark}
                width={30}
                height={30}
                alt='모드 변경 버튼'
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

