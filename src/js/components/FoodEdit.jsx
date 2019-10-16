import React from "react";
import NewFoodForm from "./NewFoodForm.jsx";

class FoodEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NewFoodForm
        data={this.props.data}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default FoodEdit;
