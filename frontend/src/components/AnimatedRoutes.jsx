import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Projects";
import Contact from "../pages/Contact";
import TechStack from "../pages/TechStack";
import Layout from "../layouts/layout";
import Layout2 from "../layouts/layout2";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <Layout bgImage={"bgHome"} >
              <Home />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout2 bgImage={"bgAbout"} >
              <About />
            </Layout2>
          }
        />

        <Route
          path="/projects"
          element={
            <Layout2 bgImage={"bgProject"} >
              <Project />
            </Layout2>
          }
        />

        <Route
          path="/contact"
          element={
            <Layout2 bgImage={"bgContact"} >
              <Contact />
            </Layout2>
          }
        />

        <Route
          path="/tech"
          element={
            <Layout2 bgImage={"bgTechStack"}>
              <TechStack />
            </Layout2>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
