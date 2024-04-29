import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDistanceToCenter from "../hooks/useDistanceToCenter";

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
  planetClicked,
  setPlanetClicked,
  planet,
  timeoutRef,
  controls,
}) => {
  const [distanceToCenter, setDistanceToCenter] = useState(undefined);
  const planetRef = useRef();

  useEffect(() => {
    const { distanceToCenterX, distanceToCenterY } = useDistanceToCenter(
      planetRef.current
    );
    setDistanceToCenter({ x: distanceToCenterX, y: distanceToCenterY });
  }, [planetClicked]);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileTap={() => {
        controls.stop("hover");
        setPlanetClicked(planet);
      }}
      whileHover={() => {
        clearTimeout(timeoutRef.current);
        setPlanetHover(planet);
        controls.stop("show");
      }}
      onHoverEnd={() => {
        setPlanetHover("");
        controls.start("resume");
        timeoutRef.current = setTimeout(() => {
          controls.start("show");
        }, 1000);
      }}
    >
      <Link to={linkTo}>
        <motion.img
          ref={planetRef}
          exit={
            planetClicked === planet
              ? {
                  x: distanceToCenter.x,
                  y: distanceToCenter.y,
                  scale: 20,
                  transition: { scale: { delay: 1, duration: .3 }, duration: 1, ease: "easeOut" },
                }
              : { opacity: 0 }
          }
          src={imageSrc}
          alt={alt}
          animate={
            planetHover === planet
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
        <motion.p
          className={pClassName}
          exit={{opacity: 0}}
        >
          {pText}
        </motion.p>
      </Link>
    </motion.div>
  );
};

export default Planet;
