import { Nav, Navbar, NavLink, Container } from "react-bootstrap";
import styles from "./header.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function HeaderComponent(props) {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    console.log(menuActive);
    setMenuActive(!menuActive);
  }
  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <Navbar bg="none" expand="lg" className="w-100 flex-start">
        <Container className={styles.container}>
          <Navbar.Toggle className="border-0" aria-controls="basic-navbar-nav">
            <Button className="border-0 text-white">
              <FaBars ></FaBars>
            </Button>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.nav_link} href="/about">
                Sobre
              </Nav.Link>
              <Nav.Link className={styles.nav_link} href="/rewards">
                Recompensas
              </Nav.Link>
              <Nav.Link className={styles.nav_link} href="/events">
                Eventos
              </Nav.Link>
              <Nav.Link className={styles.nav_link} href="/contact_us">
                Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div
          href="/about"
          className={`d-flex justify-content-center align-items-center position-absolute w-100 mt-2`}
        >
          <img src="orlla-logo-original.svg"></img>
        </div>
      </Navbar>
    </header>
  );
}
