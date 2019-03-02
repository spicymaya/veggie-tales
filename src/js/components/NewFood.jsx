import React from "react";
import NewFoodForm from "./NewFoodForm.jsx";
import { createFood, updateFood } from "../../../lib/api.js";

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
        method: "POST"
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
        method: "PUT"
      };
    }

    // do not have to bind because of https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = event => {
    // console.log(method);
    event.preventDefault();
    // console.log(this.props.data);
    if (typeof this.props.data == "undefined") {
      createFood(this.state.formControls);
    } else {
      updateFood(this.state.formControls, this.props.data.id);
    }
  };
  componentWillMount() {}
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
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default NewFood;
