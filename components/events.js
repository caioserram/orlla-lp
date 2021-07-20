import { Card, Col, Row } from "react-bootstrap";
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
    </Card>
  );
}
