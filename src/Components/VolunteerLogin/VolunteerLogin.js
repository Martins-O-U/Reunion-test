import React, { useState } from 'react';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

const VolunteerLogin = (props) => {
	const credentials = {
		volunteer_name: '',
		password: ''
	}

	const [login, setLogin] = useState(credentials)

	const handleChange = (e) => {
		e.persist();
		setLogin({
			...login,
			[e.target.name]: e.target.value
		})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('https://miracle-messages2019.herokuapp.com/api/auth/login', login)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/reunitecases')
				console.log(res)
			})

	};
	return (
		<div className="sign-container">
			<form onSubmit={handleSubmit} className="form">
				<h5 className="grey-text text-darken-3">Enter Sign In Details Below</h5>
				<div className="input-field">
					<label htmlFor="name"></label>
					<input type="text" name='volunteer_name' placeholder="Enter Name" onChange={handleChange} value={login.volunteer_name} />
				</div>
				<div className="input-field">
					<label htmlFor="password"></label>
					<input type="password" name='password' placeholder="Enter Password" onChange={handleChange} value={login.password} />
				</div>
				<div className="input-field">
					<button className='button-submit'>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default VolunteerLogin;
