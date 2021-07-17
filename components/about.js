import styles from "./about.module.scss";
import AboutCardComponent from "./about_card";
import { Carousel } from "react-bootstrap";

export default function AboutComponent() {
  const prevIcon = (
    <span aria-hidden="false" className="bg-white">
      <i className="fa fa-chevron-left bg-white text-dark" />
    </span>
  );

  const nextIcon = (
    <span aria-hidden="false" className="bg-white">
      <i className="fa fa-chevron-right bg-white text-dark" />
    </span>
  );

  return (
    <div>
      <h1 className={styles.title}> A mudança no mundo começa por você </h1>
      <Carousel prevLabel={null} nextLabel={null} prevIcon={prevIcon} nextIcon={nextIcon}>
        <Carousel.Item>
          <AboutCardComponent
            title="Ganhe Benefícios"
            body="Você pode trocar sua ajuda por benefícios como WiFi, cadeira de praia, vale compras, entre outros."
            img_ref="catando_lixo.png"
            layot_class="d-block w-100"
          ></AboutCardComponent>
        </Carousel.Item>
        <Carousel.Item>
          <AboutCardComponent
            title="Ajude Uma Causa"
            body="Receba notificações e participe de iniciativas para limpeza das praias e oceanos mais próximas da sua região."
            img_ref="lixo_praia.png"
            layot_class="d-block w-100"
          ></AboutCardComponent>
        </Carousel.Item>
        <Carousel.Item>
          <AboutCardComponent
            title="Seja Parte da Mudança"
            body="Faça parte de uma comunidade de pessoas que busca melhorar o mundo através de pequenas ações. "
            img_ref="catando_lixo_2.png"
            layot_class="d-block w-100"
          ></AboutCardComponent>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
