
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import Doughnut from "variables/doughnut";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/chart_2.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">


        <Row>
          <Col  xs="12">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Tools values</h5>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Actuall tool length</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  xs="12">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Tools values</h5>

                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Actuall tool Identify</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                  
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col  xs="12">
          <Card className="card-chart">
              <CardHeader>
              <h5 className="card-category">Tools values</h5>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h3">Actuall tool radius</CardTitle>
                  </Col>
                  <Col sm="6">
                
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
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
