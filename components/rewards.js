import { Row, Button, Col } from "react-bootstrap";
import RewardIconComponent from "./reward_icon";

export default function RewardsComponent() {
  return (
    <div>
      <Row xs={1} className="mt-5">
        <Col>
          <h1 className="fw-bold text-primary text-center">
            Descubra um oceano de opções
          </h1>
          <p className="text-white text-center">
            Use seus pontos escolhendo as melhores recompensas
          </p>
        </Col>
      </Row>
      <div className="mt-5 mb-5">
        <Row sm={4} xs={3} className="m-2 d-flex justify-content-center">
          <RewardIconComponent img_ref="logo_r1_1.svg" />
          <RewardIconComponent img_ref="logo_r1_2.svg" />
          <RewardIconComponent img_ref="logo_r1_3.svg" />
          <RewardIconComponent img_ref="logo_r1_4.svg" />
          <RewardIconComponent img_ref="logo_r1_5.svg" />
          <RewardIconComponent img_ref="logo_r1_6.svg" />
          <RewardIconComponent img_ref="logo_r1_7.svg" />
          <RewardIconComponent img_ref="logo_r1_8.svg" />
        </Row>
        <Row sm={4} xs={3} className="m-2 d-flex justify-content-center">
          <RewardIconComponent img_ref="logo_r2_1.svg" />
          <RewardIconComponent img_ref="logo_r2_2.svg" />
          <RewardIconComponent img_ref="logo_r2_3.svg" />
          <RewardIconComponent img_ref="logo_r2_4.svg" />
          <RewardIconComponent img_ref="logo_r2_5.svg" />
          <RewardIconComponent img_ref="logo_r2_6.svg" />
          <RewardIconComponent img_ref="logo_r2_7.svg" />
        </Row>
        <Row sm={4} xs={3} className="m-2 d-flex justify-content-center">
          <RewardIconComponent img_ref="logo_r3_1.svg" />
          <RewardIconComponent img_ref="logo_r3_2.svg" />
          <RewardIconComponent img_ref="logo_r3_3.svg" />
          <RewardIconComponent img_ref="logo_r3_4.svg" />
          <RewardIconComponent img_ref="logo_r3_5.svg" />
          <RewardIconComponent img_ref="logo_r3_6.svg" />
        </Row>
      </div>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Button className="btn-dark text-white w-md-25">
            <small className="bg-transparent">Trocar Pontos</small>
          </Button>
        </Col>
      </Row>
    </div>
  );
}
