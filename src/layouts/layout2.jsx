import { motion } from "framer-motion";
import React from "react";

const layout = ({ children, bgImage }) => {
  return (
    <>
        <div>Navbar</div>
        <div className={`${bgImage} bg-no-repeat bg-cover relative`}>
          {children}  
        </div>
    </>
  );
};

export default layout;
