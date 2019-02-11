import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

class FormInput extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    let url = 'http://localhost:3000/foods'
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    event.preventDefault();
  }
  render() {
    return (
      <Form id="food-form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="foodName">Name</Label>
          <Input type="name" name="name" id="foodName" placeholder="food name" />
        </FormGroup>

        <FormGroup>
          <Label for="foodType">Select</Label>
          <Input type="select" name="select" id="foodType" value={this.state.value}>
            <option>Fruit</option>
            <option>Vegetable</option>
          </Input>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Food Rating</legend>
          
          <FormGroup check>
            <Label check>
            <Input type="radio" name="radio1" />{' '}
            1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input type="radio" name="radio1" />{' '}
          2
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input type="radio" name="radio1" />{' '}
          3
            </Label>
          </FormGroup>
          
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
   
  }
}

export default FormInput;