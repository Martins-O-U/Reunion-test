import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import axios from 'axios';


const VolunteerAddCase = (props) => {

    useEffect(() => {
        axios.get('https://miracle-messages2019.herokuapp.com/api/case/:id/family')
        .then(res => {
            console.log(res)
        })
    }, [])

    const newForm = {
        homie_name : '',
        current_city : '',
        current_state: '',
        last_location : '',
        hometown: '',
        // axiosWithAuth
        //.post((https://miracle-messages2019.herokuapp.com/api/cases))

        // Volunteer form
        volunteer_id : '',
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
        hometown: detail.hometown,
        volunteer_id: detail.volunteer_id
    }

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/cases', (homie))
        .then(res => {
            console.log(res.data)
            console.log(homie)
        })
        setDetail(newForm) 
        props.history.push('/')
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

                <h3>For Volunteer</h3>
                <input 
                name ='volunteer_id' 
                type="number"
                placeholder="Volunteer ID"
                value={detail.volunteer_id}
                onChange={handleChange}
                />
                <div className="button-container">
                <button>Submit Case Form</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerAddCase;