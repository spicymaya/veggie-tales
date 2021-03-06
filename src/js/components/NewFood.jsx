import React from "react";
import { withRouter } from "react-router-dom";
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
          image_url: "",
          rating: 1
        },

        method: "POST",
        error: ""
      };
    } else {
      this.state = {
        formControls: {
          name: props.data.name,
          type: props.data.type,
          region: props.data.region,
          image_url: props.data.image_url,
          rating: props.data.rating
        },
        method: "PUT",
        error: props.data.error
      };
    }
    // console.log(this.state);
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      if (typeof this.props.data == "undefined") {
        await api.createFood(this.state.formControls);
        console.log(this.state);
        // window.location.assign("/foods/" + data.id);
        // this.props.history.push(`/foods/${this.state.data.id}`);
        this.props.history.push("/foods/");
      } else {
        await api.updateFood(this.state.formControls, this.props.data.id);
        // window.location.assign("/foods/" + this.props.data.id);
        console.log(this.props.data);
        this.props.history.push(`/foods/${this.props.data.id}`);
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
    const prevfFormControls = this.state.formControls;

    this.setState({
      formControls: {
        ...prevfFormControls,
        [name]: value
      }
    });
  };
  starUpdate = starNumber => {
    const prevfFormControls = this.state.formControls;
    this.setState({
      formControls: {
        ...prevfFormControls,
        rating: starNumber
      }
    });
  };
  render() {
    return (
      <NewFoodForm
        formControls={this.state.formControls}
        method={this.state.method}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        starUpdate={this.starUpdate}
      />
    );
  }
}

export default withRouter(NewFood);
