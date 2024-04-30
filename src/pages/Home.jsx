import React, { useEffect, useRef, useState } from "react";
import imgPlanet1 from "../assets/img/planet1.png";
import imgPlanet2 from "../assets/img/planet2.png";
import imgPlanet3 from "../assets/img/planet3.png";
import imgPlanet4 from "../assets/img/planet4.png";
import imgDog from "../assets/img/dog.png";
import imgBone from "../assets/img/bone.png";
import {
  motion,
  stagger,
  useAnimationControls,
} from "framer-motion";
import {
  alienPlanetAnimation,
  heartAnimation,
  marsAnimation,
  saturnAnimation,
} from "../animations/variants";
import Planet from "../components/Planet";
import ImgRandomMovment from "../components/ImgRandomMovment";
import HomeCenterText from "../components/HomeCenterText";
import useRandomCoordinates from "../hooks/useRandomCoordinates";
import useDelayAnimation from "../hooks/useDelayAnimation";

const Home = () => {
  const randomCoordinates = useRandomCoordinates(-300, 300, 20000);
  const randomCoordinates2 = useRandomCoordinates(-300, 300, 30000);
  const controls = useAnimationControls();
  const [planetHover, setPlanetHover] = useState("");
  const [planetClicked, setPlanetClicked] = useState("");
  const timeoutRef = useRef(0);
  let delayCounter = 0;

  /*
    questo delayScope deve essere inserito nella ref di un root in cui 
    all'interno ci saranno delle classi .cascadeDelayAnim per poter 
    targettizare quali classi devono avvere questo effetto di delay a catena
  */
  const delayScope = useDelayAnimation(
    ".cascadeDelayAnim2",
    { scale: 1 },
    {
      delay: stagger(0.05, { startDelay: 1.5, ease: "easeOut" }),
      onComplete: () => {
        delayCounter++;
        if (delayCounter === 6) {
          controls.start("show");
        }
      },
    }
  );


  return (
    <motion.div
      aria-label="planets"
      className="flex gap-20 justify-center items-center flex-col lg:absolute lg:w-[90%] lg:h-[90%] lg:left-[4.5%] lg:top-[4.5%] pt-20 lg:pt-0"
      ref={delayScope}
    >
      <motion.div className="absolute" exit={{ opacity: 0 }}>
        <ImgRandomMovment
          src={imgDog}
          alt={"dog"}
          className={
            "cascadeDelayAnim2 w-[6rem] z-20 pointer-events-none left-[9.8rem] bottom-[7.8rem] absolute"
          }
          randomX={randomCoordinates.x}
          randomY={randomCoordinates.y}
          duration={20}
        />

        <ImgRandomMovment
          src={imgBone}
          alt={"bone"}
          className={
            "cascadeDelayAnim2 z-10 relative w-[15rem] pointer-events-none right-32 bottom-20"
          }
          randomX={randomCoordinates2.x}
          randomY={randomCoordinates2.y}
          duration={30}
        />
      </motion.div>

      <HomeCenterText exit={{ opacity: 0 }} />

      <motion.div initial="hidden" animate="show">
        <Planet
          className={
            "cascadeDelayAnim2 planet lg:top-[36%] lg:right-[80%] w-[12rem] figureLayer"
          }
          pClassName={
            "absolute bottom-14 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker"
          }
          imageSrc={imgPlanet1}
          alt={"red planet"}
          planetHover={planetHover}
          setPlanetHover={setPlanetHover}
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
          planet={"mars"}
          pText={"Scopri i miei progetti"}
          linkTo={"/projects"}
          variants={marsAnimation}
          timeoutRef={timeoutRef}
          controls={controls}
        />
        <Planet
          className={
            "cascadeDelayAnim2 planet lg:top-[0%] lg:right-[44%] w-[14rem] figureLayer"
          }
          pClassName={
            "absolute bottom-16 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker"
          }
          imageSrc={imgPlanet2}
          alt={"heart planet"}
          planetHover={planetHover}
          setPlanetHover={setPlanetHover}
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
          planet={"heart"}
          pText={"Scopri la mia storia"}
          linkTo={"/about"}
          variants={heartAnimation}
          timeoutRef={timeoutRef}
          controls={controls}
        />
        <Planet
          className={
            "planet cascadeDelayAnim2 lg:top-[36%] lg:right-[2%] w-[18rem] figureLayer"
          }
          pClassName={
            "absolute bottom-10 left-2 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker"
          }
          imageSrc={imgPlanet3}
          alt={"saturn planet"}
          planetHover={planetHover}
          setPlanetHover={setPlanetHover}
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
          planet={"saturn"}
          pText={"Scopri le tecnologie che conosco"}
          linkTo={"/tech"}
          variants={saturnAnimation}
          timeoutRef={timeoutRef}
          controls={controls}
        />
        <Planet
          className={
            "planet cascadeDelayAnim2 lg:top-[75%] lg:right-[42%] w-[16rem] figureLayer"
          }
          pClassName={
            "absolute bottom-16 left-14 text-slate-50 text-2xl text-center font-bold bg-slate-700 bg-opacity-25 p-2 mix-blend-plus-darker"
          }
          imageSrc={imgPlanet4}
          alt={"alien planet"}
          planetHover={planetHover}
          setPlanetHover={setPlanetHover}
          planetClicked={planetClicked}
          setPlanetClicked={setPlanetClicked}
          planet={"alienPlanet"}
          pText={"Contattami"}
          linkTo={"/contact"}
          variants={alienPlanetAnimation}
          timeoutRef={timeoutRef}
          controls={controls}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
