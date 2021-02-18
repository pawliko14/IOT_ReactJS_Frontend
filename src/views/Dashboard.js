
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

import Doughnut from "variables/doughnut";

import Timer from "variables/timer";

import Doigh from "variables/dough2";

import Line_example from "variables/line_example";

import Line_example2 from "variables/line_example_2";

import MB5 from "variables/MB5_example";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">General Info</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
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
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">General Info</h5>
                <CardTitle tag="h3">
                  Running Program
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <br></br>
                  <br></br>
                <h3 > Timer setting(temporary) :  <Timer /></h3>
                <h3>  Running Since : Invald value</h3>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3">
            <Card className="card-chart" >
              <CardHeader>
                <h5 className="card-category">General Info</h5>
                <CardTitle tag="h3">
                  Feed Rate
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line_example2 />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">General Info</h5>
                <CardTitle tag="h3">
                  MB5 - temporary
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                <MB5 />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="2">
            <Card className="card-chart" >
              <CardHeader>
                <h5 className="card-category">General Info</h5>
                <CardTitle tag="h3">
                  Spindle speed
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doigh />
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
