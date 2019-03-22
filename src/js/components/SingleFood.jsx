import React from "react";
import { Media, Badge } from "reactstrap";
import OhMyStars from "./OhMyStars.jsx";
import styles from "./SingleFood.scss";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Media className={styles.sf}>
        <Media className={styles.sfImg} left tag="div">
          <Media
            tag="img"
            object
            src={this.props.data.image_url}
            alt={this.props.data.name}
          />
        </Media>
        <Media className={styles.sfText} body>
          <Media heading className="qa-name">
            {this.props.data.name}
          </Media>

          <p>{this.props.data.region}</p>
          <Badge className={styles.sfBadge} color="warning">
            {this.props.data.type}
          </Badge>
          <OhMyStars
            number={this.props.data.rating}
            onStarClick={this.starUpdate}
            isEditable={false}
          />
        </Media>
      </Media>
    );
  }
}

export default SingleFood;
