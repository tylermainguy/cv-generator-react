import React, { Component } from "react";

import Header from "./components/Header";
import CVContainer from "./components/CVContainer";
import Footer from "./components/Footer";
import "./App.css";
import "./fonts.css";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CVContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
