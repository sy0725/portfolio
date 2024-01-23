'use client'

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Hello() {
  const textArray = ['안녕하세요.', '프론트엔드 개발자', '전선용입니다.'];
  const controls = useAnimation();

  const animateText = async () => {
    while (true) {
      for (let i = 0; i < textArray.length; i++) {
        await controls.start({ opacity: 1, transition: { duration: 0.5 } });
        await new Promise((resolve) => setTimeout(resolve, 500)); 
        await controls.start({ opacity: 0, transition: { duration: 0.5 } });
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  };

  useEffect(() => {
    animateText();
  }, [controls]);

  return (
    <div className='desktop:text-[64px] mobile:text-[44px] tablet:text-[54px] font-bold text-black leading-[1.5] pl-[60px] flex items-center h-screen'>
      <motion.div animate={controls} style={{ opacity: 0 }}>
        {textArray.map((text, index) => (
          <div key={index}>
            {text}
            <br />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hello;
