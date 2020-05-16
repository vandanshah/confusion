import React from 'react';
import { Component } from 'react';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
/*import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';*/

class App extends Component {

 /* constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }*/
  render(){
    return (
      <BrowserRouter>
        <div>
        {/*<Navbar dark color = "primary">
          <div className="container">
            <NavbarBrand href="/">Restaurant ConFusion</NavbarBrand>
          </div>
        </Navbar>
    <Menu dishes = { this.state.dishes } />*/}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
