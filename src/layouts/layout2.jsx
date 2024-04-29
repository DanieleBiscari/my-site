import { motion } from "framer-motion";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
        <div>Navbar</div>
        {children}
    </>
  );
};

export default layout;
