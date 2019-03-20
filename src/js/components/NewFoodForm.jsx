import React from "react";
import {
  Container,
  Alert,
  Form,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import OhMyStars from "./OhMyStars.jsx";
class NewFoodForm extends React.Component {
  constructor(props) {
    super(props);
    // do not have to bind because of https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    // debugger;
    const hasError = this.props.error;
    return (
      <Container>
        {hasError && (
          <Alert color="danger">
            <div>{this.props.error}</div>
          </Alert>
        )}

        <Form id="food-form" onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <Label for="foodName">Name</Label>
            <Input
              className="qa-name
              2"
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
              className="qa-region"
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
              className="qa-type"
              type="select"
              name="type"
              id="type"
              value={this.props.formControls.type}
              onChange={this.props.handleChange}
            >
              <option>Select Type</option>
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
            </Input>
          </FormGroup>
          <OhMyStars
            number={this.props.rating}
            onStarClick={this.props.starUpdate}
            isEditable={true}
          />
          <Button color="primary">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default NewFoodForm;
