import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './Component/NavBar';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
