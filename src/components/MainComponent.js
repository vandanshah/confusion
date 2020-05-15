import React from 'react';
import { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishdetailedComponent from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    //console.log(dish.name);
    this.setState({selectedDish:dishId});
}



  render(){
    console.log(this.state.dishes);
    return (
      <div>
        <Navbar dark color = "primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant ConFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = { this.state.dishes } onClick = {(dishID) => this.onDishSelect(dishID)} />
        <DishdetailedComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;