import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";
import Layout from "./layouts/layout";
import Layout2 from "./layouts/layout2";

function App() {
  return (
    // <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout bgImage={"bgHome"}>
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
