
import React from "react";
import ProgValues from "variables/program/program_1";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";



function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">


        <Row>
          <Col  lg="4">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Program values</h5>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Running Program Name</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div className="d-flex justify-content-center">
                 <ProgValues  id="5"/> 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  lg="4">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Program values</h5>

                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Actuall Line in Program</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div className="d-flex justify-content-center">
                 <ProgValues  id="3"/> 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  lg="4">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Program values</h5>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Program Info</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div className="d-flex justify-content-center">
                 <ProgValues  id="1"/> 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  lg="4">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Program values</h5>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Selected Program</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="d-flex justify-content-center">
                <ProgValues  id="2"/> 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  lg="4">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Program values</h5>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Actuall Part of Program</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
              <div className="d-flex justify-content-center">
                <ProgValues  id="4"/> 
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
          </Col>
          <Col lg="6" md="12">
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
