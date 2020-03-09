import React, { useState } from 'react';

import axios from 'axios';

const VolunteerSignUp = (props) => {

	const credentials = {
		volunteer_name: '',
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
			[e.target.name]: e.target.value
		})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://miracle-messages2019.herokuapp.com/api/auth/register', signUp)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/login')
			})
	};
	return (
		<div className="sign-container">
			<form onSubmit={handleSubmit} className="form">
				<h5 className="grey-text text-darken-3">Enter Details Below</h5>
				<div className="input-field">
					<label htmlFor="name"></label>
					<input type="text" name='volunteer_name' placeholder="Full Name" onChange={handleChange} value={signUp.volunteer_name} />
				</div>
				<div className="input-field">
					<label htmlFor="password"></label>
					<input type="password" name='password' placeholder="Password" onChange={handleChange} value={signUp.password} />
				</div>
				<div className="input-field">
					<button className='button-submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default VolunteerSignUp;
