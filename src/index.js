import './main.css'
import { createStore } from 'redux'
import reducers from './store'
import thunk from 'redux-thunk'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import React from 'react'
import ReactDom from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import {Router, Route} from "react-router"
import { applyMiddleware } from 'redux';
import MainNavigation from "./navigation";
import Layout from "./view/components/Layout";
import PhonesListPage from "./view/pages/PhonesListPage";
import PhonePage from "./view/pages/PhonePage";
import BasketPage from "./view/pages/BasketPage";

const store = createStore(reducers, composeWithDevTools (
    applyMiddleware(thunk)
    )
)

const history = syncHistoryWithStore(browserHistory,store)

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={PhonesListPage} />
                <Route path='categories/:id' component={PhonesListPage} />
            </Route>
            <Route path='phones/:id' component={PhonePage} />
            <Route path='/basket' component={BasketPage} />
        </Router>
    </Provider>,
    document.getElementById('root')
)

