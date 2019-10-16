import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-component";
import OhMyStars from "./OhMyStars.tsx";
import styles from "./FoodCard.scss";
// import ReactCountryFlag from "react-country-flag";

class FoodCard extends React.Component {
  handleImagesLoaded = () => {
    // console.log("loaded");
  };
  render() {
    const masonryOptions = {
      transitionDuration: "0.2s",
      itemSelector: ".cardMasonry",
      columnWidth: ".cardMasonry",
      percentPosition: true
    };

    const imagesLoadedOptions = { background: ".cardStyle" };

    return (
      <Masonry
        className={"my-gallery-class"} // default ''
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
        onImagesLoaded={this.handleImagesLoaded}
      >
        {this.props.data.map(food => {
          return (
            <Link
              className={`${styles.cardStyle} cardMasonry`}
              key={food.id}
              to={`/foods/${food.id}`}
            >
              <Card>
                {food.image_url ? (
                  <CardImg
                    top
                    width="100%"
                    src={food.image_url}
                    alt="Card image cap"
                  />
                ) : (
                    ""
                  )}

                <CardBody>
                  <CardTitle className="qa-name">{food.name}</CardTitle>
                  <CardSubtitle>
                    {" "}
                    <Badge color="warning">{food.type}</Badge>
                  </CardSubtitle>
                  <CardText tag="div">
                    <p className={styles.region}>{food.region}</p>
                    <div className={styles.stars}>
                      <OhMyStars number={food.rating} isEditable={false} />
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          );
        })}
      </Masonry>
    );
  }
}
export default FoodCard;
