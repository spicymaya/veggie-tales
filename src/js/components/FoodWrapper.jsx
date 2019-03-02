import React from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import { getFoods } from "../../../lib/api.js";
import SingleFood from "./SingleFood.jsx";
import FoodCard from "./FoodCard.jsx";

class FoodWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    getFoods().then(data => {
      this.setState({ data });
    });
  }
  render() {
    // console.log("state", this.state);
    return (
      <Container>
        {/* <Route path={`/foods/:id`} render={(props) => <SingleFood{...props}/>} /> */}
        <Route path={`/foods/:id`} component={SingleFood} />
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
