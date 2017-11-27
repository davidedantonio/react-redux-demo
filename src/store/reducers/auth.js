import * as actionTypes from '../actions/actionTypes';

const initialState =  {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/dashboard'
};


const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actionTypes.AUTH_START: ;
    case actionTypes.AUTH_SUCCESS: ;
    case actionTypes.AUTH_LOGOUT: ;
    case actionTypes.AUTH_FAIL: ;
    default: 
      return state;
  }
}