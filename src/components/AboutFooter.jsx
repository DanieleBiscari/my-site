import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const AboutFooter = () => {

  return (
    <footer className=" flex items-center flex-col justify-center">
      <motion.p
        viewport={{ once: true }}
        initial={{scale: 0, opacity: 0}}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { ease: "easeOut", type: "spring", duration: 0.5 },
        }}
        className="leading-[1.8] text-balance text-center"
      >
        Questo sito web è il mio portfolio, dove puoi trovare una selezione dei
        miei lavori e progetti. Spero che la mia passione per la programmazione traspaia dal mio lavoro. <br/> Se sei interessato a saperne di più
        su di me o su ciò che posso fare, non esitare a{" "}
        <Link
          to={"/contact"}
          className="underline text-[#9ee3ff] drop-shadow-2xl hover:text-[#dcf5ff]"
        >
          contattarmi
        </Link>
      </motion.p>
    </footer>
  );
};

export default AboutFooter;
