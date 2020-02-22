import React, { useState, useEffect } from 'react';
import axios from 'axios';
import avatar from "../../avatar.png";

const IndividualCase = (props) => {
  const [person, setPerson] = useState(null);
  const [family, setFamily] = useState(null);

 
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://miracle-messages2019.herokuapp.com/api/cases/${id}`)
        .then(response => {
          setPerson(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);

  
  useEffect(() => {
    const id2 = props.match.params.id;

       axios
        .get(`https://miracle-messages2019.herokuapp.com/api/volunteers/case/${id2}/family`)
        .then(response => {
          setFamily(response.data.members);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);


  if (!person || !family) {
    return <div>Loading case information...</div>;
  }
//   console.log(person)

  return (
      <div className='individualContainer'>
        <div className='case-card container'>
            <div className='CaseDiv'>
                <div>
                    <h4><i>{person.homie_name}</i></h4>
                    <h6>Cureent State: <i>{person.current_state}</i></h6>
                    <h6>Current City: <i>{person.current_city}</i></h6>
                    <h6>Last Location: <i>{person.last_location}</i></h6>
                </div>
                <div className='avatarDiv' >
                    <img src={avatar} alt="Avatar" className="avatar"></img>
                </div>
            </div>
            <br></br><hr></hr>
            <h5 className='center'>Family Members As Below</h5>
            <hr></hr>
            {family.map(family => (
                <div className='family-Div' key={family.id}>
                    <div>
                        <h5><i>{family.family_name}</i></h5>
                        <h6>Relationship: <i>{family.relationship}</i></h6>
                        <h6>Phone Number: <i>{family.phone}</i></h6>
                        <h6>Current Location: <i>{family.current_location}</i></h6>
                        <h6>Email: <i>{family.email}</i></h6>
                    </div>
                    <div className='avatarDiv'>
                        <img src={avatar} alt="Avatar" className="avatar"></img>
                    </div>
                </div>
            ))}
        </div>
      </div>

  );
}

export default IndividualCase;
