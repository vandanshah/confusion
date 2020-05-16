import React from 'react';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishdetailedComponent from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {Switch, Redirect, Route} from 'react-router-dom';
 
class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS
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
        <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]} 
          promotion = {this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader = {this.state.leaders.filter((leader) => leader.featured)[0]}/>
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
          <Route path = "/contactus" component={Contact} />
          <Redirect to= '/home'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;