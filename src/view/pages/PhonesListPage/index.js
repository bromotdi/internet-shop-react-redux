import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchPhones, loadMorePhones } from '../../../store/phonesListStore/actions'
import { fetchCategories} from '../../../store/catergoriesStore/actions'
import { addPhoneToBasket } from '../../../store/basketStore/actions'
import { getPhones } from "../../../store/phonesListStore/selector"

class Phones extends Component {
    componentDidMount() {
        const { fetchPhones, fetchCategories } = this.props
        fetchPhones()
        fetchCategories()
    }

    renderPhone (phone, index) {
        const { addPhoneToBasket } = this.props
        const { image, name, price, id, description } = phone
        const text = description.slice(0, 64)

        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img className='img-thumbnail' src={image} alt={name}/>
                    <div className='caption'>
                        <h4 className='pull-right'>${price}</h4>
                        <h4>
                            <Link to={`/phones/${id}`}>{name}</Link>
                        </h4>
                        <p>{text}...</p>
                        <p className='itemButton'>
                            <button className='btn btn-primary' onClick={() => addPhoneToBasket(phone.id)}>
                                Buy Now!
                            </button>
                            <Link to={`/phones/${id}`} className='btn btn-default'>More info</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { phones, loadMorePhones} = this.props

        return (
            <div>
                <div className='books row'>
                    {phones.map((phone,index)=>this.renderPhone(phone,index))}
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <button onClick={loadMorePhones} className='pull-right btn btn-primary'>
                            Load more
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => ({  phones: getPhones(store, ownProps) })
const mapDispatchToProps = { fetchPhones, loadMorePhones, addPhoneToBasket, fetchCategories }

export default connect(mapStateToProps, mapDispatchToProps)(Phones)