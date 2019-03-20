import React from "react";
import NewFoodForm from "./NewFoodForm.jsx";
import api from "../../../lib/api.js";

class NewFood extends React.Component {
  constructor(props) {
    super(props);
    if (typeof props.data == "undefined") {
      this.state = {
        formControls: {
          name: "",
          type: "",
          region: "",
          image_url: ""
        },
        rating: 1,
        method: "POST",
        error: ""
      };
    } else {
      this.state = {
        formControls: {
          name: props.data.name,
          type: props.data.type,
          region: props.data.region,
          image_url: props.data.image_url
        },
        rating: props.data.rating,
        method: "PUT",
        error: props.data.error
      };
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      if (typeof this.props.data == "undefined") {
        const data = await api.createFood(this.state.formControls);
        window.location.assign("/foods/" + data.id);
      } else {
        const data = await api.updateFood(
          this.state.formControls,
          this.props.data.id
        );
        window.location.assign("/foods/" + this.props.data.id);
      }
    } catch (error) {
      this.setState({
        error: error
      });
    }
  };
  handleChange = event => {
    //experimental syntax
    const name = event.target.name;
    const value = event.target.value;
    const prevfFormCnotrols = this.state.formControls;

    this.setState({
      formControls: {
        ...prevfFormCnotrols,
        [name]: value
      }
    });

    // console.log(this.state.formControls);
  };
  starUpdate = starNumber => {
    // console.log("starNumber", starNumber);
    this.setState({
      rating: starNumber
    });
  };
  render() {
    // console.log(this.props);
    return (
      <NewFoodForm
        formControls={this.state.formControls}
        rating={this.state.rating}
        method={this.state.method}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        starUpdate={this.starUpdate}
      />
    );
  }
}

export default NewFood;
