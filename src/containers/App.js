import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './../components/Auth/Auth';
import Rmp from './../components/Rmp/Rmp';
import * as actions from '../store/actions/index';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    // If user is not authenticated
    let routes = (
      <Switch>
        <Route path="/auth" component="{Auth}" />
        <Route path="/" exact component="{Rmp}" />
        <Redirect to="/" />
      </Switch>
    );

    // Check if user is authenticated
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component="{Rmp}" />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    isAuthenticated: state.auth.token !== null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
