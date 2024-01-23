"use client";

import {Variants, easeInOut, motion} from "framer-motion";

function Sunyong() {
  const motionVariants: Variants = {
    begin: {
      x: 100,
      opacity: 0,
      filter: "blur(50px)",
    },
    finish: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <>
      <motion.img
        initial="begin"
        animate="finish"
        variants={motionVariants}
        className="w-[15rem] h-[15rem] object-cover rounded-full shadow-2xl mobile:w-[7rem] mobile:h-[7rem] tablet:w-[10rem] tablet:h-[10rem]"
        src="/images/About/sunyong.png"
      />
    </>
  );
}

export default Sunyong;
