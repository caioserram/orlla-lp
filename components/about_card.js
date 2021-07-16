import styles from "./about_card.module.scss";

export default function AboutCardComponent(props) {
  return (
    <div
      className={`col-3 ${styles.card_container}`}
    >
      <div className={`card ${styles.custom_card}`}>
        <div className={`card-body ${styles.card_body_div}`}>
          <div className={styles.card_title}>
            <h4>{props.title}</h4>
          </div>
          <img className={styles.card_img} src={props.img_ref}></img>
          <div className={styles.card_body_text}>
            <p>{props.body}</p>
          </div>
        </div>
        <div className={styles.card_footer}>
          <a href="#">Explore →</a>
        </div>
      </div>
    </div>
  );
}
