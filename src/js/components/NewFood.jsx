import React from "react";
import NewFoodForm from "./NewFoodForm.jsx";

class NewFood extends React.Component {
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
  handleSubmit = event => {
    event.preventDefault();
    let url = "http://localhost:3000/foods";
    // debugger;
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin",
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(this.state.formControls) // body data type must match "Content-Type" header
    }).then(response => {
      if (response.ok) {
        // window.open("http://localhost:8080/#/foods", "_self");
      } else {
        console.log(response);
      }
    });
  };

  handleChange = event => {
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
  // handleChange = debounce(event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   const prevfFormCnotrols = this.state.formControls;

  //   this.setState({
  //     formControls: {
  //       ...prevfFormCnotrols,
  //       [name]: value
  //     }
  //   });
  // }, 1000);
  // debounce = (a, b, c) => {
  //   var d, e;
  //   return function() {
  //     function h() {
  //       (d = null), c || (e = a.apply(f, g));
  //     }
  //     var f = this,
  //       g = arguments;
  //     return (
  //       clearTimeout(d),
  //       (d = setTimeout(h, b)),
  //       c && !d && (e = a.apply(f, g)),
  //       e
  //     );
  //   };
  // };

  render() {
    return (
      <NewFoodForm
        formControls={this.state.formControls}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default NewFood;
