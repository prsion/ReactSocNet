import React, {Component} from 'react';
import s from './Clock.module.css';


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }

  componentDidMount(){
    this.timerID=setInterval(
        ()=>this.tick(),
        1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date:new Date()
    });
  }

  render(){
    return (
        <div className={s.clock}>
          <h1>{this.state.date.toLocaleDateString()}</h1>
          <h3>{this.state.date.toLocaleTimeString()}.</h3>
        </div>
    );
  }
}

export default Clock;