import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import categories from "./catergoriesStore/reducer";
import phones from './phoneStore/reducer'
import basket from './basketStore/reducer'
import phonesPage from './phonesListStore/reducer'


export default combineReducers({
    routing: routerReducer,
    phonesPage,
    phones,
    basket,
    categories
})