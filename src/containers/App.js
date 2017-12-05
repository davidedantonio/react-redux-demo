import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './../components/Auth/Auth';
import Rmp from './../components/Rmp/Rmp';
import Dashboard from './../components/Dashboard/Dashboard';
import User from './../components/User/User';
import Global from './../components/Global/Global';
import Groups from './../components/Groups/Groups';
import Profiles from './../components/Profiles/Profiles';
import Functions from './../components/Functions/Functions';
import TtSla from './../components/TtSla/TtSla';
import * as actions from '../store/actions/index';
import enUS from 'antd/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    // If user is not authenticated
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );

    // Check if user is authenticated    
    if (this.props.isAuthenticated === true) {
      routes = (
        <LocaleProvider locale={enUS}>
          <Rmp>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/global" exact component={Global} />
              <Route path="/users" exact component={User} />
              <Route path="/groups" exact component={Groups} />
              <Route path="/profiles" exact component={Profiles} />
              <Route path="/functions" exact component={Functions} />
              <Route path="/tts-la" exact component={TtSla} />
              <Redirect to="/dashboard" />
            </Switch>
          </Rmp>
        </LocaleProvider>
      );
    }

    return (
      <div className="main-container">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
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
