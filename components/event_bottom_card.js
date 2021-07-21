import { Card } from "react-bootstrap";

export default function EventBottomCardComponent(props) {
    let end_element = "" 

    if (!props.end) {
    end_element = (
      <div className="bg-white w-75">
        <Card.Img
          className="bg-white w-100 h-75"
          variant="top"
          src="line_indicator.svg"
        />
      </div>
    );
  }

  return (
    <Card className="bg-white border-0">
      <div className="bg-white w-100 d-flex">
        <div className="bg-white w-25 mt-3 mb-3 d-flex">
          <Card.Img
            className="bg-white w-75 h-75"
            variant="top"
            src="circle.svg"
          />
        </div>
        {end_element}
      </div>
      <Card.Body className="bg-white p-0">
        <Card.Title className="bg-white">
          <h4 className="bg-white">{props.title}</h4>
        </Card.Title>
        <Card.Text className="bg-white">{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
