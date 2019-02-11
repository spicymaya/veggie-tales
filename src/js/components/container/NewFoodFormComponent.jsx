import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'reactstrap';
import FormInput from "../presentational/FormInputComponent.jsx";

class NewFoodForm extends React.Component {
    constructor() {
      super();
      this.state = {
        title: ""
      };
    }
    render() {
      return (
        <FormInput/>
      );
    }
  }
  export default NewFoodForm;