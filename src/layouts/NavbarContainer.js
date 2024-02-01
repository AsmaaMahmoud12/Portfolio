import { Container, Navbar } from "react-bootstrap";

function NavbarContainer() {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container>
        <Navbar.Brand className="navbar-title">Asmaa Elhussieny</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a
              className="navbar-contact"
              href="mailto:asmaamahmoud083@gmail.com"
            >
              Contact
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
