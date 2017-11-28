import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './../components/Auth/Auth';
importn
import './App.css';

class App extends Component {
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
      {routes}
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.props.token !== null
  }
}

export default App;
