import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Frontend } from './components/Frontend/Frontend';
import { Backend } from './components/Backend/Backend';
import './custom.css'

export default class App extends Component {
    static displayName = App.name;
  render() {
      return (
          <div>
              {/*�w�]����*/}
              <Route exact path='/'>
                  <Redirect to="/frontend"></Redirect>
              </Route>
              <Route path='/frontend*' component={Frontend} />
              <Route path='/backend' component={Backend} />
          </div>
      );
  }
}
