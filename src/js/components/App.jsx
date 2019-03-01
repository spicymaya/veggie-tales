import React from "react";
import Foods from "./Foods.jsx";
import NewFood from "./NewFood.jsx";
import { HashRouter, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap";
import SingleFood from "./SingleFood.jsx";
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
      <HashRouter>
        <div className="App">
          <div className="container">
            <Navbar color="light" expand="lg">
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
            <Route exact path="/" component={Foods} />
            <Route path="/foods/" component={Foods} />
            <Route path="/new" component={NewFood} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
