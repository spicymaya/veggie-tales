import React from "react";
import { Media, Badge } from "reactstrap";
import "./SingleFoodWrapper.scss";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <Media>
        <Media left tag="div">
          <Media
            tag="img"
            object
            src={this.props.data.image_url}
            alt={this.props.data.name}
          />
        </Media>
        <Media body>
          <Media heading className="qa-name">
            {this.props.data.name}
          </Media>
          <Badge color="warning">{this.props.data.type}</Badge>
          {this.props.data.region}
        </Media>
      </Media>
    );
  }
}

export default SingleFood;
