import React, {useState} from 'react';

import axios from 'axios';

const VolunteerSignUp = (props) => {

    const credentials = {
        volunteer_name : '',
        password: '',
        // email: '',
        // Phone: ''
    }

    const [signUp, setSignUp] = useState(credentials)

	const handleChange = (e) => {
        // console.log(e);
        e.persist();
        setSignUp({
            ...signUp,
            [e.target.name] : e.target.value
        })
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('https://miracle-messages2019.herokuapp.com/api/auth/register', signUp)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/')
            console.log(res)
        })
		// console.log(e);
	};
	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="form">
				<h5 className="grey-text text-darken-3">Enter Details Below</h5>
				<div className="input-field">
					<label htmlFor="name">Full Name</label>
					<input type="text" name='volunteer_name' onChange={handleChange} value={signUp.volunteer_name}/>
				</div>
				{/* <div className="input-field">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" onChange={handleChange} value={signUp.email}/>
				</div> */}
				<div className="input-field">
					<label htmlFor="password">Password</label>
					<input type="password" name='password' onChange={handleChange} value={signUp.password}/>
				</div>
				{/* <div className="input-field">
					<label htmlFor="number">Phone</label>
					<input type="number" id="number" onChange={handleChange} value={signUp.Phone}/>
				</div> */}
				<div className="input-field">
					<button className='button-submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default VolunteerSignUp;
