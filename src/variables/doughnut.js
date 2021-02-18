
import React from 'react';

import {Chart} from 'react-chartjs-2';
import {IP_PATH} from 'variables/Constants.js';


export default class doughnut extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        feeds: this.getFeeds()
      };
    }

// Data generation
 getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for(var i = 0; i < numItems; i++) {
      data.push({
        label: names[i],
        value: 20
      });
    }
    return data;
  }
  
   getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for(var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(baseTime + i * dayMs),
        value: Math.round(20 + 80 * Math.random())
      });
    }
    return data;
  }

  getBlaBla()
  {
    
    const promise =  new Promise(function(resolve, reject) {

      fetch("https://api.countapi.xyz/hit/namespace/key")
      .then(res => {
        return res.json();
      })
      .then(res => {
        resolve(res.value)
      });

    });
    return promise;
  }

     getFeeds() {
        let feeds = [];

        feeds.push({
          title: 'Data 4',
          data: this.getRandomArray(2)
        });
      
        return feeds;
      }
  
    render() {
      return (
        <div className="App">
          <DoughnutChart
              data={this.state.feeds[0].data}
              title={this.state.feeds[0].title}
              colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
          />
        </div>
      );
    }
  }




  class DoughnutChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = this.props.data.map(d => d.label);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Value'],
          datasets: [{
            data: [120],//   data: this.props.data.map(d => d.value),
            backgroundColor: this.props.colors,
            min: 0,
            max: 150
          }],
          borderWidth: 1
        },
        options: {
          legend: {
              display: true
          },
          cutoutPercentage: 80,
          rotation: 0.75 * Math.PI,
          circumference: 1.5 * Math.PI,
          title: {
              display: false,
              position: 'bottom'
          }
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }