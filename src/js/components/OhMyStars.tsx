import React from "react";
import styles from "./OhMyStars.scss";

interface OhMyStarsProps {
  number: number;
  onStarClick: (starNumber: number) => void;
  isEditable: boolean;
}
interface OhMyStarsState {
  hovered?: number;
}

class OhMyStars extends React.Component<OhMyStarsProps, OhMyStarsState> {
  constructor(props: OhMyStarsProps) {
    super(props);
    this.state = {
      hovered: null
    };
    // console.log("props", props);
  }
  onStarClick = (starNumber: number): void => {
    this.props.onStarClick(starNumber);
  };

  onMouseOut = (): void => {
    this.setState({
      hovered: null
    });
  };

  onMouseOver = (hoveredStarNumber: number): void => {
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
