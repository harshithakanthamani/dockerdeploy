import React, { Component } from 'react';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is being created');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will unmount');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Logger Component</h2>
      </div>
    );
  }
}
export default LifecycleLogger;
