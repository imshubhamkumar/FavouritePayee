import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import avatar from "../(assets)/avatar.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <Nav className="me-auto"></Nav>
        <Nav>
          <NavDropdown
            alignRight
            title={
              <Image
                src={avatar}
                roundedCircle
                style={{ width: "32px", height: "32px" }}
                alt="avatar"
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#" className="right_icon_dropdown">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
