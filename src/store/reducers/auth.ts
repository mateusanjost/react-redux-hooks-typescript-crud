import * as actionTypes from "../actions/actionTypes";
import {updateObject} from '../../shared/utility';


const initialState = {
  isLoggedIn: false,
  error: ""
};


const initLogin = (state: any) => {
    return updateObject(state, {isLoggedIn: true});
}

const loginFail = (state: any, action: any) => {
    return updateObject(state, { error: action.error})
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case actionTypes.LOGIN_INIT:
            return initLogin(state);
        case actionTypes.LOGIN_FAIL:
            return loginFail(state,action);
        default:
            return state;
    }
}

export default reducer;