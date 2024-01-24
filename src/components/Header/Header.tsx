'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Light from '@images/theme/lightTheme.svg';
import Dark from '@images/theme/darkTheme.svg';
import { Link as ScrollLink } from 'react-scroll';
import useThemeStore from '@/store/useThemeStore';


function Header() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { themeDarkMode } = useThemeStore()


  
  const toggleButtonImage = () => {
    themeDarkMode();
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
      <div className='fixed w-full z-10'>
        <div className='flex justify-between px-[3.75rem] pt-5'>
        <ScrollLink to='/' smooth={true} duration={1000}>
          <button className='mobile:text-[1.5rem] tablet:text-[1.75rem] desktop:text-[2rem]'>JSY Portfolio</button>
          </ScrollLink>
          <div className='flex gap-[3.75rem] mobile:text-[1.5rem] tablet:text-[1.75rem] desktop:text-[2rem]'>
          <ScrollLink to='about' smooth={true} duration={1000}>
              <button type='button' className='cursor-pointer'>About</button>
            </ScrollLink>
            <button type='button' className='cursor-pointer'>Project</button>
            <button className='pb-[0.313rem] ' type='button' onClick={toggleButtonImage}>
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

