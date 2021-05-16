import { NavLink } from "react-bootstrap";
import styles from "./header.module.scss";

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <nav className={styles.first_nav} >
        <ul>
          <li>
            <NavLink>Sobre</NavLink>
          </li>
          <li>
            <NavLink>Recompensas</NavLink>
          </li>
          <li>
            <NavLink>Eventos</NavLink>
          </li>
          <li>
            <NavLink>Contato</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <img src="orlla-logo-original.svg"></img>
      </div>
      <nav className={styles.second_nav}>
        <button className={"btn btn-secondary "+styles.sign_in_button}>Login</button>
        <button className={"btn btn-primary "+styles.sign_up_button}>Cadastre-se</button>
      </nav>
    </header>
  );
}
