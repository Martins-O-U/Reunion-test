import React from 'react';
import { NavLink, Link } from 'react-router-dom';



const HeaderNav = () => {
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className='container'>
                <Link to='/' className='btn btn-floating pink lighten-1'>RU</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default HeaderNav;

const SignedInLink = (props) => {
    const onLogout = () => {
        localStorage.removeItem("token");
    }
    return (
        <ul className="right">
            <li><NavLink to='/reunitecases'>Cases</NavLink></li>
            <li><NavLink to='/volunteer-add-case'>Add A Case</NavLink></li>
            <li><NavLink to='/' onClick={onLogout}>Log Out</NavLink></li>
        </ul>
    )
}


const SignedOutLink = () => {
    return (
        <ul className="right">
            <li><NavLink to='/login'>Log In</NavLink></li>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
    )
}