import React from "react";
import { Route } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle
} from "reactstrap";
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
                  <CardSubtitle>The land of fruits and veggies. </CardSubtitle>
                  <CardText>
                    Basically, paradise if you add fish 🐟, coffee ☕️, wine 🍷
                    and chocolate 🍫
                  </CardText>
                </CardBody>
              </Card>
            </div>
          )}
        />
      </Container>
    );
  }
}
export default FoodWrapper;
