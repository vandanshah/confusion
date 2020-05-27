import React from 'react';
import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishdetailedComponent from './DishdetailComponent';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
 
const mapStateToProps = (state) => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions 
  };
}
class Main extends Component {

  constructor(props){
    super(props);
  }
  /*onDishSelect(dishId){
    //console.log(dish.name);
    this.setState({selectedDish:dishId});
}*/



  render(){
    const HomePage = () => {
      return (
        <Home dish = {this.props.dishes.filter((dish) => dish.featured)[0]} 
          promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}
          leader = {this.props.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }
    
    const DishWithId = ({match}) => {
      return(
        <DishdetailedComponent dish = {this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );  
    }
    return (
      <div>
        <Header />
        {/*<Menu dishes = { this.props.dishes } onClick = {(dishID) => this.onDishSelect(dishID)} />
        <DishdetailedComponent dish = {this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />*/}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path= "/menu" component = {() => <Menu dishes={this.props.dishes} />} />
          <Route path = "/menu/:dishId" component = {DishWithId} /> 
          <Route path = "/contactus" component={Contact} />
          <Route path = "/aboutus" component = {() => <About leaders = {this.props.leaders} />} />
          <Redirect to= '/home'/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));