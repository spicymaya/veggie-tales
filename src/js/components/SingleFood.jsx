import React from "react";
import { Media, Badge, Button } from "reactstrap";
import { getSingleFood } from "../../../lib/fetch.js";
import "./SingleFood.css";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      data: []
    };
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    // const data = await getSingleFood(this.props.match.params.id);
    getSingleFood(this.props.match.params.id).then(data => {
      // console.log(data);
      this.setState({ data });
    });
    // debugger;
    // const data = await response.json();
  }

  render() {
    return (
      <Media>
        <Media left tag="div">
          <Media src={this.state.data.image_url} alt={this.state.data.name} />
        </Media>
        <Media body>
          <Media heading className="qa-name">
            {this.state.data.name}
          </Media>
          <Badge color="warning">{this.state.data.type}</Badge>
          {this.state.data.region}
        </Media>
        <Button success>Edit</Button>
      </Media>
    );
  }
}

export default SingleFood;
