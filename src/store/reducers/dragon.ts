import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";
const initialState = {
  error: null,
  successMessage: null,
  wasCreated: false
};


const saveDragonSuccess = (state: any, action: any) => {
  return updateObject(state, { successMessage: action.successMessage, wasCreated: true });
};

const saveDragonFail = (state: any, action: any) => {
  return updateObject(state, { error: action.error, wasCreated: false });
};

const deleteDragonSuccess = (state: any, action: any) => {
  return updateObject(state, action);
};
const deleteDragonInit = (state: any, action: any) => {
  return updateObject(state, action);

}
const deleteDragonFail = (state: any, action: any) => {
  return updateObject(state, { error: action.error });
};

const createDragonFail = (state: any, action: any) => {
  return updateObject(state, { error: action.error, wasCreated: false });
};

const createDragonSuccess = (state: any, action: any) => {
  return updateObject(state, { wasCreated: action.wasCreated })
}
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SAVE_DRAGON_SUCCESS:
      return saveDragonSuccess(state, action);
    case actionTypes.SAVE_DRAGON_FAIL:
      return saveDragonFail(state, action);
    case actionTypes.DELETE_DRAGON_INIT:
      return deleteDragonInit(state, action);
    case actionTypes.DELETE_DRAGON_SUCCESS:
      return deleteDragonSuccess(state, action);
    case actionTypes.DELETE_DRAGON_FAIL:
      return deleteDragonFail(state, action);
    case actionTypes.CREATE_DRAGON_SUCCESS:
      return createDragonSuccess(state, action);
    case actionTypes.CREATE_DRAGON_FAIL:
      return createDragonFail(state, action);
    default:
      return state;
  }
};

export default reducer;
