import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Input,
  Col
} from "reactstrap";
import { connect } from 'react-redux';
import { fetchProducts } from "../actions/productsActions";
// import api from "../../../lib/api.ts";
import SingleFoodWrapper from "./SingleFoodWrapper.jsx";
import FoodCard from "./FoodCard.jsx";

class FoodWrapper extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     searchString: ""
  //   };
  // }
  componentDidMount() {
    // api.getFoods().then(data => {
    //   this.setState({ data });
    // });
    this.props.dispatch(fetchProducts());
  }
  handleSearchChange = event => {
    // this.setState({
    //   searchString: event.target.value
    // });
  };
  render() {
    // const search = this.state.searchString.trim().toLowerCase();
    let foods = this.props.products;
    // if (search.length > 0) {
    //   foods = foods.filter(function (food) {
    //     return food.name.toLowerCase().match(search);
    //   });
    // }
    return (
      <Router>
        <Container>
          <Route path={`/foods/:id`} component={SingleFoodWrapper} />
          <Route
            exact
            path={`/foods/`}
            render={() => (
              <div>
                {/* <Col md={{ size: 5, offset: 7 }}>
                  <Input
                    className="qa-input"
                    onChange={this.handleSearchChange}
                    value={this.state.searchString}
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Col> */}

                <FoodCard data={foods} />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src="https://66.media.tumblr.com/tumblr_lufh7n4Hp61qhujw5o1_400.gif"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>Welome to Veggie Tales!</CardTitle>
                    <CardSubtitle>
                      The land of fruits and veggies.{" "}
                    </CardSubtitle>
                    <CardText>
                      Basically, paradise if you add fish 🐟, coffee ☕️, wine
                      🍷 and chocolate 🍫
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            )}
          />
        </Container>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  products: state.foods.data,
  loading: state.foods.loading,
  error: state.foods.error
});
export default connect(mapStateToProps)(FoodWrapper);
