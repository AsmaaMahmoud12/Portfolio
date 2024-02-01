import { Zoom } from "react-reveal";
import { Fade } from "react-reveal";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="about-container" ref={ref} style={{ minHeight: "70vh" }}>
      {/* <Fade when={inView}> */}
      <div className="text-above-line">
        <p className="text">ABOUT ME</p>
        <hr class="line-title" />
      </div>
      {/* </Fade> */}
      <Fade when={inView}>
        <div className="about-details">
          <Zoom left when={inView}>
            <div className="about-intro">
              <h2 className="mySkills-header">Informations About Me!</h2>
              <p>
                Hey there, I'm Asmaa Elhussieny, a Front-End developer rooted in
                Egypt and currently settled in Canada. My focus revolves around
                crafting engaging websites and web applications. <br />
                I work extensivelywith Angular, React, and TypeScript,
                navigating the world of frontend development. <br />
                My aim is to create code that emphasizinguser-friendly
                interfaces blending striking design with inclusivity for all.{" "}
                <br />I hold a bachelor's degree in Biomedical Engineering from
                Cairo University in Egypt. I'm actively seeking opportunities
                where I can contribute, learn, and grow. If you have an exciting
                opportunity that aligns with my skills and experiences, I'm
                eager to connect.
              </p>
            </div>
          </Zoom>
          <Zoom right when={inView}>
            <div className="about-skills">
              <h2 className="mySkills-header">My Skills</h2>
              <div className="skill-div">
                <img
                  src={require("../assests/html-icon.ico")}
                  alt="html-icon"
                />
                <p class="">
                  <b>HTML</b>
                </p>
              </div>
              <div className="skill-div">
                <img src={require("../assests/css-icon.ico")} alt="css-icon" />
                <p>
                  <b>CSS</b>
                </p>
              </div>
              <div className="skill-div">
                <img src={require("../assests/js-icon.ico")} alt="js-icon" />
                <p>
                  <b>JAVASCRIPT</b>
                </p>
              </div>
              <div className="skill-div">
                <img
                  src={require("../assests/sass-icon.ico")}
                  alt="sass-icon"
                />
                <p>
                  <b>SASS</b>
                </p>
              </div>
              <div className="skill-div">
                <img src={require("../assests/api-icon.ico")} alt="api-icon" />
                <p>
                  <b>REST APIs</b>
                </p>
              </div>
              <div className="skill-div">
                <img
                  src={require("../assests/typescript-icon.ico")}
                  alt="ts-icon"
                />
                <p>
                  <b>TYPESCRIPT</b>
                </p>
              </div>
              <div className="skill-div">
                <img
                  src={require("../assests/react-icon.ico")}
                  alt="react-icon"
                />
                <p>
                  <b>REACT</b>
                </p>
              </div>
              <div className="skill-div">
                <img
                  src={require("../assests/angular-icon.ico")}
                  alt="angular-icon"
                />
                <p>
                  <b>ANGULAR</b>
                </p>
              </div>
              <div className="skill-div">
                <img
                  src={require("../assests/mysql-icon.ico")}
                  alt="mysql-icon"
                />
                <p>
                  <b>SQL BASICS</b>
                </p>
              </div>
              <div className="skill-div">
                <img
                  src={require("../assests/responsive-icon.ico")}
                  alt="responsive-icon"
                />
                <p>
                  <b>RESPONSOVE DESIGNS</b>
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </Fade>
    </div>
  );
}

export default About;
