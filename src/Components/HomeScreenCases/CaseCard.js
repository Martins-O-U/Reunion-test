import React, {useEffect } from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import avatar from "../../avatar.png";


function CaseCard(props) {

    useEffect(() => {
        axios.get('https://miracle-messages2019.herokuapp.com/api/volunteers/case/2/family')
        .then(res => {
            // console.log(res.data)
        })
    }, [])

    const {data} = props
    // console.log(props)
    const goToEdit = () => {
        props.history.push(`/volunteer-edit-delete-case/${props.data.id}`)
        // console.log(CaseCard)
    }
    const goToAddFamData = () => {
        props.history.push(`/${props.data.id}/family-add-data`)
    }
    
    return (
        <div className='case-card' key={data.id}>
            <div className='CaseDiv'>           
                <div> 
                    <Link to={`/individualcase/${data.id}`} key={data.id} className='home'>           
                        <h4><i>{data.homie_name}</i></h4>
                        <h6>Current State: <i>{data.current_state}</i></h6>
                        <h6>Current City: <i>{data.current_city}</i></h6>
                        <h6>Last Location: <i>{data.last_location}</i></h6>
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
                <button className='button-edit' onClick={goToAddFamData}>Add Family Data</button>
            </div>

        </div>
    );
  }

  export default withRouter(CaseCard)