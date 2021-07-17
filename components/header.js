import { NavLink } from "react-bootstrap";
import styles from "./header.module.scss";

export default function HeaderComponent(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.first_nav}>
        <ul>
          <li>
            <NavLink href="/about">Sobre</NavLink>
          </li>
          <li>
            <NavLink href="/rewards">Recompensas</NavLink>
          </li>
          <li>
            <NavLink href="/events">Eventos</NavLink>
          </li>
          <li>
            <NavLink href="/contact us">Contato</NavLink>
          </li>
        </ul>
      </nav>
      <div href="/about" className={styles.logo}>
        <img src="orlla-logo-original.svg"></img>
      </div>
      <nav className={styles.second_nav}>
        <button className={"btn btn-secondary " + styles.sign_in_button}>
          Login
        </button>
        <a
          href="/register"
          className={"btn btn-primary " + styles.sign_up_button}
        >
          Cadastre-se
        </a>
      </nav>
    </header>
  );
}
