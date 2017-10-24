import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { elapsed: 0 };
  }

  componentDidMount() {

      // componentDidMount is called by react when the component
      // has been rendered on the page. We can set the interval here:

      this.timer = setInterval(this.tick.bind(this), 100);
  }

  componentWillUnmount() {

      // This method is called immediately before the component is removed
      // from the page and destroyed. We can clear the interval here:

      clearInterval(this.timer);
  }

  tick() {

      // This function is called every 100 ms. It updates the
      // elapsed counter. Calling setState causes the component to be re-rendered
      this.setState({elapsed: new Date() - this.props.start});
  }

  render() {

      var elapsed = Math.round(this.state.elapsed / 100);

      // This will give a number with one digit after the decimal dot (xx.x):
      var seconds = (elapsed / 10).toFixed(1);

      // Although we return an entire <p> element, react will smartly update
      // only the changed parts, which contain the seconds variable.

      return <div>This app was started <b>{seconds} seconds</b> ago.</div>;
  }
}

export default App;
