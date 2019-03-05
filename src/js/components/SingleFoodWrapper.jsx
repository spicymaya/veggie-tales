import React from "react";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewFood from "./NewFood.jsx";
import SingleFood from "./SingleFood.jsx";
import api from "../../../lib/api.js";
import "./SingleFoodWrapper.scss";

class SingleFoodWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: false
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    // const data = await getSingleFood(this.props.match.params.id);
    api.getSingleFood(this.props.match.params.id).then(data => {
      // console.log(data);
      this.setState({
        data
      });
    });
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleDelete = () => {
    api.deleteFood(this.props.match.params.id);
  };

  render() {
    // console.log(this.state);
    return (
      <Router>
        <div>
          <Route
            path={`/foods/${this.props.match.params.id}/edit`}
            component={() => <NewFood data={this.state.data} />}
          />
          <Route
            exact
            path={`/foods/${this.props.match.params.id}`}
            render={() => (
              <div>
                <Button onClick={this.handleDelete} color="danger">
                  Delete
                </Button>
                <Link to={`/foods/${this.props.match.params.id}/edit`}>
                  <Button>Edit</Button>
                </Link>
                <SingleFood data={this.state.data} />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default SingleFoodWrapper;
