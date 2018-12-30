import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import store from './store';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable';
import Write from './pages/write';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={ Home }/>
              <Route path='/detail/:id' exact component={ Detail }/>
              <Route path='/login' exact component={ Login }/>
              <Route path='/write' exact component={ Write }/>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
