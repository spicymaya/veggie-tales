import React from "react";
import PropTypes from "prop-types";
import FoodWrapper from "./FoodWrapper.jsx";
import NewFood from "./NewFood.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";

class App extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    Navbar.propTypes = {
      light: PropTypes.bool,
      dark: PropTypes.bool,
      fixed: PropTypes.string,
      color: PropTypes.string,
      role: PropTypes.string,
      expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
      // pass in custom element to use
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar light expand="md">
            <NavbarBrand href="/">Veggie Tales</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavLink href="/foods">Food list</NavLink>
                <NavLink href="/new">Add new</NavLink>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={FoodWrapper} />
          <Route path="/foods/" component={FoodWrapper} />
          <Route path="/new" component={NewFood} />
        </div>
      </Router>
    );
  }
}
export default App;
