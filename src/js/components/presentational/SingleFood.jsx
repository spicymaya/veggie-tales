import React from "react";
import "./SingleFood.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge
} from "reactstrap";
import ReactCountryFlag from "react-country-flag";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
    // console.log("props", props);
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  componentDidMount() {
    const forGetFoods = "this is from SingleFood to GetFoods";
    this.props.callBackFromGetFoods(forGetFoods);
  }

  render() {
    const classes = "tooltip-inner";
    // console.log(this.props);
    // console.log(styles);
    return (
      <Container fluid>
        <Row>
          {this.props.foodListFromParent.map(food => {
            return (
              <Col sm="4" key={food.id}>
                <Card className="cardStyle">
                  <CardImg
                    top
                    width="100%"
                    src={food.image_url}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{food.name}</CardTitle>
                    <CardSubtitle>
                      {" "}
                      <Badge color="warning">{food.type}</Badge>
                    </CardSubtitle>
                    <CardText>
                      {food.region}
                      <ReactCountryFlag code="{food.region}" svg />
                      {food.rating}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default SingleFood;
