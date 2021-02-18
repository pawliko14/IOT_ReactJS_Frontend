import React from 'react';

export default class Timer extends React.Component {
  
    state = {
        joke: ""
      };
    
      componentDidMount() {
        this.getJoke();
        this.interval = setInterval(() => {
          this.getJoke();
        }, 1000);
      }
    
      getJoke() {
        fetch("https://api.countapi.xyz/hit/namespace/key")
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
