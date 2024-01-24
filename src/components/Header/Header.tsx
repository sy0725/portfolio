'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Light from '@images/theme/lightTheme.svg';
import Dark from '@images/theme/darkTheme.svg';
import { Link as ScrollLink } from 'react-scroll';


function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleButtonImage = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
      <div className='fixed w-full bg-white'>
        <div className='flex justify-between px-[60px] pt-5'>
        <ScrollLink to='/' smooth={true} duration={1000}>
          <button className='mobile:text-[24px] tablet:text-[28px] desktop:text-[32px]'>JSY Portfolio</button>
          </ScrollLink>
          <div className='flex gap-[60px] mobile:text-[24px] tablet:text-[28px] desktop:text-[32px]'>
          <ScrollLink to='about' smooth={true} duration={1000}>
              <button type='button'>About</button>
            </ScrollLink>
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

