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
        homie_name: '',
        current_city: '',
        current_state: '',
        last_location: '',
        hometown: '',
        volunteer_id: '',
    }

    const [detail, setDetail] = useState(newForm)

    const handleChange = e => {
        e.persist();
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
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
            })
        setDetail(newForm)
        props.history.push('/')
    }

    return (
        <div className='form-container'>
            <h2 className="intro">New Case Form</h2>
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

                <input
                    name='volunteer_id'
                    type="number"
                    placeholder="Volunteer ID (Volunteers only, else skip to submit)"
                    value={detail.volunteer_id}
                    onChange={handleChange}
                />
                <div className="submit-case-button">
                    <button className="button-submit">Submit Case</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerAddCase;