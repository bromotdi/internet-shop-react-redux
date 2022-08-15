import * as API from "../../services/api";

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'

export const fetchCategories = () => async dispatch => {
    dispatch({ type: FETCH_CATEGORIES_START })

    try {
        const categories = await API.fetchCategories()
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories })
    } catch (err) {
        dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: err, error: true })
    }
}