"use clinet";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

import {Variants, motion} from "framer-motion";

function DownBottom() {
  const downVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: "translateY(0%)",
    },
    show: {
      opacity: 1,
      transform: "translateY(40%)",
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
  return (
    <>
      <motion.div
        variants={downVariants}
        initial="hidden"
        animate="show"
        className="flex items-center flex-col">
        <MdOutlineKeyboardDoubleArrowDown size="2rem" />
        <span className="pt-2 mobile:text-[18px] tablet:text-[20px]"> 스크롤을 내려주세요! </span>
      </motion.div>
    </>
  );
}

export default DownBottom;