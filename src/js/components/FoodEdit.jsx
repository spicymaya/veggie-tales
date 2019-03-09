import React from "react";
import NewFoodForm from "./NewFoodForm.jsx";

class FoodEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NewFoodForm
        formControls={this.state.formControls}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default FoodEdit;
