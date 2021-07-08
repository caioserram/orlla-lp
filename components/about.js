import styles from "./about.module.scss";
import AboutCardComponent from "./about_card";

export default function AboutComponent() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>A mudança no mundo começa por você</h1>
      <div className={`row ${styles.card_container}`}>
          <AboutCardComponent
            title="Ganhe Benefícios"
            body="Você pode trocar sua ajuda por benefícios como WiFi, cadeira de praia, vale compras, entre outros."
            img_ref="catando_lixo.png"
          ></AboutCardComponent>
          <AboutCardComponent
            title="Ajude Uma Causa"
            body="Receba notificações e participe de iniciativas para limpeza das praias e oceanos mais próximas da sua região."
            img_ref="lixo_praia.png"
          ></AboutCardComponent>
          <AboutCardComponent
            title="Seja Parte da Mudança"
            body="Faça parte de uma comunidade de pessoas que busca melhorar o mundo através de pequenas ações. "
            img_ref="catando_lixo_2.png"
          ></AboutCardComponent>
      </div>
    </div>
  );
}
