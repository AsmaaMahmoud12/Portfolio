import { Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";

function WorkExpSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <div
      className="projects-container"
      ref={ref}
      style={{ minHeight: "100vh" }}
    >
      {/* <Fade when={inView}> */}
      <div className="text-above-line">
        <p className="text">Work Experience</p>
        <hr class="line-title" />
      </div>
      {/* </Fade> */}
      <Fade when={inView}>
        <div className="work-exp-container">
          <Zoom left when={inView}>
            <div className="graphs">
              <img
                className="first-img"
                src={require("../assests/particles_crop.png")}
                alt=""
              />
              {/* </Zoom> */}
              {/* <Zoom left when={inView}> */}
              <img
                className="second-img"
                src={require("../assests/particles_crop.png")}
                alt=""
              />
              {/* </Zoom> */}
              {/* <Zoom left when={inView}> */}
              <img
                className="third-img"
                src={require("../assests/particles_crop.png")}
                alt=""
              />
            </div>
          </Zoom>
          <Zoom right when={inView}>
            <div className="jobs-div">
              <div className="job-div">
                <h2>FRONTEND DEVELOPER | PULSE FOR INTEGRATED SOLUTIONS</h2>
                <p>
                  <b>May 2022 – July 2023</b>
                </p>
                <p>
                  Worked as a Frontend Developer using Typescript and Angular
                  framework on designing and implementing the web application of
                  a patient care system for hospitals.
                </p>
                <hr class="line" />
              </div>
              {/* </Zoom> */}
              {/* <Zoom right when={inView}> */}
              <div className="job-div">
                <h2>JAVASCRIPT DEVELOPER | GPS COMPANY</h2>
                <p>
                  <b>Jun 2022 – May 2022</b>
                </p>
                <p>
                  Worked on developing educational games using Javascript
                  integrated with Adobe Animate.
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </Fade>
    </div>
  );
}

export default WorkExpSection;
