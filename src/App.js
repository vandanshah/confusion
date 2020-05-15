import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
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
        <Menu dishes = { this.state.dishes } />
      </div>
    );
  }
}

export default App;
