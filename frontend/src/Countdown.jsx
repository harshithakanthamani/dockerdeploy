import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.start
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        if (prevState.count > 0) {
          return { count: prevState.count - 1 };
        } else {
          clearInterval(this.timer);
          return null;
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.count > 0 ? this.state.count : "Time's up!"}
        </h2>
      </div>
    );
  }
}

export default Countdown;
