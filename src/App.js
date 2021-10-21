import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/MenuComponent';
import MenuComponent from './components/MenuComponent';
import { DISHES } from './shared/dishes';import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import Main from "./components/MainComponent";
import "./App.css";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <MenuComponent dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;
