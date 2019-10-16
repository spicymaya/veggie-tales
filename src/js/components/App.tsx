import React from "react";
import PropTypes, { any } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleMenu } from "../actions/toggleActions";
import FoodWrapper from "./FoodWrapper.jsx";
import NewFoodForm from "./NewFoodForm.jsx";
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
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // this.state = {
    //   isOpen: false
    // };

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
    // this.setState({
    //   isOpen: !this.state.isOpen
    // });
    this.props.toggleMenu();
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar light expand='md'>
            <NavbarBrand tag={Link} to='/'>
              Veggie Tales
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.props.menuIsOpen} navbar>
              <Nav navbar>
                <NavLink tag={Link} target='_self' to='/foods'>
                  Food list
                </NavLink>
                <NavLink tag={Link} target='_self' to='/new'>
                  Add new
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path='/' component={FoodWrapper} />
          <Route path='/foods' component={FoodWrapper} />
          <Route path='/new' component={NewFoodForm} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.toggle.menuIsOpen);
  return {
    menuIsOpen: state.toggle.menuIsOpen
  };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(toggleMenu, dispatch);
// };
const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: bindActionCreators(toggleMenu, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
