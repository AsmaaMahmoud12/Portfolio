import React from "react";
import Header from "./layouts/Header";
import NavbarContainer from "./layouts/NavbarContainer";
import About from "./layouts/About";
import ProjectsSection from "./layouts/ProjectsSection";
import WorkExpSection from "./layouts/WorkExpSection";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div>
      <div className="header">
        <NavbarContainer />
        <Header />
      </div>
      <About />
      <ProjectsSection />
      <WorkExpSection />
      <Footer />
    </div>
  );
}

export default App;
