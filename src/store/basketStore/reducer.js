import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, CLEAN_BASKET } from './actions'

const initialState = []

export default (state = initialState, {type,payload}) => {
    switch (type)
    {
        case ADD_PHONE_TO_BASKET:
            return [...state, payload]
        case REMOVE_PHONE_FROM_BASKET:
            state.splice(state.indexOf(payload), 1)
            return [...state]
        case CLEAN_BASKET:
            return initialState
        default:
            return state
    }
}