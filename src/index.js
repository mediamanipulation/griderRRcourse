import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ""
    };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>loading</div>;
  }
}
// export default App;
ReactDOM.render(<App />, document.querySelector("#root"));

// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//    navigator.geolocation.getCurrentPosition(
//        position => console.log(position),
//        err => console.log(err)
//      );

// return <div> {}</div>
//    };

//
