import React, { useEffect } from "react";
import fotoPersonale from "../assets/img/fotoPersonale.png";
import { animate, motion, stagger } from "framer-motion";

const AboutChiSono = () => {
  useEffect(() => {
    animate(
      ".cascadeDelayAnim3",
      { scale: 1 },
      {
        delay: stagger(0.1, { ease: "easeOut", startDelay: 0 }),
      }
    );

    animate(
      ".cascadeDelayAnim4",
      { scale: 1 },
      {
        delay: stagger(0.1, { ease: "easeOut", startDelay: 0.5 }),
      }
    );

    animate(
      ".scrollAnimation",
      { y: [0, -5, 0] },
      {
        delay: stagger(0.1, { ease: "linear", startDelay: 1 }),
        repeat: Infinity,
        repeatDelay:5
      }
    );

    animate(
      ".arrowAnimation",
      { opacity: [0.2, 0.5, 1], 
        y: [0, 20, 0]},
      {
        delay: stagger(0.1, { ease: "linear", startDelay: 0.7 }),
        repeat: Infinity,
        repeatDelay:.5,
      }
    );
  }, []);

  return (
    <div className="lg:px-20 relative">
      <motion.div
        className="lg:ml-8 lg:mt-8 mb-8 lg:mb-0"
        initial="hidden"
        animate="show"
      >
        <motion.h1
          initial={{ scale: 0 }}
          className="me-auto lg:text-[4rem] mb-2 w-fit cascadeDelayAnim3"
        >
          Chi Sono
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          className="lg:pe-[30%] leading-[1.6] lg:text-[2rem] cascadeDelayAnim3"
        >
          Sono un programmatore fullstack a cui piace{" "}
          <b>creare interfacce grafiche</b> con particolare attenzione su: <br />
          <em>esperienza utente</em>,<br />
          <em className="ml-8">accessibilità</em> e <br />
          <em className="ml-16">performance</em>
        </motion.p>
      </motion.div>

      <motion.img
        initial={{ scale: 0 }}
        className="bg-slate-50 rounded-full mx-auto lg:absolute right-[5%] top-[28%] lg:w-[25vw] z-[-1] w-full max-w-[20rem] lg:max-w-full cascadeDelayAnim3"
        src={fotoPersonale}
        alt="foto personale"
        width={400}
      />
      
      <div className="flex flex-col items-center mt-16">
        <motion.div
          initial={{ scale: 0 }}
          className="cascadeDelayAnim4 text-2xl font-light italic uppercase"
        >
          <div className="flex gap-1">
            <motion.div initial={{y: 0}} className="scrollAnimation">s</motion.div>
            <motion.div initial={{y: 0}} className="scrollAnimation">c</motion.div>
            <motion.div initial={{y: 0}} className="scrollAnimation">r</motion.div>
            <motion.div initial={{y: 0}} className="scrollAnimation">o</motion.div>
            <motion.div initial={{y: 0}} className="scrollAnimation">l</motion.div>
            <motion.div initial={{y: 0}} className="scrollAnimation">l</motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: "315deg", opacity:0, y: 0 }}
          className="arrowAnimation cascadeDelayAnim4 border-l-4 border-b-4 rounded-br-md rounded-tl-md border-slate-400 w-[2.5rem] h-[2.5rem] rotate-[315deg]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, rotate: "315deg", opacity:0, y: 0 }}
          className="arrowAnimation cascadeDelayAnim4 border-l-4 border-b-4 rounded-br-md rounded-tl-md border-slate-500 w-[2.5rem] h-[2.5rem] rotate-[315deg] mt-[-.5rem]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, rotate: "315deg", opacity:0, y: 0 }}
          className="arrowAnimation cascadeDelayAnim4 border-l-4 border-b-4 rounded-br-md rounded-tl-md border-slate-800 w-[2.5rem] h-[2.5rem] rotate-[315deg] mt-[-.5rem]"
        ></motion.div>
      </div>
      
    </div>
  );
};

export default AboutChiSono;
