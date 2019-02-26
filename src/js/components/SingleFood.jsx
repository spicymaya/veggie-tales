import React from "react";
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
import {getSingleFood} from '../../../lib/fetch.js'
import "./SingleFood.css";
import ReactCountryFlag from "react-country-flag";

class SingleFood extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      data: []
    };
    //  console.log("props", props);
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  async componentDidMount() {
    // console.log(this.props.match.params.id)
    const response = await getSingleFood(this.props.match.params.id);
    const data = await response.json();
    this.setState({data})
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="4" key={this.state.data.id}>
            <Card className="cardStyle">
              <CardImg
                top
                width="100%"
                src={this.state.data.image_url}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{this.state.data.name}</CardTitle>
                <CardSubtitle>
                  {" "}
                  <Badge color="warning">{this.state.data.type}</Badge>
                </CardSubtitle>
                <CardText>
                  {this.state.data.region}
                  <ReactCountryFlag code="{this.state.data.region}" svg />
                  {this.state.data.rating}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SingleFood;
