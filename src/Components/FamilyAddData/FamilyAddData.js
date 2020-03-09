import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addFamily } from '../../Actions'


const FamilyAddData = props => {
    const { addFamily } = props

    const newForm = {
        family_name: '',
        age: '',
        relationship: '',
        current_location: '',
        email: '',
        case_id: `${props.match.params.id}`,
        phone: '',
    }

    const [detail, setDetail] = useState(newForm)

    const handleChange = e => {
        e.persist();
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })
    }

    const family = {
        family_name: detail.family_name,
        age: detail.age,
        relationship: detail.relationship,
        current_location: detail.current_location,
        email: detail.email,
        phone: detail.phone,
        case_id: detail.case_id
    }

    const submitForm = e => {
        e.preventDefault();
        addFamily(family)
        setDetail(newForm)
        props.history.push('/')
    }

    return (
        <div className=''>
            <form onSubmit={submitForm} className='form-container'>
                <h2 className="intro">Family Data</h2>
                <input
                    name='family_name'
                    placeholder='Name of family member posting'
                    value={detail.family_name}
                    onChange={handleChange}
                />

                <input
                    name='age'
                    type='number'
                    placeholder='Age'
                    value={detail.age}
                    onChange={handleChange}
                />

                <input
                    name='relationship'
                    placeholder="Relationship with missing person"
                    value={detail.relationship}
                    onChange={handleChange}
                />

                <input
                    name='current_location'
                    placeholder="Family member current location"
                    value={detail.current_location}
                    onChange={handleChange}
                />

                <input
                    name='email'
                    placeholder="Email adress"
                    value={detail.email}
                    onChange={handleChange}
                />
                <input
                    name='phone'
                    type='number'
                    placeholder='Phone Number'
                    value={detail.phone}
                    onChange={handleChange}
                />

                <div className="submit-case-button">
                    <button className='button-submit'>Submit Family Data</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cases: state.cases,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { addFamily })(FamilyAddData);