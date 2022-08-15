import * as API from "../../services/api";

export const FETCH_PHONE_BY_ID_START = 'FETCH_PHONE_BY_ID_START'
export const FETCH_PHONE_BY_ID_SUCCESS = 'FETCH_PHONE_BY_ID_SUCCESS'
export const FETCH_PHONE_BY_ID_FAILURE = 'FETCH_PHONE_BY_ID_FAILURE'

export const fetchPhoneById  = id => async dispatch => {
    dispatch({ type: FETCH_PHONE_BY_ID_START })

    try {
        const phone = await API.fetchPhoneById(id)
        dispatch({ type: FETCH_PHONE_BY_ID_SUCCESS, payload: phone })
    } catch (err) {
        dispatch({
            type: FETCH_PHONE_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}