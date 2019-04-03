import React from "react";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import NewFood from "./NewFood.jsx";
import SingleFood from "./SingleFood.jsx";
import api from "../../../lib/api.js";
import styles from "./SingleFoodWrapper.scss";

class SingleFoodWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modal: false,
      toFoodList: false
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params.id)
    // const data = await getSingleFood(this.props.match.params.id);
    api.getSingleFood(this.props.match.params.id).then(data => {
      // console.log(data);
      this.setState({
        data
      });
    });
  }
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  handleDelete = () => {
    api.deleteFood(this.props.match.params.id);
    this.props.history.push("/foods");
  };

  render() {
    // console.log(this.state);

    return (
      <Router>
        <div className={styles.sfWrapper}>
          <Route
            path={`/foods/${this.props.match.params.id}/edit`}
            component={() => <NewFood data={this.state.data} />}
          />
          <Route
            exact
            path={`/foods/${this.props.match.params.id}`}
            render={() => (
              <div>
                <div className={styles.actionBtns}>
                  <Button
                    className={styles.actionBtn}
                    onClick={this.toggle}
                    color="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                  <Link to={`/foods/${this.props.match.params.id}/edit`}>
                    <Button size="sm" className={styles.actionBtn}>
                      Edit
                    </Button>
                  </Link>
                </div>
                <SingleFood data={this.state.data} />
                {/* Modal for delete confirmation */}
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>
                    Are you sure you'd like to delete this item?{" "}
                  </ModalHeader>
                  <ModalBody>
                    <img
                      className={styles.modalImg}
                      src="https://media3.giphy.com/media/XBu2hy3y2X9Bu/giphy.gif"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.handleDelete}>
                      Yes
                    </Button>{" "}
                    <Button color="secondary" onClick={this.toggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(SingleFoodWrapper);
