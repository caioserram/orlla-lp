import { Card, Nav } from "react-bootstrap";
import styles from "./about_card.module.scss";

export default function AboutCardComponent(props) {
  return (
    <Card className="bg-white">
      <Card.Body className="bg-white d-flex flex-wrap text-left">
        <Card.Title className="bg-white text-primary font-weight-bold mt-3 ">
          {props.title}
        </Card.Title>
        <div className="bg-white w-100  mt-3 mb-3 d-flex align-items-center justify-content-center">
          <Card.Img
            className={`bg-white ${styles.img_width}`}
            src={props.img_ref}
          />
        </div>
        <Card.Text className="bg-white ">{props.body}</Card.Text>
      </Card.Body>
      <Nav className="bg-white mb-3 mt-3">
        <Nav.Link className="bg-white text-primary">Explore →</Nav.Link>
      </Nav>
    </Card>
  );
}
