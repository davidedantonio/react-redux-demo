import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Rmp extends Component {
  render() {
    if (!this.props.isAuthenticated) {
        this.props.onSetAuthRedirectPath('/checkout');
        this.props.history.push('/auth');
    }
    return (
      <p>MAMMT A PECR</p>
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( Rmp );
