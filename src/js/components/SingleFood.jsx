import React from "react";
import { Media, Button, Badge } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewFood from "./NewFood.jsx";
import { getSingleFood } from "../../../lib/api.js";
import { deleteFood } from "../../../lib/api.js";
import "./SingleFood.scss";

class SingleFood extends React.Component {
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
    getSingleFood(this.props.match.params.id).then(data => {
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
    deleteFood(this.props.match.params.id);
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
              <Media>
                <Button onClick={this.handleDelete} color="danger">
                  Delete
                </Button>
                <Link to={`/foods/${this.props.match.params.id}/edit`}>
                  <Button>Edit</Button>
                </Link>
                <Media left tag="div">
                  <Media
                    tag="img"
                    object
                    src={this.state.data.image_url}
                    alt={this.state.data.name}
                  />
                </Media>
                <Media body>
                  <Media heading className="qa-name">
                    {this.state.data.name}
                  </Media>
                  <Badge color="warning">{this.state.data.type}</Badge>
                  {this.state.data.region}
                </Media>
              </Media>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default SingleFood;
