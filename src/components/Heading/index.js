import { forwardRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MultipleLanguage from "../MultipleLanguage";

function Heading(props, selectLanguageRef) {
  return (
    <Container fluid>
      <Row md="3" sm="2">
        <Col md="2"></Col>
        <Col md="8"></Col>
        <Col md="2">
          <MultipleLanguage ref={selectLanguageRef} />
        </Col>
      </Row>
    </Container>
  );
}
export default forwardRef(Heading);
