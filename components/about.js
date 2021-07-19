import styles from "./about.module.scss";
import AboutCardComponent from "./about_card";
import { CardGroup, Carousel, Row } from "react-bootstrap";

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

  const aboutComponents = [
    <AboutCardComponent
      title="Ganhe Benefícios"
      body="Você pode trocar sua ajuda por benefícios como WiFi, cadeira de praia, vale compras, entre outros."
      img_ref="catando_lixo.png"
    ></AboutCardComponent>,
    <AboutCardComponent
      title="Ajude Uma Causa"
      body="Receba notificações e participe de iniciativas para limpeza das praias e oceanos mais próximas da sua região."
      img_ref="lixo_praia.png"
    ></AboutCardComponent>,
    <AboutCardComponent
      title="Seja Parte da Mudança"
      body="Faça parte de uma comunidade de pessoas que busca melhorar o mundo através de pequenas ações. "
      img_ref="catando_lixo_2.png"
    ></AboutCardComponent>,
  ];

  const carouselItems = aboutComponents.map((item) => (
    <Carousel.Item> {item} </Carousel.Item>
  ));

  const cardItems = aboutComponents.map((item) => <div> {item} </div>);

  return (
    <div>
      <h1 className={`mb-4 ${styles.title}`}> A mudança no mundo começa por você </h1>
      <Carousel
        prevLabel={null}
        nextLabel={null}
        prevIcon={prevIcon}
        nextIcon={nextIcon}
        className="d-md-none"
      >
        {carouselItems}
      </Carousel>
      <Row xs={1} md={3} className="d-none d-md-flex bg-white">{cardItems}</Row>
    </div>
  );
}
