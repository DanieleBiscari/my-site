import React from "react";
import passion1 from "../assets/img/passion1.jpg";
import passion2 from "../assets/img/passion2.jpg";
import passion3 from "../assets/img/passion3.png";
import passion4 from "../assets/img/passion4.png";
import passion5 from "../assets/img/passion5.png";
import { animate, motion, stagger } from "framer-motion";

const AboutPassioni = () => {
  const variants = {
    hidden: {
      x: "-100%",
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0,
    },
  };

  function handleOnViewImage() {
    animate(
      ".cascadeAnimationImg",
      { scale: 1 },
      {
        delay: stagger(0.1, { ease: "easeOut" }),
      }
    );
  }

  return (
    <div className="lg:px-20 relative">
      <motion.div
        initial="hidden"
        animate="show"
        className="lg:ml-8 lg:mt-8 mb-8 lg:mb-0"
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
          Le mie Passioni
        </motion.h1>
        <motion.p
          viewport={{ once: true }}
          whileInView={{
            x: 0,
            transition: { ease: "easeOut", type: "spring", duration: 0.5 },
          }}
          variants={variants}
          className="lg:pe-[30%] leading-[1.6] lg:text-[2rem] mb-16"
        >
          Fuori dal lavoro mi piace dedicarmi alla <em>musica</em>. Suono la
          chitarra da più di 15 anni e mi piace comporre musica. <br />
          <em>Programmare</em> e <em>Suonare</em> sono dei modi con cui riesco
          ad esprimere la mia <b>creativita</b>.
        </motion.p>
        <motion.div
          whileInView={() => {
            handleOnViewImage();
          }}
          viewport={{ once: true }}
          className="gap-4 grid md:grid-cols-4 place-self-center"
        >
          <motion.img
            variants={imageVariants}
            className="bg-slate-50 cascadeAnimationImg"
            src={passion4}
            alt="foto personale"
          />
          <motion.img
            variants={imageVariants}
            className="bg-slate-50 md:rounded-full aspect-square object-cover cascadeAnimationImg"
            src={passion1}
            alt="foto personale"
          />
          <motion.img
            variants={imageVariants}
            className="bg-slate-50 row-start-2 md:rounded-full cascadeAnimationImg"
            src={passion2}
            alt="foto personale"
          />
          <motion.img
            variants={imageVariants}
            className="bg-slate-50 row-start-2 object-cover h-full cascadeAnimationImg"
            src={passion5}
            alt="foto personale"
          />
          <motion.img
            variants={imageVariants}
            className="bg-slate-50 object-cover h-full md:col-start-3 md:row-span-2 md:col-span-2 cascadeAnimationImg"
            src={passion3}
            width={1000}
            alt="foto personale"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPassioni;
