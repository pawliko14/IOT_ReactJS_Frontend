import React from 'react';

import {Line,Chart} from 'react-chartjs-2';

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
          <Line_chart />
        </div>
      );
    }
  }




  class Line_chart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();

      this.state = {
        joke: "",
        test: [1,2,61,2,13,91],
        dates: [new Date().toLocaleTimeString(),new Date().toLocaleTimeString(),new Date().toLocaleTimeString(),new Date().toLocaleTimeString(),new Date().toLocaleTimeString()]
      };
    }
  
    componentDidUpdate() {
    
      this.myChart.data.datasets[0].data =  this.state.test;
      this.myChart.data.labels =  this.state.dates;


      console.log("dupppa : " + this.state.joke);
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
        fetch("https://api.countapi.xyz/hit/namespace/key")
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState({
              joke:     res.value,
              test:    this.state.test.map(x => x + 2 *3 / 10 )  
                  
            });
          });
      }
    
     componentWillUnmount() {
       clearInterval(this.interval);
     }
  
    render() {
        console.log("STATE" + this.state.test);
        console.log("DATE: " + new Date().toString());

      return <canvas ref={this.chartRef} />;
    }
  }