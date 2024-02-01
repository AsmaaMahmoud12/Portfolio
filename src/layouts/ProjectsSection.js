import Card from "react-bootstrap/Card";
import { Zoom } from "react-reveal/Zoom";
import { Fade } from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";

function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <div
      className="projects-container"
      ref={ref}
      style={{ minHeight: "100vh" }}
    >
      {/* <Fade when={inView}> */}
      <div className="text-above-line">
        <p className="text">PROJECTS</p>
        <hr class="line-title" />
      </div>
      {/* </Fade> */}
      <Fade when={inView}>
        <div className="card-wrapper">
          <Zoom left when={inView}>
            <img
              className="project-background left"
              src={require("../assests/particles_crop.png")}
              alt=""
            />
          </Zoom>
          <Zoom right when={inView}>
            <img
              className="project-background right"
              src={require("../assests/particles_crop.png")}
              alt=""
            />
          </Zoom>
          <div className="column">
            <Zoom left when={inView}>
              <Card className="card-container left text-center">
                <Card.Body>
                  <div className="card-hover text-white rounded">
                    <Card.Img
                      src={require("../assests/beach_resort.gif")}
                    ></Card.Img>
                    <div className="hover-overlay"></div>
                    <div className="hover-content">
                      <Card.Title>Beach Resort Website</Card.Title>
                      <Card.Text>
                        <span>React</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
            <Zoom left when={inView}>
              <Card className="card-container left text-center">
                <Card.Body>
                  <div className="card-hover text-white rounded">
                    <Card.Img
                      src={require("../assests/radiology.gif")}
                    ></Card.Img>
                    <div className="hover-overlay"></div>
                    <div className="hover-content">
                      <Card.Title>
                        Hospital Information System | Radiology Department
                        Website
                      </Card.Title>
                      <Card.Text>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </div>
          <div className="column">
            <Zoom right when={inView}>
              <Card className="card-container right text-center">
                <Card.Body>
                  <div className="card-hover text-white rounded">
                    <Card.Img
                      src={require("../assests/cmms_project.gif")}
                    ></Card.Img>
                    <div className="hover-overlay"></div>
                    <div className="hover-content">
                      <Card.Title>
                        Computerized Management Maintenance System Website
                      </Card.Title>
                      <Card.Text>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
            <Zoom right when={inView}>
              <Card className="card-container right text-center">
                <Card.Body>
                  <div className="card-hover text-white rounded">
                    <Card.Img
                      src={require("../assests/simple_landing_page.gif")}
                    ></Card.Img>
                    <div className="hover-overlay"></div>
                    <div className="hover-content">
                      <Card.Title>Simple Landing Page</Card.Title>
                      <Card.Text>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
            <Zoom right when={inView}>
              <Card className="card-container right text-center">
                <Card.Body>
                  <div className="card-hover text-white rounded">
                    <Card.Img
                      src={require("../assests/simple_landing_page_2.gif")}
                    ></Card.Img>
                    <div className="hover-overlay"></div>
                    <div className="hover-content">
                      <Card.Title>Simple Landing Page</Card.Title>
                      <Card.Text>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>Javascript</span>
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProjectsSection;
