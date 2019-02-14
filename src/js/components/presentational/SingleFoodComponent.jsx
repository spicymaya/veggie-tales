import React from 'react';
import styles from './SingleFoodComponent.css'
import {Container, Row, Col} from 'reactstrap'

class SingleFoodComponent extends React.Component {
	// someFn() {
	//     on click add +1 rating
	//     const rating = [current rating]+1;
	//     this.props.ratingUpdatedFromParent(rating);
	// }
	render(){
		return (
      <Container>
         <Row>
          <Col sm={{ size: '12', offset: 1 }}>
           <ul>
        
              {
                this.props.foodListFromParent.map(food => {
                    return (
                      <li className={styles.listStyle} key={food.id}>
                        <h1>{food.name}</h1>
                        <span>{food.rating}</span>
                        <span>{food.type}</span>
            
                      </li>
                    )
                    
                })
                
              }  
            </ul>
          </Col>
        </Row>
      </Container> 

		)
	}
}

export default SingleFoodComponent;