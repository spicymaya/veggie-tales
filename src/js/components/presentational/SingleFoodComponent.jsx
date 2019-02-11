import React from 'react';

class SingleFoodComponent extends React.Component {
    // someFn() {
    //     on click add +1 rating
    //     const rating = [current rating]+1;
    //     this.props.ratingUpdatedFromParent(rating);
    // }
    render(){
        const foods = this.props.foodListFromParent.map(item => item);
        return (
            <ul>
            {
                foods.map(food => {
                      return (
                        <li key={food.id}>
                            <h1>{food.name}</h1>
                            <span>{food.rating}</span>
                            <span>{food.type}</span>
    
                        </li>
                      )
                      
                })
                
            }   
            </ul>
        )
    }
}

export default SingleFoodComponent;