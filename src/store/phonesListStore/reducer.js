import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_SUCCESS, SEARCH_PHONE } from './actions'

const initialState = {
    ids: [],
    search: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const ids = payload.map(item => item.id)
            return { ...state, ids: ids }
        case LOAD_MORE_PHONES_SUCCESS:
            const newIds = payload.map(item => item.id)
            return { ...state, ids: [ ...state.ids, ...newIds] }
        case SEARCH_PHONE:
            return {...state, search: payload }
        default:
            return state
    }
}