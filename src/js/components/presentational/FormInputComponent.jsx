import React from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

class FormInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formControls: {
        name: {
          value: ''
        },
        type: {
          value: ''
        },
        rating: {
          value: ''
        }
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit(event) {
    let url = 'http://localhost:3000/foods'
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    event.preventDefault();
    // console.log(this.state.formControls);
  }
  
  changeHandler = event => { //experimental syntax
    const name = event.target.name;
    const value = event.target.value;
    console.log('name',event.target.name);
    console.log('value',event.target.value);
    
    this.setState({
      formControls: {
         [name]: value
      }   
    });
  }

  render() {
    // console.log(this.state.formControls);
    return (
      <Form id="food-form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="foodName">Name</Label>
          <Input type="name" name="name" id="foodName" 
            placeholder="Food Name" 
            value={this.state.formControls.name.value}
            onChange={this.changeHandler}/>
        </FormGroup>

        <FormGroup>
          <Label for="foodType">Select</Label>
          <Input type="select" 
            name="foodType" 
            id="foodType"
            value={this.state.formControls.type.value}
            onChange={this.changeHandler}>
            <option>Fruit</option>
            <option>Vegetable</option>
          </Input>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Food Rating</legend>
          
          <FormGroup check>
            <Label check>
            <Input type="radio" name="rating"
              value={this.state.formControls.rating.value}
              onChange={this.changeHandler} />{' '}
            1
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input type="radio" name="rating" 
              value={this.state.formControls.rating.value}
              onChange={this.changeHandler}/>{' '}
          2
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
            <Input type="radio" name="rating"
              value={this.state.formControls.rating.value}
              onChange={this.changeHandler} />{' '}
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