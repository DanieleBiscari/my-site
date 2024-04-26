import React, { useEffect, useState } from "react";
import imgPlanet1 from "../assets/img/planet1.png";
import imgPlanet2 from "../assets/img/planet2.png";
import imgPlanet3 from "../assets/img/planet3.png";
import imgPlanet4 from "../assets/img/planet4.png";
import imgDog from "../assets/img/dog.png";
import imgBone from "../assets/img/bone.png";
import { motion, spring, useAnimationControls } from "framer-motion";
import {
  alienPlanetAnimation,
  heartAnimation,
  marsAnimation,
  saturnAnimation,
} from "../animations/variants";
import { Link } from "react-router-dom";

// todo: realizzare componente per incapsulare la logica di un pianeta
const Home = () => {
  const controls = useAnimationControls();
  const [planetHover, setPlanetHover] = useState("");
  const [randomCoordinates, setRandomCoordinates] = useState({
    x: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
    y: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
  });
  const [randomCoordinates2, setRandomCoordinates2] = useState({
    x: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
    y: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
  });
  let timeout;
  let newRandom;

  useEffect(() => {
    setInterval(() => {
      newRandom = {
        x: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
        y: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
      };
      setRandomCoordinates(newRandom);
    }, 20000);
    setInterval(() => {
      newRandom = {
        x: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
        y: Math.floor(Math.random() * (300 - -300 + 1)) + -300,
      };
      setRandomCoordinates2(newRandom);
    }, 30000);

    controls.start("scaleUp");
    timeout = setTimeout(() => {
      controls.start("show");
    }, 500);
  }, []);

  function handleAnimationStop(currentToScale) {
    if (planetHover === "") {
      setPlanetHover(currentToScale);
      clearTimeout(timeout);
      controls.stop("show");
      controls.start(currentToScale);
    }
  }
  function handleAnimationResume() {
    setPlanetHover("");
    controls.start("resume");
    timeout = setTimeout(() => {
      controls.start("show");
    }, 500);
  }

  return (
    <div
      aria-label="planets"
      className="flex gap-20 justify-center items-center flex-col lg:absolute lg:w-[90%] lg:h-[90%] lg:left-[4.5%] lg:top-[4.5%] pt-20 lg:pt-0"
    >
      <div className="absolute">
        <motion.img
          src={imgDog}
          alt="dog"
          className="w-[6rem] z-20 pointer-events-none left-[9.8rem] bottom-[7.8rem] absolute"
          initial={{
            x: 0,
            y: 0,
          }}
          animate={{
            x: randomCoordinates.x,
            y: randomCoordinates.y,
            transition: {
              duration: 20,
              ease: "easeInOut",
            },
          }}
        />
        <motion.img
          src={imgBone}
          alt="bone"
          className="z-10 relative w-[15rem] pointer-events-none right-32 bottom-20"
          initial={{
            x: 0,
            y: 0,
          }}
          animate={{
            x: randomCoordinates2.x,
            y: randomCoordinates2.y,
            transition: {
              duration: 30,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <h1 className="textLayer text-slate-50 font-[700] text-center px-8 drop-shadow-xl">
        <motion.p
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Ciao, il mio nome è
        </motion.p>

        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: "linear" }}
          className="biggerThanH1 text-myOrange font-extrabold"
        >
          Daniele Biscari
        </motion.p>

        <motion.p
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{
            ease: "easeOut",
            delay: 0.5,
            type: "spring",
            duration: 0.5,
            stiffness: 60,
            mass: 1,
            velocity: 0.2,
          }}
          className="font-[300]"
        >
          e sono uno <b className="font-bold">sviluppatore fullstack</b>
        </motion.p>
      </h1>

      <motion.div initial="hidden" animate="show">
        {/* //* realizzare componenti extra per alleggerire la lettura del codice */}
        <motion.div
          className="planet lg:top-[36%] lg:right-[80%] w-[12rem] figureLayer"
          variants={marsAnimation}
          whileHover={() => handleAnimationStop("marsScaleUp")}
          onHoverEnd={handleAnimationResume}
          animate={controls}
        >
          <Link to={"/projects"}>
            <motion.img
              src={imgPlanet1}
              alt="red planet"
              animate={
                planetHover == "marsScaleUp"
                  ? {
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
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
            <p className="absolute bottom-14 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker">
              Scopri i miei progetti
            </p>
          </Link>
        </motion.div>

        <motion.div
          className="planet lg:top-[0%] lg:right-[44%] w-[14rem] figureLayer"
          variants={heartAnimation}
          whileHover={() => handleAnimationStop("heartScaleUp")}
          onHoverEnd={handleAnimationResume}
          animate={controls}
        >
          <Link to={"/about"}>
            <motion.img
              src={imgPlanet2}
              alt="heart planet"
              animate={
                planetHover == "heartScaleUp"
                  ? {
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
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
            <p className="absolute bottom-16 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker">
              Scopri la mia storia
            </p>
          </Link>
        </motion.div>

        <motion.div
          variants={saturnAnimation}
          whileHover={() => handleAnimationStop("saturnScaleUp")}
          onHoverEnd={handleAnimationResume}
          animate={controls}
          className="planet lg:top-[36%] lg:right-[2%] w-[18rem] figureLayer"
        >
          <Link to={"/tech"}>
            <motion.img
              src={imgPlanet3}
              alt="saturn planet"
              animate={
                planetHover == "saturnScaleUp"
                  ? {
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
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
            <p className="absolute bottom-10 left-2 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker">
              Scopri le tecnologie che conosco
            </p>
          </Link>
        </motion.div>

        <motion.div
          variants={alienPlanetAnimation}
          whileHover={() => handleAnimationStop("alienPlanetScaleUp")}
          onHoverEnd={handleAnimationResume}
          animate={controls}
          className="planet lg:top-[80%] lg:right-[42%] w-[16rem] figureLayer"
        >
          <Link to={"/contact"}>
            <motion.img
              src={imgPlanet4}
              alt="alien planet"
              animate={
                planetHover == "alienPlanetScaleUp"
                  ? {
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
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
            <p className="absolute bottom-16 left-14 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker">
              Contattami
            </p>
          </Link>
        </motion.div>
        {/*  */}
      </motion.div>
    </div>
  );
};

export default Home;
