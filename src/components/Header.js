import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <i className="fas fa-file-alt"></i>
        <span className="header-text">Please Hire Me</span>
      </div>
    );
  }
}

export default Header;
