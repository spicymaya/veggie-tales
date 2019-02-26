import React from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

class NewFoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 350
      }
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    // do not have to bind because of https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener("click", this.closeNav);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("click", this.closeNav);
  // }

  // openNav() {
  //   const style = { width: 350 };
  //   this.setState({ style });
  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  //   document.addEventListener("click", this.closeNav);
  // }

  // closeNav() {
  //   document.removeEventListener("click", this.closeNav);
  //   const style = { width: 0 };
  //   this.setState({ style });
  //   document.body.style.backgroundColor = "#F3F3F3";
  // }
  render() {
    // debugger;
    return (
      <div>
        <Form id="food-form" onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <Label for="foodName">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Food Name"
              value={this.props.formControls.name}
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="region">Region</Label>
            <Input
              type="text"
              name="region"
              id="region"
              placeholder="Food Region"
              value={this.props.formControls.region}
              onChange={this.props.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="type">Select</Label>
            <Input
              type="select"
              name="type"
              id="type"
              value={this.props.formControls.type}
              onChange={this.props.handleChange}
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
                  onChange={this.props.handleChange}
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
                  onChange={this.props.handleChange}
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
                  onChange={this.props.handleChange}
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
