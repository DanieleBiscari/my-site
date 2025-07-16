import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useDistanceToCenter from "../hooks/useDistanceToCenter";
import PropTypes from "prop-types";

const LG_BREAKPOINT = 1024;

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
  const [isLgOrAbove, setIsLgOrAbove] = useState(
    window.innerWidth >= LG_BREAKPOINT
  );
  const planetRef = useRef();

  useEffect(() => {
    const handleResize = () =>
      setIsLgOrAbove(window.innerWidth >= LG_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const { distanceToCenterX, distanceToCenterY } = useDistanceToCenter(
      planetRef.current
    );
    setDistanceToCenter({ x: distanceToCenterX, y: distanceToCenterY });
  }, [planetClicked]);

  return (
    <motion.div
      className={className + `${isLgOrAbove ? " " : " relative mb-40"}`}
      variants={isLgOrAbove ? variants : {}}
      initial="hidden"
      animate={controls}
      whileTap={() => {
        controls.stop("hover");
        setPlanetClicked(planet);
      }}
      whileHover={() => {
        clearTimeout(timeoutRef.current);
        setPlanetHover(planet);
        if (isLgOrAbove) controls.stop("show");
      }}
      onHoverEnd={() => {
        setPlanetHover("");
        controls.start("resume");
        if (isLgOrAbove) {
          timeoutRef.current = setTimeout(() => {
            controls.start("show");
          }, 1000);
        }
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
                  transition: {
                    scale: { delay: 1, duration: 0.3 },
                    duration: 1,
                    ease: "easeOut",
                  },
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
        <motion.p className={pClassName} exit={{ opacity: 0 }}>
          {pText}
        </motion.p>
      </Link>
    </motion.div>
  );
};

Planet.propTypes = {
  className: PropTypes.string,
  pText: PropTypes.string,
  pClassName: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
  linkTo: PropTypes.string,
  variants: PropTypes.object,
  planetHover: PropTypes.string,
  setPlanetHover: PropTypes.func,
  planetClicked: PropTypes.string,
  setPlanetClicked: PropTypes.func,
  planet: PropTypes.string,
  timeoutRef: PropTypes.object,
  controls: PropTypes.object,
};

export default Planet;
