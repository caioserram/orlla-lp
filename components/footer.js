import styles from "./footer.module.scss";

export default function FooterComponet() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_text}>{new Date().getFullYear()} - Orlla </div>
    </footer>
  );
}
