import { motion } from "framer-motion";
import React from "react";

const ImgRandomMovment = ({src, alt, className, randomX, randomY, duration}) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{
        scale: 0,
        x: 0,
        y: 0,
      }}
      animate={{
        x: randomX,
        y: randomY,
        transition: {
          duration: duration,
          ease: "easeInOut",
        },
      }}
    />
  );
};

export default ImgRandomMovment;
