import * as actionTypes from './actionTypes';
import * as actions from './index';
import axios, { AxiosResponse } from 'axios'

axios.defaults.baseURL = 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

export const saveDragon = (dragonDetails: { id: any; }) => {
  return (dispatch: any) => {
    const url = `/${dragonDetails.id}`;
    axios.put(url, dragonDetails)
      .then(response => {
        dispatch(saveDragonSuccess(response));
        dispatch(actions.getDragonsList());
      })
      .catch(_error => {
        dispatch(saveDragonFail("An error has occurred"));
      })
  }
}

export const saveDragonSuccess = (success: AxiosResponse<any>) => {
  return {
    type: actionTypes.SAVE_DRAGON_SUCCESS,
    successMessage: success
  }
}

export const saveDragonFail = (error: string) => {
  return {
    type: actionTypes.SAVE_DRAGON_FAIL,
    error: error
  }
}

export const deleteDragon = (dragonId: any) => {
  return (dispatch: any) => {
    dispatch(deleteDragonInit());
    const url = `/${dragonId}`;
    axios.delete(url)
      .then(_response => {
        dispatch(deleteDragonSuccess(true));
        dispatch(actions.getDragonsList());
      })
      .catch(_error => {
        dispatch(deleteDragonFail("An error has occurred"))
      })
  }
}
export const deleteDragonInit = () => {
  return {
    type: actionTypes.DELETE_DRAGON_INIT,

  }
}

export const deleteDragonSuccess = (_success: boolean) => {
  return {
    type: actionTypes.DELETE_DRAGON_SUCCESS,

  }
}

export const deleteDragonFail = (error: string) => {
  return {
    type: actionTypes.DELETE_DRAGON_FAIL,
    error: error,

  }
}


export const createDragon = (newDragon: any) => {
  return (dispatch: any) => {
    const url = `/`;
    axios.post(url, newDragon)
      .then(_response => {
        dispatch(createDragonSuccess(true));
        dispatch(actions.getDragonsList());
      })
      .catch(_error => {
        dispatch(createDragonFail("An error has occurred"));
      })

  }
}


export const createDragonSuccess = (success: boolean) => {
  return {
    type: actionTypes.CREATE_DRAGON_SUCCESS,
    wasCreated: success
  }
}

export const createDragonFail = (error: string) => {
  return {
    type: actionTypes.CREATE_DRAGON_FAIL,
    error: error
  }
}
