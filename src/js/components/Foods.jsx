import React from "react";
import { Link, Route } from "react-router-dom";
import { getFoods } from "../../../lib/fetch.js";
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
import styles from "./Foods.css";
// import ReactCountryFlag from "react-country-flag";
import SingleFood from "./SingleFood.jsx";

class Foods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const data = await getFoods();
    // const data = await response.json();
    this.setState({ data });
  }

  render() {
    //const foodList = this.state.data;
    // console.log('props', this.props)
    return (
      <Container fluid>
        {/* <Route path={`/foods/:id`} render={(props) => <SingleFood{...props}/>} /> */}
        <Route path={`/foods/:id`} component={SingleFood} />
        <Route
          exact
          path={`/foods/`}
          render={props => (
            <Row>
              {this.state.data.map(food => {
                return (
                  <Col sm="4" key={food.id}>
                    <Card className={styles.cardStyle}>
                      <Link to={`/foods/${food.id}`} tag="a">
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
                            {/* <ReactCountryFlag code="{food.region}" svg /> */}
                            {food.rating}
                          </CardText>
                        </CardBody>
                      </Link>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        />
      </Container>
    );
  }
}
export default Foods;
