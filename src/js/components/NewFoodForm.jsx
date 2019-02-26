import React from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

class NewFoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        name: "",
        type: "",
        region: "",
        rating: "1"
      }
    };
    // do not have to bind because of https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit = async event => {
    let url = "http://localhost:3000/foods";
    // debugger;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      // body: this.state.formControls
      body: JSON.stringify(this.state.formControls) // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      // console.log(response);
    }

    event.preventDefault();
  };

  changeHandler = event => {
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
    return (
      <div>
        <Form id="food-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="foodName">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Food Name"
              value={this.state.formControls.name}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="region">Region</Label>
            <Input
              type="text"
              name="region"
              id="region"
              placeholder="Food Region"
              value={this.state.formControls.region}
              onChange={this.changeHandler}
            />
          </FormGroup>

          <FormGroup>
            <Label for="type">Select</Label>
            <Input
              type="select"
              name="type"
              id="type"
              value={this.state.formControls.type}
              onChange={this.changeHandler}
            >
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
            </Input>
          </FormGroup>

          <FormGroup tag="fieldset">
            <legend>Food Rating</legend>

            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="rating"
                  value="1"
                  onChange={this.changeHandler}
                />{" "}
                1
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={this.changeHandler}
                />{" "}
                2
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="rating"
                  value="3"
                  onChange={this.changeHandler}
                />{" "}
                3
              </Label>
            </FormGroup>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default NewFoodForm;
