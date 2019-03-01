import React from "react";
import { Container } from "reactstrap";
import NewFoodForm from "./NewFoodForm.jsx";

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
    let url;
    if (this.state.method == "POST") {
      url = "http://localhost:3000/foods";
    } else if (this.state.method == "PUT" || "DELETE") {
      url = "http://localhost:3000/foods/" + this.props.data.id;
    }
    // debugger;
    fetch(url, {
      method: this.state.method,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(this.state.formControls) // body data type must match "Content-Type" header
    }).then(response => {
      if (response.ok) {
        // window.open("http://localhost:8080/#/foods", "_self");
      } else {
        //console.log(response);
      }
    });
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
  handleDelete = () => {
    this.state.method = "DELETE";
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
