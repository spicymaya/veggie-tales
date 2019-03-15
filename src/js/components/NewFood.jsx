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
          image_url: "",
          rating: "1"
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

    // do not have to bind because of https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = async event => {
    // console.log(method);
    event.preventDefault();
    // console.log(this.props.data);
    // let data;
    // if (typeof this.props.data == "undefined") {
    //   data = await api.createFood(this.state.formControls);
    // } else {
    //   data = await api.updateFood(this.state.formControls, this.props.data.id);
    // }
    // let error
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

      // console.log("data", data);
      // debugger;
      // do the redirect using data
    } catch (error) {
      // debugger;
      // set state using error
      this.setState({
        error: error
      });
    }

    // console.log(this.state);
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
  render() {
    // console.log(this.props);
    return (
      <NewFoodForm
        formControls={this.state.formControls}
        method={this.state.method}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default NewFood;
