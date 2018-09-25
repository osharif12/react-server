import React, { Component } from "react";

// stateless functional component
// you need to add props in the argument, react will pass this in the function during runtime

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Todo Application
        </a>
      </nav>
    );
  }
}

export default NavBar;
