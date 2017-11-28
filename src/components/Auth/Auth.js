import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card , { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import * as actions from '../../store/actions/index';

import './Auth.css';

class Auth extends Component {
  state = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/dashboard'
  }

  render(){
    return (
      <div>
        <div className="background" />
        <div className="background2" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={5} lg={3} xl={3}>
          <Card className="loginForm">
            <hgroup>
              <Typography type="display1" gutterBottom style={{ color: '#fff  ' }}>
                Accesso
              </Typography>
            </hgroup>
            <CardContent>
            <TextField
              type="text"
              id="username"
              label="Username"
              margin="normal"
              fullWidth
              />
            <TextField
              type="text"
              id="password"
              label="Password"
              margin="normal"
              fullWidth
              />
            </CardContent>
            <Divider />
            <CardActions>
              <Button raised color="primary" style={{ width: '100%' }}>Accedi</Button>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      buildingBurger: state.burgerBuilder.building,
      authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
      onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );