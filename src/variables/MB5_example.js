import React from 'react';

import {Line,Chart} from 'react-chartjs-2';
import {IP_PATH} from 'variables/Constants.js';


export default class line_chart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        feeds: "",
        joke: ""
      };
    }

  
    render() {
      return (
        <div className="App">
          <DUppa
              data= {10}
              title={"duppa"}
          />
        </div>
      );
    }
  }




  class DUppa extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();

      this.state = {
        test: [1,2,3,4,5,6,7,8,9,10],
        dates: [1,2,3,4,5,6,7,8,9,10]
      };
    }
  
    componentDidUpdate() {
    
      this.myChart.data.datasets[0].data =  this.state.test;
      this.myChart.data.labels =  this.state.dates;


      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'line',
        data: {
          labels: [this.state.dates],
          datasets: [{
            data: [this.state.test],
            backgroundColor: this.props.colors,
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
            maintainAspectRatio: false,
            legend: {
              display: false,
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
        fetch(IP_PATH + "plcvariables_historical/20/MB5")
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState({
              test: res.map(x => x.value),//res.value   
              dates : res.map(x => x.last_time.substring(0,8)) 
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