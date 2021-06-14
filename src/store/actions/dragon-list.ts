import * as actionTypes from './actionTypes';
import { sortList } from '../../shared/utility';
import axios from 'axios'



export const setDragonsList = (list: any) => {
    return {
        type: actionTypes.GET_DRAGONS_LIST_SUCCESS,
        dragonsList: list
    }
}

export const getDragonsListFail = (error: string) => {
    return {
        type: actionTypes.GET_DRAGONS_LIST_FAIL,
        error: error
    }
}

export const sortDragonsList = (list: any) => {
    return {
        type: actionTypes.SORT_DRAGON_LIST,
        sortedDragonsList: sortList(list),
        wasUpdated: false
    }
}

export const getDragonsList = () => {
    return (dispatch: (arg0: { type: string; sortedDragonsList?: any; wasUpdated?: boolean; dragonsList?: any; error?: any; }) => void) => 
        axios.get('/')
            .then(res => {
                dispatch(sortDragonsList(res.data))
                dispatch(setDragonsList(res.data));
                
            })
            .catch(error => {
                dispatch(getDragonsListFail("An error has occurred"))
            })
    
}