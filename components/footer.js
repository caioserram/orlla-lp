import styles from "./footer.module.scss";

export default function FooterComponet() {
  return (
    <footer>
      <div className={styles.footer}>{new Date().getFullYear()} - Orlla </div>
    </footer>
  );
}
