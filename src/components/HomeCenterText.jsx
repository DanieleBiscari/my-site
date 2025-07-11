import { motion } from "framer-motion";
import React from "react";

const HomeCenterText = ({exit}) => {
  return (
    <motion.div exit={exit} className="textLayer text-slate-50 font-[700] text-center px-8 drop-shadow-xl pointer-events-none">
      <motion.h1
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Ciao, il mio nome è
      </motion.h1>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="biggerThanH1 text-myOrange font-extrabold"
      >
        Daniele Biscari
      </motion.h1>

      <motion.h1
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
      </motion.h1>
    </motion.div>
  );
};

export default HomeCenterText;
