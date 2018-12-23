import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import store from './store';
import Header from './common/header/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact render={()=>(<div>Home</div>)}/>
              <Route path='/detail' exact render={()=>(<div>Detail</div>)}/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
