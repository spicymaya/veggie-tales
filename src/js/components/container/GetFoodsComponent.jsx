import React from "react";
import ReactDOM from "react-dom";
import SingleFood from '../presentational/SingleFoodComponent.jsx';

class GetFoods extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    async componentDidMount() {
        let url = 'http://localhost:3000/foods';
        // fetch(url, {
        //     method: "GET", // *GET, POST, PUT, DELETE, etc.
        // })
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        })
        //debugger
        // .then(response => response.json())
        // .then(data => this.setState({ data }));  

        const data = await response.json()
        this.setState({data});
    }
   
    render() {
        const foodList = this.state.data;
        //console.log(foodList);
        return (
            <SingleFood foodListFromParent = {foodList} className="food-list"></SingleFood>
        )
    }
}
export default GetFoods;