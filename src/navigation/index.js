import React from "react"
import { browserHistory, Route, Router } from "react-router"
import { syncHistoryWithStore } from 'react-router-redux'

import Layout from "../view/components/Layout"
import PhonePage from "../view/pages/PhonePage"
import BasketPage from "../view/pages/BasketPage"
import PhonesListPage from '../view/pages/PhonesListPage'

const MainNavigation = () => {
    return (
       <>
            <Route component={Layout}>
                <Route path='/' component={PhonesListPage} />
                <Route path='categories/:id' component={PhonesListPage} />
            </Route>
            <Route path='phones/:id' component={PhonePage} />
            <Route path='/basket' component={BasketPage} />
       </>
    )
}

export default MainNavigation
