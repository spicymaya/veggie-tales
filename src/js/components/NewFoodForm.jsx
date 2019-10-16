import React from "react";
import {
  Container,
  Alert,
  Form,
  Button,
  FormGroup
  // Label,
  // Input
} from "reactstrap";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { createProduct, updateProduct } from "../actions/productActions";
import OhMyStars from "./OhMyStars.tsx";

const inputField = ({ input, type, placeholder, id }) => {
  return <input {...input} placeholder={placeholder} type={type} id={id} />;
};
const starUpdate = starNumber => {
  const prevfFormControls = props.formControls;
  // this.setState({
  //   formControls: {
  //     ...prevfFormControls,
  //     rating: starNumber
  //   }
  // });
};
let NewFoodForm = ({
  hasError,
  handleSubmit,
  reset,
  pristine,
  initialValues
}) => {
  // debugger;

  return (
    // <Container>
    //   {hasError && (
    //     <Alert color='danger'>
    //       <div>{this.props.error}</div>
    //     </Alert>
    //   )}

    //   <Form id='food-form' onSubmit={this.props.handleSubmit}>
    //     <FormGroup>
    //       <Label for='foodName'>Name</Label>
    //       <Input
    //         className='qa-name
    //           2'
    //         type='text'
    //         name='name'
    //         id='name'
    //         placeholder='Food Name'
    //         value={this.props.formControls.name}
    //         onChange={this.props.handleChange}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for='region'>Region</Label>
    //       <Input
    //         className='qa-region'
    //         type='text'
    //         name='region'
    //         id='region'
    //         placeholder='Food Region'
    //         value={this.props.formControls.region}
    //         onChange={this.props.handleChange}
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for='image_url'>Image Url</Label>
    //       <Input
    //         type='text'
    //         name='image_url'
    //         id='image_url'
    //         placeholder='Image Url'
    //         value={this.props.formControls.image_url}
    //         onChange={this.props.handleChange}
    //       />
    //     </FormGroup>

    //     <FormGroup>
    //       <Label for='type'>Select</Label>
    //       <Input
    //         className='qa-type'
    //         type='select'
    //         name='type'
    //         id='type'
    //         value={this.props.formControls.type}
    //         onChange={this.props.handleChange}
    //       >
    //         <option>Select Type</option>
    //         <option value='fruit'>Fruit</option>
    //         <option value='vegetable'>Vegetable</option>
    //       </Input>
    //     </FormGroup>

    //     <OhMyStars
    //       number={this.props.formControls.rating}
    //       onStarClick={this.props.starUpdate}
    //       isEditable={true}
    //     />

    //     <Button color='primary'>Submit</Button>
    //   </Form>
    // </Container>
    <Container>
      {hasError && (
        <Alert color='danger'>
          <div>{error}</div>
        </Alert>
      )}
      <Form id='food-form' onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor='name'>Name</label>
          <Field
            className='qa-name'
            name='name'
            component={inputField}
            type='text'
            placeholder='Food name'
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor='region'>Region</label>
          <Field name='region' component='input' type='text' />
        </FormGroup>
        <FormGroup>
          <label htmlFor='image_url'>Image Url</label>
          <Field name='image_url' component='input' type='text' />
        </FormGroup>
        <FormGroup>
          <label htmlFor='type'>Type</label>
          <Field name='type' component='select'>
            <option>Select Type</option>
            <option value='fruit'>Fruit</option>
            <option value='vegetable'>Vegetable</option>
          </Field>
        </FormGroup>

        {/* <OhMyStars
            number={formControls.rating}
            onStarClick={starUpdate}
            isEditable={true}
          /> */}

        <Button color='primary'>Submit</Button>
        <Button color='danger' onClick={() => reset("NewFoodForm")}>
          Reset
        </Button>
      </Form>
    </Container>
  );
};

function onSubmit(values, dispatch, props) {
  console.log("props", props);
  if (props.initialized) {
    props.history.push(`/foods/${props.values.id}`);
    return dispatch(updateProduct(values, values.id));
  } else {
    props.history.push("/foods/");
    return dispatch(createProduct(values));
  }
}
// const selector = formValueSelector("NewFoodForm");
export default reduxForm({
  // a unique name for the form
  form: "NewFoodForm",
  onSubmit
})(NewFoodForm);
