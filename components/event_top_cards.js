import { Card } from "react-bootstrap";

export default function EventTopCardComponent(props) {
  return (
    <Card className="bg-white p-2 border-0">
      <div className="bg-white w-100 mt-3 mb-3 d-flex align-items-center justify-content-center">
        <Card.Img
          className="bg-white text-center w-25 h-25"
          variant="top"
          src={props.img_ref}
        />
      </div>
      <Card.Body className="bg-white d-block">
        <Card.Title className="bg-white d-flex align-items-center justify-content-center text-center">
          <h1 className="bg-white text-primary display-5 fw-bold">
            {props.title}
          </h1>
        </Card.Title>
        <Card.Text className="bg-white mt-3 d-flex align-items-center justify-content-center text-center">
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
