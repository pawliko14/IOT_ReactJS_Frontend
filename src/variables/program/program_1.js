import React from 'react';


import {IP_PATH} from 'variables/Constants.js';


export default class Timer extends React.Component {
  
    state = {
        joke: "",
        id_val: this.props.id
      };
    
      componentDidMount() {
        this.getJoke();
        this.interval = setInterval(() => {
          this.getJoke();
        }, 3000);
      }
    
      getJoke(props) {
        fetch(IP_PATH + "program_data/" + this.state.id_val)
          .then(res => {
            return res.json();
          })
          .then(res => {
            this.setState({
              joke: res.value
            }); 
          });
      }
    
     componentWillUnmount() {
       clearInterval(this.interval);
     }
    
      render() {
        return <p>{this.state.joke}</p>;
      }
    }
