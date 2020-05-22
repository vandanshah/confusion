import React from 'react';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
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
    
    const DishWithId = ({match}) => {
      return(
        <DishdetailedComponent dish = {this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );  
    }
    return (
      <div>
        <Header />
        {/*<Menu dishes = { this.state.dishes } onClick = {(dishID) => this.onDishSelect(dishID)} />
        <DishdetailedComponent dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path= "/menu" component = {() => <Menu dishes={this.state.dishes} />} />
          <Route path = "/menu/:dishId" component = {DishWithId} /> 
          <Route path = "/contactus" component={Contact} />
          <Route path = "/aboutus" component = {() => <About leaders = {this.state.leaders} />} />
          <Redirect to= '/home'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;