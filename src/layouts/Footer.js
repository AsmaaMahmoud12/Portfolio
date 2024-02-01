import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div">
        <div className="footer-myName">
          <h4>Asmaa Elhussieny | Front-end Developer</h4>
        </div>
        <div className="footer-social">
          {/* <div className="footer-social-header">Social</div> */}
          <div className="links">
            <a
              href="https://www.linkedin.com/in/asmaa-mahmoud-5389601b8"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/AsmaaMahmoud12" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto:asmaamahmoud083@gmail.com" target="_blank">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
