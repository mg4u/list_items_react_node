import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './js/store/index'

import 'bootstrap/dist/css/bootstrap.css';

import Routes from './Components/Routes'
import { Router } from 'react-router-dom'

export class App extends Component {
  //
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Routes />
        </Router>
      </Provider>
    )
  }
}
export default App;
