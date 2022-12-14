import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchPhoneById  } from '../../../store/phoneStore/actions'
import { addPhoneToBasket } from '../../../store/basketStore/actions'
import BasketCart from '../../components/BasketCart'

class Phone extends Component {

    componentDidMount() {
        const { params: { id }, fetchPhoneById } = this.props
        fetchPhoneById(id)
    }

    renderFields () {
        const { phone } = this.props
        const fields = ['cpu', 'camera', 'size', 'weight', 'display', 'battery', 'memory']
        const columnFields = fields.map(field => ([field, phone[field]]))

        return columnFields.map(([key, value]) => (
            <div className='column' key={key}>
                <div className='ab-details-title'><p>{key}</p></div>
                <div className='ab-details-info'>{value}</div>
            </div>
        ))
    }

    renderContent (){
        const { phone } = this.props

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-thumbnail' src={phone.image} alt={phone.name}/>
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderSidebar () {
        const {phone, addPhoneToBasket} = this.props
        return (
            <div>
                <p className='lead'>Quick shop</p>
                <BasketCart />
                <div className='form-group'>
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>Back to store</Link>
                <button type='button' className='btn btn-success btn-block'  onClick={() => addPhoneToBasket(phone.id)}>
                    Add to cart
                </button>
            </div>
        )
    }

    render(){
        const { phone } = this.props

        return (
            <div className='view-container'>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-9'>
                           {phone && this.renderContent()}
                       </div>
                       <div className='col-md-3'>
                           {phone && this.renderSidebar()}
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = ({ phones, routing }) => ({
    phone: phones[routing.locationBeforeTransitions.pathname.split('/')[2]]
})
const mapDispatchToProps ={ fetchPhoneById, addPhoneToBasket }

export default connect(mapStateToProps, mapDispatchToProps)(Phone)