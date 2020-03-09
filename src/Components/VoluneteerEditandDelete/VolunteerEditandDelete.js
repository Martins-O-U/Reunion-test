import React, { useState, useEffect } from 'react';
import axios from 'axios';


const VolunteerEditandDelete = props => {

    const initialCaseDetails = {
        id: `${props.match.params.id}`,
        homie_name: '',
        current_city: '',
        current_state: '',
        last_location: '',
        hometown: ''
    };

    const [detail, setDetail] = useState(initialCaseDetails);

    useEffect(() => {
        const id = props.match.params.id;
        const detailUpdate = props.caseData.find(cases => {
            return `${cases.id}` === id;
        })
        if (detailUpdate) {
            setDetail(detailUpdate)
        }
    }, [props.match.params.id, props.caseData])

    const handleChange = e => {
        e.persist();
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })
    }
    const submit = e => {
        e.preventDefault();
        axios
            .put(`https://miracle-messages2019.herokuapp.com/api/cases/${props.match.params.id}`, detail)
            .then(res => {
                setDetail(initialCaseDetails);
                props.history.push('/')
            })
    }
    const deleteCase = e => {
        e.preventDefault();
        axios
            .delete(`https://miracle-messages2019.herokuapp.com/api/cases/${props.match.params.id}`)
            .then(res => {
                props.history.push('/')
            })
    }


    return (
        <div className='form-container' id="edit">
            <h2 className='intro'>Edit Case Form</h2>
            <form onSubmit={submit}>
                <input
                    name='homie_name'
                    value={detail.homie_name}
                    onChange={handleChange}
                />

                <input
                    name='current_city'
                    value={detail.current_city}
                    onChange={handleChange}
                />

                <input
                    name='current_state'
                    value={detail.current_state}
                    onChange={handleChange}
                />

                <input
                    name='last_location'
                    value={detail.last_location}
                    onChange={handleChange}
                />

                <input
                    name="hometown"
                    value={detail.hometown}
                    onChange={handleChange}
                />

                <div className="submit-case-button" >
                    <button className="button-edit">Save Edit</button>
                    <button className="button-edit" onClick={deleteCase}>Delete Case Form</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerEditandDelete;