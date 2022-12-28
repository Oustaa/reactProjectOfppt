import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ClickCount: 0, IamDisabled: true };
    this.ClickMe = this.ClickMe.bind(this);
  }
  ClickMe() {
    this.setState({ ClickCount: this.state.ClickCount + 1 });
  }
  render() {
    return (
      <div>
        <button className="click-me" id="ClickMe" onClick={this.ClickMe}>
          Click Me
        </button>
        <p>You clicked me :: {this.state.ClickCount}</p>
        <button className="click-me" disabled={this.state.IamDisabled}>
          Disabled
        </button>
      </div>
    );
  }
}
export default App;
