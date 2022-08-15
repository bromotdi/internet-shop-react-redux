import { FETCH_CATEGORIES_SUCCESS } from './actions'

const initialState = {
    values: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
            return { ...state, values: payload }
        default:
            return state
    }
}