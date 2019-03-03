import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";
import styles from "./FoodCard.css";
// import ReactCountryFlag from "react-country-flag";

class FoodCard extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props", this.props);
  }
  render() {
    return (
      <div>
        {this.props.data.map(food => {
          return (
            <Card key={food.id} className={styles.cardStyle}>
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
          );
        })}
      </div>
    );
  }
}
export default FoodCard;
