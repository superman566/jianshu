import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import store from './store';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={ Home }/>
              <Route path='/detail' exact component={ Detail }/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
