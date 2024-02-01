import Particles from "react-tsparticles";
import particlesConfig from "../configs/particlesConfig";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { useCallback } from "react";
import profilePic from "../assests/profile.jpeg";
import Pdf from "../assests/Asmaa_Resume.pdf";

function Header() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="header-title">
        <h1>
          Front-End<br></br> Web Developer{" "}
        </h1>
        <img src={profilePic} alt="profile-picture" className="logo" />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <div className="link-wrapper">
        <div className="links-container">
          <a href="https://github.com/AsmaaMahmoud12" target="_blank">
            <img
              src={require("../assests/github_icon.png")}
              alt="github-icon"
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/asmaa-mahmoud-5389601b8"
            target="_blank"
          >
            <img
              src={require("../assests/linkedin_icon.png")}
              alt="linkedin-icon"
            />
          </a>
          <a href={Pdf} target="_blank">
            <img
              src={require("../assests/resume_icon.png")}
              alt="resume-icon"
            />
          </a>
        </div>
      </div>

      <div className="curve-header"></div>
    </>
  );
}

export default Header;
