import { FETCH_PHONE_BY_ID_SUCCESS } from './actions'
import {  FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS } from '../phonesListStore/actions'

const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type){
        case FETCH_PHONES_SUCCESS:
            const newValues = {}
            payload.forEach(item => (newValues[item.id] = item))
            return { ...state, ...newValues }
        case LOAD_MORE_PHONES_SUCCESS:
            const moreValues = {}
            payload.forEach(item => (moreValues[item.id] = item))
            return { ...state, ...moreValues }
        case FETCH_PHONE_BY_ID_SUCCESS:
            return { ...state, [payload.id]: payload }
        default:
            return state
    }
}


/*
*
*
* import {
    FETCH_PHONE_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {
    id: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONE_BY_ID_SUCCESS:
            return { ...state, id : payload.id}
        default:
            return state
    }
}
* */