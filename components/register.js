import { useRef, useState } from "react";
import styles from "./register.module.scss";

export default function RegisterComponent() {
  // const [show_password,set_show_password] = useState(false)

  const [show_password, set_show_password] = useState(false);

  function toggleShowPassword() {
    set_show_password(!show_password);
  }

  return (
    // <div className={styles.card_parent}>
    <div className={`card ${styles.card_parent}`}>
      <section>
        <div className={`card-title`}>
          <h2>Crie sua conta</h2>
        </div>
        <div>
          <form className={styles.form}>
            <div className={styles.control}>
              <label htmlFor="nome_completo">Nome Completo</label>
              <input type="text" required id="nome_completo" />
            </div>
            <div className={styles.control}>
              <label htmlFor="email">Email</label>
              <input type="email" required id="email" />
            </div>
            <div className={styles.control}>
              <label htmlFor="password">Crie uma senha</label>
              <input
                type={show_password ? "text" : "password"}
                required
                id="password"
              />
              <input
                className="form-check-input"
                type="checkbox"
                id="check_show_password"
                required
                onClick={toggleShowPassword}
              />
              <label htmlFor="check_show_password">Mostrar senha</label>
            </div>
            <div className={styles.control}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="check_terms"
              />
              <label htmlFor="check_terms">
                Ao selecionar, Eu aceito os termos.
              </label>
            </div>
            <div className={styles.actions}>
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
