import React from 'react'
import { Link } from "react-router"
import { connect } from 'react-redux'

import { getTotalBasketCount,getTotalBasketPrice } from "../../../store/basketStore/selector"

const BasketCart = ({totalBasketCount, totalPrice}) => (
    <div className='cart'>
        <div className='dropdown'>
            <Link to='/basket' id='dLabel' className='btn btn-inverse btn-block btn-lg'>
                <i className='fa fa-fa-shopping-cart' />
                <span>{totalBasketCount} item(s) - ${totalPrice}</span>
            </Link>
        </div>
    </div>
)

const mapStateToProps = store => ({
    totalBasketCount: getTotalBasketCount(store),
    totalPrice: getTotalBasketPrice(store)
})

export default connect(mapStateToProps, null)(BasketCart)