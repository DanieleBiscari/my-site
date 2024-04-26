import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Planet = ({
  className,
  pText,
  pClassName,
  imageSrc,
  alt,
  linkTo,
  variants,
  planetHover,
  setPlanetHover,
  planetHoverCondition,
  timeoutRef,
  controls
}) => {

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileHover={() => {
        clearTimeout(timeoutRef.current)
        setPlanetHover(planetHoverCondition);
        controls.stop("show")
      }}
      onHoverEnd={() => {
        setPlanetHover("");
        controls.start("resume")
        timeoutRef.current = setTimeout(() => {
          controls.start("show")
        }, 1000)
      }}
    >
      <Link to={linkTo}>
        <motion.img
          src={imageSrc}
          alt={alt}
          animate={
            planetHover === planetHoverCondition
              ? {
                  scale: 1.2,
                  transition: {
                    rotate: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  },
                  rotate: ["0deg", "90deg", "180deg", "270deg", "360deg"],
                }
              : {
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  rotate: [
                    "0deg",
                    "90deg",
                    "180deg",
                    "270deg",
                    "360deg",
                    "270deg",
                    "180deg",
                    "90deg",
                    "0deg",
                  ],
                }
          }
        />
        <p className={pClassName}>{pText}</p>
      </Link>
    </motion.div>
  );
};

export default Planet;
