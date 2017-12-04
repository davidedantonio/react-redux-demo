import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Alert } from 'antd';

import * as actions from '../../store/actions/index';

const FormItem = Form.Item;

class Auth extends Component {

  loginHandler = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName,values.password, false);
      }
    });
  };

  render(){
    const { getFieldDecorator } = this.props.form;

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <Alert
          className="auth-alert"
          message={this.props.error}
          type="error"
          showIcon
        />
      );
    }
    
    return (
      <form onSubmit={this.loginHandler} className="auth-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Username obbligatorio!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Password obbligatoria!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        {errorMessage}
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Accedi
          </Button>
          <p>
            <a className="login-form-forgot" href="">Password smarrita?</a>
          </p>
        </FormItem>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
      authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
      onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Form.create()(Auth) );