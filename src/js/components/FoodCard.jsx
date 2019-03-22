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
import Masonry from "react-masonry-component";
import styles from "./FoodCard.scss";
// import ReactCountryFlag from "react-country-flag";

class FoodCard extends React.Component {
  constructor(props) {
    super(props);
  }
  handleImagesLoaded = () => {
    // console.log("loaded");
  };
  render() {
    const masonryOptions = {
      transitionDuration: "0.2s",
      itemSelector: ".cardMasonry",
      columnWidth: ".cardMasonry",
      // do not use .grid-sizer in layout

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
            <a
              className={`${styles.cardStyle} cardMasonry`}
              key={food.id}
              href={`/foods/${food.id}`}
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
                    <div>
                      <Badge color="success">{food.rating}</Badge>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </a>
          );
        })}
      </Masonry>
    );
  }
}
export default FoodCard;
