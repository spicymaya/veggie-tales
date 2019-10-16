import React from "react";
import { withRouter } from "react-router-dom";
import NewFoodForm from "./NewFoodForm.jsx";
import { connect } from "react-redux";
import { createProduct } from "../actions/productActions";
// import api from "../../../lib/api.ts";

const NewFood = props => {
  // constructor(props) {
  //   super(props);
  //   if (typeof props.data == "undefined") {
  //     this.state = {
  //       formControls: {
  //         name: "",
  //         type: "",
  //         region: "",
  //         image_url: "",
  //         rating: 1
  //       },

  //       method: "POST",
  //       error: ""
  //     };
  //   } else {
  //     this.state = {
  //       formControls: {
  //         name: props.data.name,
  //         type: props.data.type,
  //         region: props.data.region,
  //         image_url: props.data.image_url,
  //         rating: props.data.rating
  //       },
  //       method: "PUT",
  //       error: props.data.error
  //     };
  //   }
  //   console.log(this.props);
  // }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(props);
    try {
      if (typeof props.data == "undefined") {
        // const data = await api.createFood(
        //   this.props.formControls
        // );
        console.log("props", props);
        props.dispatch(createProduct());
        // window.location.assign("/foods/" + data.id);
        // this.props.history.push(`/foods/${this.props.data.id}`);
        // props.history.push("/foods/");
      } else {
        // const data = await api.updateFood(
        //   this.props.formControls,
        //   this.props.data.id
        // );
        // window.location.assign("/foods/" + this.props.data.id);
        // console.log(this.props.data);
        props.history.push(`/foods/${this.props.data.id}`);
      }
    } catch (error) {
      // this.setState({
      //   error: error
      // });
    }
  };
  // handleChange = event => {
  //   //experimental syntax
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   const prevFormControls = this.props.formControls;
  //   // console.log("prevfFormControls", prevFormControls);
  //   this.props.updateProduct({
  //     ...prevFormControls,
  //     [name]: value
  //   });
  //   // this.setState({
  //   //   formControls: {
  //   //     ...prevfFormControls,
  //   //     [name]: value
  //   //   }
  //   // });
  // };
  const starUpdate = starNumber => {
    const prevfFormControls = props.formControls;
    // this.setState({
    //   formControls: {
    //     ...prevfFormControls,
    //     rating: starNumber
    //   }
    // });
  };
  return (
    <NewFoodForm
      formControls={props.formControls}
      method={props.method}
      // error={props.error}
      // handleSubmit={handleSubmit}
      // handleChange={handleChange}
      starUpdate={starUpdate}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  if (ownProps.data !== undefined) {
    return {
      // formControls: ownProps.data,
    };
  } else {
    // formControls: state.form.formControls;
  }
};
// const mapDispatchToProps = dispatch => {
//   return {
//     updateProductOnChange: bindActionCreators(updateProduct, dispatch)
//   };
// };
export default connect(
  mapStateToProps
  // mapDispatchToProps
)(withRouter(NewFood));
