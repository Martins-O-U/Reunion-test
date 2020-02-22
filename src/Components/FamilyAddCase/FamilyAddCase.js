import React, { useState } from 'react';
import './FamilyAddCase.scss'

import {connect} from 'react-redux'
import {addHomie} from '../../Actions'


const FamilyAddCase = (props) => {
    const {cases, isFetching, error, addHomie} = props

    const newForm = {
        homie_name : '',
        current_city : '',
        current_state: '',
        last_location : '',
        hometown: '',
        //api for this post request (https://miracle-messages2019.herokuapp.com/api/cases)


        //Volunteer form
        // newVolunteerName : '',
    }

    const [detail, setDetail] = useState(newForm)

    const handleChange = e => { 
        e.persist();
        setDetail({
            ...detail,
            [e.target.name] : e.target.value
        })
    }

    const homie = {
        homie_name: detail.homie_name, 
        current_city: detail.current_city, 
        current_state: detail.current_state, 
        last_location: detail.last_location,
        hometown: detail.hometown
    }

    const submitForm = e => {
        e.preventDefault();
        addHomie(homie)
        setDetail(newForm) 
        console.log(homie)
        // props.history.push('/')
    }

    return (
        <div className='form-container'>
            <h1 className="h1">
            Add New Case Form:
            </h1>
            <form onSubmit={submitForm}>
                <input 
                name='homie_name' 
                placeholder='Name of missing or homeless person'
                value={detail.homie_name}
                onChange={handleChange}
                />

                <input 
                name='last_location'
                placeholder='Last known location'
                value={detail.last_location}
                onChange={handleChange}
                />

                <input 
                name='current_city' 
                placeholder='Current city of last known location'
                value={detail.current_city}
                onChange={handleChange}
                />

                <input 
                name='current_state' 
                placeholder='Current state of last known location'
                value={detail.current_state}
                onChange={handleChange}
                />

                <input 
                name='hometown' 
                placeholder='Hometown'
                value={detail.hometown}
                onChange={handleChange}
                />

                {/* <h3>For Volunteer</h3>
                <input 
                name ='newVolunteerName' 
                placeholder="Volunteer name"
                value={detail.newVolunteerName}
                onChange={handleChange}
                /> */}
                <div className="button-container">
                <button>Submit Case Form</button>
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

export default connect(mapStateToProps, {addHomie})(FamilyAddCase);