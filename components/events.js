import { Card, Col, Row } from "react-bootstrap";
import EventBottomCardComponent from "./event_bottom_card";
import EventTopCardComponent from "./event_top_cards";

export default function EventsComponent() {
  return (
    <Card className="bg-white">
      <Row xs={1} sm={2} md={4} className="text-center">
        <Col className="bg-white">
          <EventTopCardComponent
            title="1"
            text="Planetas com água"
            img_ref="watered_planets_icon.svg"
          ></EventTopCardComponent>
        </Col>
        <Col className="bg-white">
          <EventTopCardComponent
            title="5+"
            text="Oceanos"
            img_ref="oceans_icon.svg"
          ></EventTopCardComponent>
        </Col>
        <Col className="bg-white">
          <EventTopCardComponent
            title="113+"
            text="Mares"
            img_ref="seas_icon.svg"
          ></EventTopCardComponent>
        </Col>
        <Col className="bg-white">
          <EventTopCardComponent
            title="25+"
            text="Toneladas de resíduos descartados"
            img_ref="trash_icon.svg"
          ></EventTopCardComponent>
        </Col>
      </Row>
      <Row xs={1}>
        <Col className="bg-white">
          <h1 className="bg-white display-4 p-3 text-primary fw-bold">
            Como Participar?
          </h1>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={4}>
        <Col className="bg-white p-4">
          <EventBottomCardComponent
            title="Cadastre-se"
            text="Basta fazer um cadastro rápido e preencher sua região"
          />
        </Col>
        <Col className="bg-white p-4">
          <EventBottomCardComponent
            title="Escolha"
            text="O melhor local para participar dos eventos"
          />
        </Col>
        <Col className="bg-white p-4">
          <EventBottomCardComponent
            title="Participe"
            text="Encontre pessoas, contribua com a limpeza do planeta e ganhe pontos"
          />
        </Col>
        <Col className="bg-white p-4">
          <EventBottomCardComponent
            title="Troque"
            text="Use seus pontos escolhendo as melhores recompensas"
            end={true}
          />
        </Col>
      </Row>
    </Card>
  );
}
