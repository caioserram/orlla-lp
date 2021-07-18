import { Navbar, NavLink } from "react-bootstrap";
import styles from "./header.module.scss";

export default function HeaderComponent(props) {
  return (
    <header className={`d-flex align-items-center ${styles.header}`}>
      <div className="row d-flex flex-nowrap ">
        <Navbar className={`${styles.first_nav}`}>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <NavLink href="/about">Sobre</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink href="/rewards">Recompensas</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink href="/events">Eventos</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink href="/contact us">Contato</NavLink>
            </li>
          </ul>
        </Navbar>
      </div>

      <div
        href="/about"
        className={`d-flex justify-content-center align-items-center position-absolute w-100`}
      >
        <img src="orlla-logo-original.svg"></img>
      </div>
      {/* <nav className={styles.second_nav}>
        <button className={"btn btn-secondary " + styles.sign_in_button}>
          Login
        </button>
        <a
          href="/register"
          className={"btn btn-primary " + styles.sign_up_button}
        >
          Cadastre-se
        </a>
      </nav> */}
    </header>
  );
}
