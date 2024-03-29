'use client'

import Image from 'next/image';
import SKILL_LIST, { LEARN_LIST, COOPORATION_LIST, BACKEND_LIST, SkillProps } from '@/constants/SKILL_LIST';
import { motion } from 'framer-motion';

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.5 },
};

export function renderSkillList(list: SkillProps[]) {
  return (
    <div className="flex gap-7">
      {list.map((image, index) => (
        <motion.div
        key={index}
        variants={imageVariants}
        whileHover="hover"
        initial="initial"
        animate="initial"
      >
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={100}
          height={100}
        />
          </motion.div>
      ))}
    </div>
  );
}

function Tech() {
  return (
    <div className='flex flex-col gap-10 px-[3.75rem]'>
      <span className='font-bold text-[2rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>활용 할 수 있어요!</span>
      {renderSkillList(SKILL_LIST)}

      <span className='font-bold text-[2rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>요즘 관심 있는 기술 이에요!</span>
      {renderSkillList(LEARN_LIST)}

      <div className="flex gap-[50px]">
        <div className="flex flex-col gap-3 pr-[80px]">
          <span className='font-bold text-[2rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>협업</span>
          {renderSkillList(COOPORATION_LIST)}
        </div>

        <div className="flex flex-col gap-3">
          <span className='font-bold text-[2rem] mobile:text-[1.5rem] tablet:text-[1.75rem]'>백엔드</span>
          {renderSkillList(BACKEND_LIST)}
        </div>
      </div>
    </div>
  );
}

export default Tech;
