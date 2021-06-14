import * as actionTypes from "./actionTypes";
import * as actions from "./index";

export const initLogin = () => {
  return {
    type: actionTypes.LOGIN_INIT
  }
};

export const loginFail = () => {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: "username or password is invalid (needs to be longer than 5 characters)"
  }
}

export const login = (credentials: { username: string; password: string; }) => {
  return (dispatch: any) => {
    if (credentials.username.length > 5 && credentials.password.length > 5) {
      dispatch(initLogin());
      dispatch(actions.getDragonsList());
    } else {
      dispatch(loginFail());
    }
  }
}




