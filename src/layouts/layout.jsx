import React, { useState } from "react";
import imgStar from "../assets/img/stars.png";
import imgPerson from "../assets/img/person.png";
import { motion } from "framer-motion";

const layout = ({ children, bgImage }) => {
  const [mousePosition, setMousePosition] = useState({
    x: undefined,
    y: undefined,
  });
  const [starMovment, setStarMovment] = useState({ x: 0, y: 0 });
  function handleMouseMove(e) {
    const movmentPower = 5;
    let movmentX;
    let movmentY;

    if (e.clientX > mousePosition.x) {
      movmentX = -movmentPower;
    } else if (e.clientX < mousePosition.x) {
      movmentX = movmentPower;
    }

    if (e.clientY > mousePosition.y) {
      movmentY = -movmentPower;
    } else if (e.clientY < mousePosition.y) {
      movmentY = movmentPower;
    }

    let newStarMovment = { x: movmentX, y: movmentY };
    let newMousePosition = { x: e.clientX, y: e.clientY };
    setStarMovment(newStarMovment);
    setMousePosition(newMousePosition);
  }

  const starAnimation = {
    hidden: { opacity: 1, scale: 0.8 },
    show: {
      scale: 1,
      x: starMovment.x,
      y: starMovment.y,
      opacity: [1, 0.5, 1],
      transition: {
        opacity: {
          duration: 1,
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <>
      <div>Navbar</div>
      <motion.div
        onMouseMove={(e) => handleMouseMove(e)}
        aria-label="Applicazione"
        className={`${bgImage} flex justify-center lg:h-screen bg-no-repeat bg-cover relative overflow-hidden`}
        role="application"
      >
        <img
          src={imgPerson}
          alt="person"
          className="absolute z-50 left-[55vw] bottom-[0rem] w-[30rem] pointer-events-none scale-x-[-1]"
        />
        <div className="insideBg absolute w-full h-full bg-white/20 z-40 pointer-events-none"></div>
        <motion.img
          variants={starAnimation}
          initial="hidden"
          animate="show"
          aria-label="stelle"
          className="absolute w-full h-full object-cover"
          src={imgStar}
          alt="stars"
        />
        {children}
      </motion.div>
    </>
  );
};

export default layout;
