import React from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

class NewFoodForm extends React.Component {
  constructor(props) {
    super(props);
    // do not have to bind because of https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  render() {
    // debugger;

    return (
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
          <Label for="image_url">Image Url</Label>
          <Input
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Image Url"
            value={this.props.formControls.image_url}
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
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default NewFoodForm;
