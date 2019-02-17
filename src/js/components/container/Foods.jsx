import React from "react";
import SingleFood from "../presentational/SingleFood.jsx";

class Foods extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.mycallbackToGetFoodsFromSingleFood = this.mycallbackToGetFoodsFromSingleFood.bind(
      this
    );
  }

  async componentDidMount() {
    let url = "http://localhost:3000/foods";
    // fetch(url, {
    //     method: "GET", // *GET, POST, PUT, DELETE, etc.
    // })
    const response = await fetch(url, {
      method: "GET" // *GET, POST, PUT, DELETE, etc.
    });
    //debugger
    // .then(response => response.json())
    // .then(data => this.setState({ data }));

    const data = await response.json();
    this.setState({ data });
  }
  mycallbackToGetFoodsFromSingleFood(dataFromSingleFood) {
    console.log(dataFromSingleFood);
  }

  render() {
    const foodList = this.state.data;
    //console.log("foodList", foodList);
    return (
      <SingleFood
        callBackFromGetFoods={this.mycallbackToGetFoodsFromSingleFood}
        foodListFromParent={foodList}
        className="food-list"
      />
    );
  }
}
export default Foods;
