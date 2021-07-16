import styles from "./home.module.scss";

export default function HomeComponent() {
  return (
    <div className={styles.action_root}>
      <div className={styles.action_title}>
        <h1>Transforme suas</h1>
        <h1>ações em <span>Benefícios</span>
        </h1>
      </div>
      <div className={styles.info_button}>
        <button className="btn btn-info">Descobrir</button>
      </div>
    </div>
  );
}
