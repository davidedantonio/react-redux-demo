import React, { Component } from 'react';
import Card , { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import './Login.css';

class Login extends Component {
  state = {
    showMammt: false
  }

  clickButtonHandler = () => {
    let show = this.state.showMammt;
    this.setState({ showMammt: !show });
  }

  render(){
    let message = null;

    if (this.state.showMammt === true) {
      message = (
        <p>MAMMT</p>
      );
    }
    
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
              {message}
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
              <Button raised color="primary" style={{ width: '100%' }} onClick={this.clickButtonHandler}>Accedi</Button>
            </CardActions>
          </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;