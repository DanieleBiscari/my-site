import { motion } from "framer-motion";
import React from "react";

const AboutObiettivi = () => {
  const variants = {
    hidden: {
      x: 1500,
    },
  };

  return (
    <div className="lg:px-20 relative lg:mt-8">
      <motion.div
        initial="hidden"
        animate="show"
        className="lg:ml-8 lg:mt-8 mb-8 lg:mb-0 text-center"
      >
        <motion.h1
          variants={variants}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            transition: { ease: "easeOut", type: "spring", duration: 0.5 },
          }}
          className="me-auto lg:text-[4rem] mb-2"
        >
          I miei Obiettivi
        </motion.h1>
        <motion.p
          variants={variants}
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            transition: { ease: "easeOut", type: "spring", duration: 0.5 },
          }}
          className="leading-[1.6] lg:text-[2rem] text-balance"
        >
          Mi reputo una persona ambiziosa che cerca sempra di dare il meglio, in
          modo da poter raggiungere obbiettivi predisposti. <br />
          Uno degli obiettivi più importanti è quello dello{" "}
          <b>studio continuo</b>, perché il mondo si evolve velocemente e stare
          al passo con le nuove tecnologie ti dà una marcia in più
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutObiettivi;
