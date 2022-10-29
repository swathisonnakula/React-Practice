import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import UserList from "./List";
import UserView from "./View";
import "./../index.css";

const Index = () => {
  // Display UI
  return (
    <div className="page-bg">
      <div>
        <Row>
          <Col md={12}>
            <h3 className="text-center p-3">React Practice</h3>
          </Col>
        </Row>
      </div>
      <Row>
        <Col md={3}>
          <UserList />
        </Col>
        <Col md={9}>
          <Card className="bg-white border border-0 me-3 p-3 mb-5">
            <CardBody>
              <UserView />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Index;
