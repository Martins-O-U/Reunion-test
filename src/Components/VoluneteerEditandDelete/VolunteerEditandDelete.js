import React, {useState, useEffect} from 'react';
import axios from 'axios';


const VolunteerEditandDelete = props => {

    const initialCaseDetails = {
        id: `${props.match.params.id}`,
        homie_name: '',
        current_city: '',
        current_state: '',
        last_location : '',
        hometown: ''
    };

    const [detail, setDetail] = useState(initialCaseDetails);

    useEffect(() => {
        const id = props.match.params.id;
        const detailUpdate = props.caseData.find(cases => {
            return `${cases.id}` === id;
        })
        // console.log(detailUpdate);
        if (detailUpdate) {
            setDetail(detailUpdate)
        }
    }, [props.match.params.id, props.caseData])

    const handleChange = e => {
        e.persist();
        setDetail({
            ...detail,
            [e.target.name] : e.target.value
        })
    }
    const submit = e => {
        e.preventDefault();
        console.log(detail)
        axios
        .put(`https://miracle-messages2019.herokuapp.com/api/cases/${props.match.params.id}`, detail)
        .then(res => {
            setDetail(initialCaseDetails);
            props.history.push('/')
        })
        // axios PUT request and then props.history.push to '/home-volunteer'        
    }
    const deleteCase = e => {
        e.preventDefault();
        axios
        .delete(`https://miracle-messages2019.herokuapp.com/api/cases/${props.match.params.id}`)
        .then(res => {
            props.history.push('/')
        })
        // axios DELETE request and then props.history.push to '/home-volunteer'
    }
    

    return (
        <div className='form-container'>
            <h1 className='h1'>
                 Edit Case Form: 
                 </h1>
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

                <div className="button-container" >
                <button>Save Edit</button>
                <button onClick={deleteCase}>Delete Case Form</button>
                </div>
            </form>
        </div>
    )
}

export default VolunteerEditandDelete;