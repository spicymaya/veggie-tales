import React from "react";
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
          <Navbar color="light" expand="md">
            <NavbarBrand href="/">Veggie Tales</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavLink tag="div">
                  <Link to="/foods" tag="a">
                    Food list
                  </Link>
                </NavLink>
                <NavLink tag="div">
                  <Link to="/new" tag="a">
                    Add new
                  </Link>
                </NavLink>
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
