import React, { Component } from 'react'
import { connect }  from 'react-redux'

import { searchPhone } from '../../../store/phonesListStore/actions'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => this.setState({ value: event.target.value })

    handleSubmit = (event) => {
        const { searchPhone } = this.props
        const { value } = this.state
        event.preventDefault()
        searchPhone(value)
    }

    render() {
        return (
            <div className='well blosd'>
                <h3 className='lead'> Quick shop </h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} type="text" className='form-control' />
                    </form>
                    <span className='input-group-btn'>
                        <button onClick={this.handleSubmit} className='btn btn-default'>
                            <span className='glyphicon glyphicon-search' />
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = { searchPhone }

export default connect(null,mapDispatchToProps)(Search)