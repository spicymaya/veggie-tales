import React from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import api from "../../../lib/api.js";
import SingleFoodWrapper from "./SingleFoodWrapper.jsx";
import FoodCard from "./FoodCard.jsx";

class FoodWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    api.getFoods().then(data => {
      this.setState({ data });
    });
  }
  render() {
    // console.log("state", this.state);
    return (
      <Container>
        {/* <Route path={`/foods/:id`} render={(props) => <SingleFood{...props}/>} /> */}
        <Route path={`/foods/:id`} component={SingleFoodWrapper} />
        <Route
          exact
          path={`/foods/`}
          component={() => <FoodCard data={this.state.data} />}
        />
      </Container>
    );
  }
}
export default FoodWrapper;
