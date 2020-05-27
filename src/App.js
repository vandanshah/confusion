import React from 'react';
import { Component } from 'react';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
/*import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import './App.css';*/

const store = ConfigureStore();
class App extends Component {

 /* constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }*/
  render(){
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
