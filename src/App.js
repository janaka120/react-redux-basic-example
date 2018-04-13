import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const defaultState = {
  welcome : 'Hi',
  otherState: 'some staff'
};

// Reducer - actually its a function
const greeting = (state = defaultState, action) => {
  switch(action.type) {
    case 'GREET_ME':
      // Need to destructuring previous state object and modify it.
      // Because redux always return new state object.
      return { ...state, welcome : 'Hello Janaka'};
    case 'GREET_WORLD':
      return { ...state, welcome : 'Hello World' };
    default:
      return state;  
  }
};

// Store - create a store using greeting Reducer
const store = createStore(greeting);

// before dispatch action
console.log(store.getState());

// Action
store.dispatch({
  type : 'GREET_ME'
});

// after dispatch action
console.log(store.getState());