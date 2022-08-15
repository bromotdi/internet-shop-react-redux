import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router'
import { compose } from 'redux'

import { getCategories,getActiveCategoryId } from '../../../store/catergoriesStore/selector'

const Categories = ({ categories , activeCategoryId }) => {

    const renderCategory = (category, index) => {
        const isActive = activeCategoryId === category.id
        const className = `list-group-item ${isActive && 'active'}`

        return (
            <Link to={`/categories/${category.id}`} className={className} key={index} >
                {category.name}
            </Link>
        )
    }

    return (
        <div className='well'>
            <h4>Brand</h4>
            <div className='list-group'>
                <Link to='/' className={`list-group-item ${!activeCategoryId && 'active'}`}>
                    All
                </Link>
                {categories.map((category, index) => renderCategory(category, index))}
            </div>
        </div>
    )
}

const mapStateToProps = (store, ownProps) => ({
    categories: getCategories(store),
    activeCategoryId: getActiveCategoryId(ownProps)
})

export default compose(withRouter,connect(mapStateToProps, null))(Categories)
