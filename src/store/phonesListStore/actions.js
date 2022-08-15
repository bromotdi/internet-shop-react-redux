import * as API from "../../services/api"

export const FETCH_PHONES_START = 'FETCH_PHONES_START'
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS'
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE'

export const LOAD_MORE_PHONES_START = 'LOAD_MORE_PHONES_START'
export const LOAD_MORE_PHONES_SUCCESS = 'LOAD_MORE_PHONES_SUCCESS'
export const LOAD_MORE_PHONES_FAILURE = 'LOAD_MORE_PHONES_FAILURE'

export const SEARCH_PHONE = 'SEARCH_PHONE'

export const fetchPhones = () => async dispatch => {
    dispatch({ type: FETCH_PHONES_START })

    try {
        const phones = await API.fetchPhones()
        dispatch({ type: FETCH_PHONES_SUCCESS, payload: phones })
    } catch (err) {
        console.log('EROR', err)
        dispatch({ type: FETCH_PHONES_FAILURE, payload: err, error: true })
    }
}

export const loadMorePhones  = () => async (dispatch, getState) => {
    const offset = getState().phonesPage.ids.length
    dispatch({ type: LOAD_MORE_PHONES_START })

    try {
        const phones = await API.loadMorePhones({ offset })
        dispatch({ type: LOAD_MORE_PHONES_SUCCESS, payload: phones })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const searchPhone = text => dispatch => dispatch({ type: SEARCH_PHONE, payload: text })