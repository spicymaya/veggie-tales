import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
  Col
} from "reactstrap";
import styles from "./FoodCard.scss";
// import ReactCountryFlag from "react-country-flag";

class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props", this.props);
  }
  render() {
    return (
      <Col sm="4">
        {this.props.data.map(food => {
          return (
            <a
              key={food.id}
              className={`${styles.cardStyle}`}
              href={`/foods/${food.id}`}
            >
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={food.image_url}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="qa-name">{food.name}</CardTitle>
                  <CardSubtitle>
                    {" "}
                    <Badge color="warning">{food.type}</Badge>
                  </CardSubtitle>
                  <CardText>
                    {food.region}
                    {food.rating}
                  </CardText>
                </CardBody>
              </Card>
            </a>
          );
        })}
      </Col>
    );
  }
}
export default FoodCard;
