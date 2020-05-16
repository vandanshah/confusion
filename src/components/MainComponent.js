import React from 'react';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishdetailedComponent from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import {Switch, Redirect, Route} from 'react-router-dom';
 
class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
//     selectedDish: null
    };
  }
  /*onDishSelect(dishId){
    //console.log(dish.name);
    this.setState({selectedDish:dishId});
}*/



  render(){
    const HomePage = () => {
      return (
        <Home />
      );
    } 
    return (
      <div>
        <Header />
        {/*<Menu dishes = { this.state.dishes } onClick = {(dishID) => this.onDishSelect(dishID)} />
        <DishdetailedComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path= "/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to= '/home'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;