import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import avatar from "../../images/avatar.png";


function CaseCard(props) {

    useEffect(() => {
        axios.get('https://miracle-messages2019.herokuapp.com/api/volunteers/case/2/family')
            .then(res => {
            })
    }, [])

    const { data } = props
    const goToEdit = () => {
        props.history.push(`/volunteer-edit-delete-case/${props.data.id}`)
    }
    const goToAddFamData = () => {
        props.history.push(`/${props.data.id}/family-add-data`)
    }

    return (
        <div className='case-card' key={data.id}>
            <div className='CaseDiv'>
                <div>
                    <Link to={`/individualcase/${data.id}`} key={data.id} className='home'>
                        <h5><i>{data.homie_name}</i></h5>
                        <p><i><strong>Current City, State: </strong>{data.current_city}, {data.current_state}</i></p>
                        <p><i><strong>Last Known Location: </strong>{data.last_location}</i></p>
                    </Link>
                </div>
                <div className='avatarDiv'>
                    <Link to={`/individualcase/${data.id}`} key={data.id}>
                        <img src={avatar} alt="Avatar" className="avatar"></img>
                    </Link>
                </div>
            </div>
            <div className='btn-edit'>
                <button className='button-edit' onClick={goToEdit}>Edit Case</button>
                <button className='button-edit' onClick={goToAddFamData}>Add Family</button>
            </div>

        </div>
    );
}

export default withRouter(CaseCard)