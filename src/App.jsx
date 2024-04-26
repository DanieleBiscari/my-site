import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";
import Layout from "./layouts/layout";
import Layout2 from "./layouts/layout2";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

function App() {
  /*
    questo delayScope deve essere inserito nella ref di un root in cui 
    all'interno ci saranno delle classi .cascadeDelayAnim per poter 
    targettizare quali classi devono avvere questo effet di delay a catena
  */
  const delayScope = useDelayAnimation(); // custom hook
  function useDelayAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(".cascadeDelayAnim", { scale: 1, opacity: 1 }, { delay: stagger(1) });
    });
    return scope;
  }

  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout bgImage={"bgHome"} delayScope={delayScope}>
              <Home />
            </Layout>
          }
        />

        <Route
          exact
          path="/about"
          element={
            <Layout2 bgImage={"bgAbout"}>
              <About />
            </Layout2>
          }
        />

        <Route
          exact
          path="/projects"
          element={
            <Layout2 bgImage={"bgProject"}>
              <Project />
            </Layout2>
          }
        />

        <Route
          exact
          path="/contact"
          element={
            <Layout2 bgImage={"bgContact"}>
              <Contact />
            </Layout2>
          }
        />

        <Route
          exact
          path="/tech"
          element={
            <Layout2 bgImage={"bgTechStack"}>
              <TechStack />
            </Layout2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
