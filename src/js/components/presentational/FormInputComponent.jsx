import React from 'react';
import ErrorBoundary from '../container/ErrorBoundaryComponent.jsx'
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

class FormInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formControls: {
        name: '',
        foodType: '',
        rating: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  handleSubmit(data) {
    let url = 'http://localhost:3000/foods'
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
     
      body: data
      // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    event.preventDefault();
    // console.log(this.state.formControls);
  }
  
  changeHandler = event => { //experimental syntax
    const name = event.target.name;
    const value = event.target.value;
    const prevfFormCnotrols = this.state.formControls;
    this.setState({
      formControls: {
        ...prevfFormCnotrols, 
        [name] : value
      }   
    });
    console.log(this.state.formControls);
  }

  render() {
    // console.log(this.state.formControls);
    return (
      <ErrorBoundary>
        <Form id="food-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="foodName">Name</Label>
            <Input type="text" name="name" id="name" 
              placeholder="Food Name" 
              value={this.state.formControls.name}
              onChange={this.changeHandler}/>
          </FormGroup>

          <FormGroup>
            <Label for="foodType">Select</Label>
            <Input type="select" 
              name="foodType" 
              id="type"
              value={this.state.formControls.foodType}
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
                value='1'
                onChange={this.changeHandler} />{' '}
              1
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
              <Input type="radio" name="rating" 
                value='2'
                onChange={this.changeHandler}/>{' '}
            2
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
              <Input type="radio" name="rating"
                value='3'
                onChange={this.changeHandler} />{' '}
            3
              </Label>
            </FormGroup>
            
          </FormGroup>
        <Button>Submit</Button>
      </Form>
      </ErrorBoundary>
      
    )
   
  }
}

export default FormInput;