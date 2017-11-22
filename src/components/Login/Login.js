import React, { Component } from 'react';
import Card , { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="background" />
        <div className="background2" />
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6} md={5} lg={3} xl={3}>
          <Card className="loginForm">
            <hgroup>
              <h1>Accesso</h1>
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
            <CardActions>
              <Button raised color="primary" fullWidth>Accedi</Button>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;