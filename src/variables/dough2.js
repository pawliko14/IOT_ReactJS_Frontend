
import React from 'react';

import {Chart} from 'react-chartjs-2';
import {IP_PATH} from 'variables/Constants.js';


export default class doughnut extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        feeds: "",
      };
    }

  
    render() {
      return (
        <div className="App">
          <DoughnutChart
              data= {10}
              title={"duppa"}
          />
        </div>
      );
    }
  }




  class DoughnutChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();

      this.state = {
        test: "100"
      };
    }
  
    componentDidUpdate() {


      this.myChart.data.datasets[0].data[0] =  this.state.test;//this.state.test//Math.floor(this.state.joke/1000000)*100;
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'bar',
        data: {
          labels: ["Feed Rate"],//['Value'],
          datasets: [{
            data: [this.state.test],
            backgroundColor: this.props.colors,
            min: 0,
            max: 120,
            fill: true,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
          }],
          borderWidth: 1
        },
        options: {
          legend: {
              display: false
          }
        }
      });

      this.getJoke();
      this.interval = setInterval(() => {
        this.getJoke();
        this.testowy_update();

      }, 2000);

    }


    testowy_update() {
          this.myChart.update();
        }
    

    
    getJoke() {
        fetch(IP_PATH + "plcvariables_data")
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState({
              test: res[15].value,
            });
          });
      }
    
     componentWillUnmount() {
       clearInterval(this.interval);
     }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }