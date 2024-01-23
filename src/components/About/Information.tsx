"use client";

import { Variants, easeInOut, motion } from "framer-motion";
import INFO_LIST from "@/constants/INFO_LIST";

function Information() {
  const motionVariants: Variants = {
    begin: {
      x: -100,
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

  const renderALinkOrSpan = (text: string) => {
    return text.includes("https" || "http") ? (
      <a
        href={text}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-[5px]"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    );
  };

  return (
    <div className="flex gap-6 items-center justify-center">
      <motion.ul
        initial="begin"
        animate="finish"
        variants={motionVariants}
        className="list-none p-0 m-0"
      >
        {INFO_LIST.map(({ icon, text }, i) => (
          <motion.li
            key={i}
            initial="begin"
            animate="finish"
            variants={motionVariants}
            className="mobile:text-[18px] mobile:leading-3 tablet:text-[28px] tablet:leading-5 flex gap-5 items-center justify-start pb-2 leading-7"
          >
            <span>{icon}</span>
            {renderALinkOrSpan(text)}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Information;
