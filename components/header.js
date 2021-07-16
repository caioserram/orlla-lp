import { NavLink } from "react-bootstrap";
import styles from "./header.module.scss";

export default function HeaderComponent(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.first_nav} >
        <ul>
          <li>
            <NavLink onClick={() => props.set_current_page('about')}>Sobre</NavLink>
          </li>
          <li>
            <NavLink onClick={() => props.set_current_page('rewards')} >Recompensas</NavLink>
          </li>
          <li>
            <NavLink onClick={() => props.set_current_page('events')}>Eventos</NavLink>
          </li>
          <li>
            <NavLink onClick={() => props.set_current_page('events')} >Contato</NavLink>
          </li>
        </ul>
      </nav>
      <div onClick={() => props.set_current_page('home')} className={styles.logo}>
        <img  src="orlla-logo-original.svg"></img>
      </div>
      <nav className={styles.second_nav}>
        <button className={"btn btn-secondary "+styles.sign_in_button}>Login</button>
        <button className={"btn btn-primary "+styles.sign_up_button}>Cadastre-se</button>
      </nav>
    </header>
  );
}
