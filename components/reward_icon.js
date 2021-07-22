import { Col } from "react-bootstrap";

export default function RewardIconComponent(props) {
  return (
    <Col lg={1} className="bg-transparent">
      <img src={`./other_companies_logos/${props.img_ref}`} className="bg-transparent"></img>
    </Col>
  );
}
