import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListDriverPage from './container/ListDriverPage';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-intro">
            <ListDriverPage />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
