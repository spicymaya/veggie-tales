import React from "react";
import PropTypes from "prop-types";
import styles from "./OhMyStars.scss";

class OhMyStars extends React.Component {
  static propTypes = {
    number: PropTypes.number,
    onStarClick: PropTypes.func,
    isEditable: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      hovered: null
    };
    // console.log("props", props);
  }
  onStarClick = starNumber => {
    this.props.onStarClick(starNumber);
  };

  onMouseOut = () => {
    this.setState({
      hovered: null
    });
  };

  onMouseOver = hoveredStarNumber => {
    this.setState({
      hovered: hoveredStarNumber
    });
  };
  createStars = () => {
    let stars = [];
    for (let i = 0; i < 10; i++) {
      const star = (
        <span
          key={i}
          className={
            this.props.number > i || this.state.hovered + 1 > i
              ? "fas fa-star qa-star qa-solid-star"
              : "far fa-star qa-star qa-regular-star"
          }
          onMouseOver={() => {
            if (this.props.isEditable) {
              this.onMouseOver(i);
            }
          }}
          onMouseOut={() => {
            if (this.props.isEditable) {
              this.onMouseOut();
            }
          }}
          onClick={() => {
            if (this.props.isEditable) {
              this.props.onStarClick(i + 1);
            }
          }}
        />
      );
      stars.push(star);
    }
    return stars;
  };
  render() {
    return <div className={styles.starRating}>{this.createStars()}</div>;
  }
}
export default OhMyStars;
